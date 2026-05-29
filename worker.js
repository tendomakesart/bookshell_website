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

  if (!env.BUTTONDOWN_API_KEY) {
    return json({ error: "Early access signup is not configured yet." }, { status: 503 });
  }

  const tag = env.BUTTONDOWN_TAG || "bookshell-early-access";
  const ipAddress = request.headers.get("CF-Connecting-IP") || undefined;
  const response = await fetch("https://api.buttondown.com/v1/subscribers", {
    body: JSON.stringify({
      email_address: email,
      ip_address: ipAddress,
      tags: [tag]
    }),
    headers: {
      Authorization: `Token ${env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
      "X-Buttondown-Collision-Behavior": "add"
    },
    method: "POST"
  });

  if (!response.ok) {
    return json({ error: "That email did not go through. Please try again." }, { status: 502 });
  }

  return json({ ok: true, storedRemotely: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/waitlist") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: {
            Allow: "POST, OPTIONS"
          },
          status: 204
        });
      }

      if (request.method === "POST") {
        return handleWaitlistSignup(request, env);
      }

      return json({ error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
    }

    return env.ASSETS.fetch(request);
  }
};
