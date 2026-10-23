import { createFileRoute, Link } from "@tanstack/react-router";
import { SitePageLayout } from "@/components/site/SitePageLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Sparkles, ShieldCheck, Headphones, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About | Destinations Planner" },
    { name: "description", content: "Thoughtful travel in India, planned around you. Learn how Destinations Planner approaches every journey." },
    { property: "og:title", content: "About | Destinations Planner" },
    { property: "og:description", content: "Thoughtful travel in India, planned around you. Learn how Destinations Planner approaches every journey." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SitePageLayout>
        <section  className="scroll-mt-20 bg-sand px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Travel, thoughtfully done</p>
              <h1 className="mt-4 max-w-lg text-4xl leading-[1.08] sm:text-5xl">See India through the eyes of people who love it.</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                India is too rich for a checklist. We create unhurried journeys that connect you with its landscapes, food, stories and people — with the right amount of comfort along the way.
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                Whether it is your first visit or your tenth, your trip is planned by a real travel specialist who listens first, knows the details and stays close throughout.
              </p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3">
                Start planning your India <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>

        <section  className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">The Destinations difference</p>
              <h2 className="mt-4 max-w-md text-4xl leading-[1.08] sm:text-5xl">A little more care goes a long way.</h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">The best trips feel effortless because someone thoughtful took care of the details before you arrived.</p>
            </Reveal>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {[
                [Sparkles, "Personal, not packaged", "Every itinerary starts with your interests, energy and travel style — never a template."],
                [ShieldCheck, "Comfort you can count on", "Trusted stays, vetted drivers and clear communication make every day feel easy."],
                [Headphones, "A human on your side", "From the first WhatsApp message to the final transfer, your planner is close by."],
                [Users, "Made for your people", "Couples, families, friends, groups and first-time visitors all travel differently. We get that."],
              ].map(([Icon, title, copy], index) => {
                const FeatureIcon = Icon as typeof Sparkles;
                return <Reveal key={title as string} delay={index * 80}><div className="border-t border-border pt-5"><FeatureIcon className="size-6 text-teal" aria-hidden="true" /><h3 className="mt-4 font-sans text-base font-bold tracking-normal">{title as string}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy as string}</p></div></Reveal>;
              })}
            </div>
          </div>
        </section>
    </SitePageLayout>
  );
}
