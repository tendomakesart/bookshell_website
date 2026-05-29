export const WAITLIST_MODE = "static" as const;

export type WaitlistResult = {
  mode: typeof WAITLIST_MODE;
  storedRemotely: false;
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  if (!isValidEmail(email)) {
    throw new Error("Please enter a valid email address.");
  }

  return {
    mode: WAITLIST_MODE,
    storedRemotely: false
  };
}
