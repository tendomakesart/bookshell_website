const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {})
    }
  });
}

function hasAdminAccess(request, env) {
  const expectedToken = env.WAITLIST_ADMIN_TOKEN;
  const header = request.headers.get("Authorization") || "";
  const submittedToken = header.startsWith("Bearer ") ? header.slice("Bearer ".length).trim() : "";

  return Boolean(expectedToken && submittedToken && submittedToken === expectedToken);
}

async function handleWaitlistSignup(request, env) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return json({ error: "Send a valid email address." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const website = typeof payload.website === "string" ? payload.website.trim() : "";

  if (website) {
    return json({ ok: true, storedRemotely: false });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return json({ error: "Enter a valid email to join early access." }, { status: 400 });
  }

  if (!env.WAITLIST_DB) {
    return json({ error: "Early access signup storage is not configured yet." }, { status: 503 });
  }

  const source = typeof payload.source === "string" ? payload.source.slice(0, 120) : "website";
  const tag = env.WAITLIST_TAG || "bookshell-early-access";

  try {
    await env.WAITLIST_DB.prepare(
      `insert into waitlist_signups (email, source, tag)
       values (?, ?, ?)
       on conflict(email) do update set
         source = excluded.source,
         tag = excluded.tag,
         updated_at = CURRENT_TIMESTAMP`
    )
      .bind(email, source, tag)
      .run();
  } catch {
    return json({ error: "That email did not go through. Please try again." }, { status: 502 });
  }

  return json({ ok: true, storedRemotely: true });
}

async function handleWaitlistAdmin(request, env) {
  if (!env.WAITLIST_ADMIN_TOKEN) {
    return json({ error: "Waitlist admin is not configured yet." }, { status: 503 });
  }

  if (!hasAdminAccess(request, env)) {
    return json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!env.WAITLIST_DB) {
    return json({ error: "Early access signup storage is not configured yet." }, { status: 503 });
  }

  const url = new URL(request.url);
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit")) || 200, 1), 500);

  try {
    const result = await env.WAITLIST_DB.prepare(
      `select email, source, tag, created_at, updated_at
       from waitlist_signups
       order by created_at desc
       limit ?`
    )
      .bind(limit)
      .all();

    return json({
      ok: true,
      count: result.results.length,
      signups: result.results
    });
  } catch {
    return json({ error: "Could not load waitlist signups." }, { status: 502 });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/waitlist" || url.pathname === "/api/waitlist/admin") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: {
            Allow: url.pathname === "/api/waitlist/admin" ? "GET, OPTIONS" : "POST, OPTIONS"
          },
          status: 204
        });
      }

      if (url.pathname === "/api/waitlist/admin") {
        if (request.method === "GET") {
          return handleWaitlistAdmin(request, env);
        }

        return json({ error: "Method not allowed." }, { status: 405, headers: { Allow: "GET" } });
      }

      if (request.method === "POST") {
        return handleWaitlistSignup(request, env);
      }

      return json({ error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
    }

    return env.ASSETS.fetch(request);
  }
};
