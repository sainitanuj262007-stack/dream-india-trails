import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { EMAIL_ADDRESS, PHONE_DISPLAY, whatsappLink } from "@/lib/site-data";

export function LegalPageLayout({ title, lastUpdated = "[ADD DATE]", children }: { title: string; lastUpdated?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main className="pt-20">
        <header className="bg-sand px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <Link to="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline">
              <ArrowLeft className="size-4" aria-hidden="true" /> Back to home
            </Link>
            <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>
        </header>
        <div className="mx-auto max-w-4xl space-y-9 px-5 py-12 sm:px-8 sm:py-16">
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-border pb-9 last:border-0 last:pb-0" aria-labelledby={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
      <h2 id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="text-2xl leading-snug sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

export function LegalContact({ address = false }: { address?: boolean }) {
  return (
    <ul className="space-y-2">
      <li>WhatsApp: <a href={whatsappLink("Hi! I have a question for Destinations Planner.")} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{PHONE_DISPLAY}</a></li>
      <li>Email: <a href={`mailto:${EMAIL_ADDRESS}`} className="text-primary hover:underline">{EMAIL_ADDRESS}</a></li>
      {address && <li>Business address: [ADD BUSINESS ADDRESS IF REQUIRED]</li>}
    </ul>
  );
}