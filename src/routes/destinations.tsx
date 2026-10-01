import { createFileRoute } from "@tanstack/react-router";
import { SitePageLayout } from "@/components/site/SitePageLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/site-data";

export const Route = createFileRoute("/destinations")({
  head: () => ({ meta: [
    { title: "Destinations | Destinations Planner" },
    { name: "description", content: "Explore Rajasthan, Kashmir, Kerala, Goa and more India destinations with Destinations Planner." },
    { property: "og:title", content: "Destinations | Destinations Planner" },
    { property: "og:description", content: "Explore Rajasthan, Kashmir, Kerala, Goa and more India destinations with Destinations Planner." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <SitePageLayout>
        <section  className="scroll-mt-20 bg-accent px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <Reveal className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Explore India</p>
                <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Where will your story begin?</h1>
              </Reveal>
              <Reveal delay={100}><a href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary">Build my itinerary <ArrowUpRight className="size-4" aria-hidden="true" /></a></Reveal>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {destinations.map((destination, index) => (
                <Reveal key={destination.name} delay={(index % 5) * 60}>
                  <a href="/contact" className="group relative block aspect-[0.82] overflow-hidden rounded-xl bg-muted">
                    <img src={destination.image} alt={`${destination.name}, ${destination.region}`} width={500} height={610} className="size-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">{destination.region}</p>
                      <h3 className="mt-1 font-sans text-base font-bold tracking-normal">{destination.name}</h3>
                      <p className="mt-1 hidden text-xs leading-relaxed text-primary-foreground/75 sm:block">{destination.blurb}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
    </SitePageLayout>
  );
}
