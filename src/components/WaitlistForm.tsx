import { FormEvent, useId, useState } from "react";
import { isValidEmail, joinWaitlist } from "../waitlist";

type WaitlistFormProps = {
  compact?: boolean;
};

export function WaitlistForm({ compact = false }: WaitlistFormProps) {
  const emailId = useId();
  const websiteId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [website, setWebsite] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();

    if (!isValidEmail(trimmed)) {
      setSuccess(false);
      setError("Enter a valid email to join early access.");
      return;
    }

    setIsSubmitting(true);
    try {
      await joinWaitlist(trimmed, website);
      setError("");
      setSuccess(true);
      setEmail("");
      setWebsite("");
    } catch (submissionError) {
      setSuccess(false);
      setError(submissionError instanceof Error ? submissionError.message : "That email did not go through. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={`waitlist-form ${compact ? "waitlist-form-compact" : ""}`} onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <label className="sr-only" htmlFor={emailId}>
          Email address
        </label>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="reader@example.com"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`${emailId}-message`}
        />
        <label className="waitlist-honeypot" htmlFor={websiteId} aria-hidden="true">
          Website
          <input
            id={websiteId}
            type="text"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Joining..." : "Join early access"}</button>
      </div>
      <p id={`${emailId}-message`} className={`form-message ${error ? "form-error" : ""}`} aria-live="polite">
        {error ||
          (success
            ? "You're on the list. I'll send early access updates when BookShell is ready."
            : "Early access for readers who want EPUBs, PDFs, Shell Notes, and soundtracks in one calm workspace.")}
      </p>
    </form>
  );
}
