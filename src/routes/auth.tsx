import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in | OnPagePro" },
      { name: "description", content: "Sign in to your OnPagePro workspace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [awaitingConfirmation, setAwaitingConfirmation] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) void router.navigate({ to: "/" });
    });
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          toast.error(error.message);
          return;
        }
        await router.navigate({ to: "/" });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) {
          toast.error(error.message);
          return;
        }
        if (!data.session) {
          setAwaitingConfirmation(true);
          return;
        }
        await router.navigate({ to: "/" });
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">OnPagePro</h1>
          <p className="mt-1 text-sm text-muted-foreground">Multi-website on-page SEO, focused on what matters.</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          {awaitingConfirmation ? (
            <div className="text-center">
              <h2 className="text-lg font-semibold">Check your email</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We sent a confirmation link to <span className="font-medium text-foreground">{email}</span>. Click it to
                activate your account, then sign in.
              </p>
              <Button variant="outline" className="mt-4 w-full" onClick={() => setAwaitingConfirmation(false)}>
                Back to sign in
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-4 grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
                <button
                  type="button"
                  onClick={() => setMode("signin")}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    mode === "signin" ? "bg-card shadow-soft text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    mode === "signup" ? "bg-card shadow-soft text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Create account
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    minLength={6}
                    autoComplete={mode === "signin" ? "current-password" : "new-password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={busy}>
                  {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
