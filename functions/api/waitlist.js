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

async function handleWaitlistSignup(context) {
  let payload;

  try {
    payload = await context.request.json();
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

  if (!context.env.WAITLIST_DB) {
    return json({ error: "Early access signup storage is not configured yet." }, { status: 503 });
  }

  const source = typeof payload.source === "string" ? payload.source.slice(0, 120) : "website";
  const tag = context.env.WAITLIST_TAG || "bookshell-early-access";

  try {
    await context.env.WAITLIST_DB.prepare(
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

export async function onRequest(context) {
  const method = context.request.method;

  if (method === "OPTIONS") {
    return new Response(null, {
      headers: {
        Allow: "POST, OPTIONS"
      },
      status: 204
    });
  }

  if (method === "POST") {
    return handleWaitlistSignup(context);
  }

  return json({ error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
}
