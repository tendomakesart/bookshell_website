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

async function handleAdmin(context) {
  if (!context.env.WAITLIST_ADMIN_TOKEN) {
    return json({ error: "Waitlist admin is not configured yet." }, { status: 503 });
  }

  if (!hasAdminAccess(context.request, context.env)) {
    return json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!context.env.WAITLIST_DB) {
    return json({ error: "Early access signup storage is not configured yet." }, { status: 503 });
  }

  const url = new URL(context.request.url);
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit")) || 200, 1), 500);

  try {
    const result = await context.env.WAITLIST_DB.prepare(
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

export async function onRequest(context) {
  if (context.request.method === "GET") {
    return handleAdmin(context);
  }

  return json({ error: "Method not allowed." }, { status: 405, headers: { Allow: "GET" } });
}
