import { FormEvent, StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Signup = {
  created_at: string;
  email: string;
  source: string;
  tag: string;
  updated_at: string;
};

type AdminResponse = {
  count?: number;
  error?: string;
  signups?: Signup[];
};

const TOKEN_STORAGE_KEY = "bookshell_waitlist_admin_token";

function csvEscape(value: string) {
  return `"${value.replace(/"/g, "\"\"")}"`;
}

function downloadCsv(signups: Signup[]) {
  const rows = [
    ["email", "source", "tag", "created_at", "updated_at"],
    ...signups.map((signup) => [signup.email, signup.source, signup.tag, signup.created_at, signup.updated_at])
  ];
  const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `bookshell-waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function formatDate(value: string) {
  if (!value) {
    return "Unknown";
  }

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value.replace(" ", "T") + "Z"));
}

function AdminApp() {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_STORAGE_KEY) || "");
  const [draftToken, setDraftToken] = useState(token);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signups, setSignups] = useState<Signup[]>([]);
  const emails = useMemo(() => signups.map((signup) => signup.email).join("\n"), [signups]);

  async function loadSignups(nextToken = token) {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist/admin?limit=500", {
        headers: {
          Authorization: `Bearer ${nextToken}`
        }
      });
      const payload = (await response.json().catch(() => null)) as AdminResponse | null;

      if (!response.ok) {
        throw new Error(payload?.error || "Could not load waitlist signups.");
      }

      setSignups(payload?.signups || []);
    } catch (loadError) {
      setSignups([]);
      setError(loadError instanceof Error ? loadError.message : "Could not load waitlist signups.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleTokenSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = draftToken.trim();

    setToken(trimmed);
    sessionStorage.setItem(TOKEN_STORAGE_KEY, trimmed);
    void loadSignups(trimmed);
  }

  function clearToken() {
    setToken("");
    setDraftToken("");
    setSignups([]);
    setError("");
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  }

  async function copyEmails() {
    if (!emails) {
      return;
    }

    await navigator.clipboard.writeText(emails);
  }

  return (
    <main className="admin-shell">
      <section className="admin-panel">
        <div className="admin-heading">
          <div>
            <p className="eyebrow">BookShell Admin</p>
            <h1>Early access signups</h1>
            <p>Private viewer for the Cloudflare D1 waitlist.</p>
          </div>
          <a href="/">Back to site</a>
        </div>

        <form className="admin-token-form" onSubmit={handleTokenSubmit}>
          <label htmlFor="admin-token">Admin token</label>
          <div>
            <input
              id="admin-token"
              type="password"
              value={draftToken}
              onChange={(event) => setDraftToken(event.target.value)}
              placeholder="Paste WAITLIST_ADMIN_TOKEN"
              autoComplete="current-password"
            />
            <button type="submit" disabled={isLoading || !draftToken.trim()}>
              {isLoading ? "Loading..." : "Load signups"}
            </button>
          </div>
        </form>

        <div className="admin-toolbar">
          <span>{signups.length} signups loaded</span>
          <button type="button" onClick={() => void loadSignups()} disabled={isLoading || !token}>
            Refresh
          </button>
          <button type="button" onClick={() => void copyEmails()} disabled={!signups.length}>
            Copy emails
          </button>
          <button type="button" onClick={() => downloadCsv(signups)} disabled={!signups.length}>
            Export CSV
          </button>
          <button type="button" onClick={clearToken}>
            Clear token
          </button>
        </div>

        {error ? <p className="admin-error">{error}</p> : null}

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Source</th>
                <th>Tag</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {signups.length ? (
                signups.map((signup) => (
                  <tr key={signup.email}>
                    <td>{signup.email}</td>
                    <td>{signup.source}</td>
                    <td>{signup.tag}</td>
                    <td>{formatDate(signup.created_at)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No signups loaded yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AdminApp />
  </StrictMode>
);
