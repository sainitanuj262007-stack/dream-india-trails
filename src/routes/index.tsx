import { ArrowUpRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Destinations Planner | India Travel, Your Way" },
      { name: "description", content: "Thoughtfully planned India holidays, private tours and comfortable car rentals for families, couples, groups and international travellers." },
      { property: "og:title", content: "Destinations Planner | India Travel, Your Way" },
      { property: "og:description", content: "Thoughtfully planned India holidays, private tours and comfortable car rentals for travellers who want to see India beautifully." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />

        <section className="border-b border-border bg-background" aria-label="Travel highlights">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 sm:grid-cols-4 sm:px-8">
            {[
              ["01", "Personalised plans", "Built around your pace"],
              ["02", "Local insight", "India beyond the obvious"],
              ["03", "Private comfort", "Cars, drivers and care"],
              ["04", "Always supported", "From first chat to home"],
            ].map(([number, title, copy], index) => (
              <Reveal key={title} delay={index * 80} className="border-b border-border px-4 py-6 first:pl-0 last:pr-0 sm:border-b-0 sm:px-6 sm:py-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary">{number}</p>
                <h2 className="mt-2 font-sans text-sm font-bold tracking-normal text-foreground">{title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{copy}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-sand px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="explore-heading">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Explore Destinations Planner</p>
            <h2 id="explore-heading" className="mt-4 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">Your India journey, your way.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["About", "Thoughtful journeys, planned around you.", "/about"],
                ["Services", "Tour packages and comfortable car rentals.", "/services"],
                ["Destinations", "Explore the places that stay with you.", "/destinations"],
                ["Travel Stories", "Find inspiration for your next journey.", "/stories"],
                ["Reviews", "Hear from fellow travellers.", "/reviews"],
                ["Contact", "Let's plan your next trip together.", "/contact"],
              ] as const).map(([title, description, to]) => (
                <Link key={to} to={to} className="group border-t border-border py-5 transition-colors hover:text-primary">
                  <span className="flex items-center justify-between gap-4 font-display text-2xl">{title}<ArrowUpRight className="size-5 shrink-0" aria-hidden="true" /></span>
                  <span className="mt-2 block text-sm text-muted-foreground">{description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
