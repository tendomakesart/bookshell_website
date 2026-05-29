export const WAITLIST_MODE = "api" as const;

export type WaitlistResult = {
  mode: typeof WAITLIST_MODE;
  storedRemotely: boolean;
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function joinWaitlist(email: string, website = ""): Promise<WaitlistResult> {
  if (!isValidEmail(email)) {
    throw new Error("Please enter a valid email address.");
  }

  const response = await fetch("/api/waitlist", {
    body: JSON.stringify({ email: email.trim(), source: window.location.pathname, website }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  const payload = (await response.json().catch(() => null)) as { error?: string; storedRemotely?: boolean } | null;

  if (!response.ok) {
    throw new Error(payload?.error || "That email did not go through. Please try again.");
  }

  return {
    mode: WAITLIST_MODE,
    storedRemotely: Boolean(payload?.storedRemotely)
  };
}
