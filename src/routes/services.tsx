import { createFileRoute } from "@tanstack/react-router";
import { SitePageLayout } from "@/components/site/SitePageLayout";
import { Reveal } from "@/components/site/Reveal";
import { CarFront, Check, MapPinned } from "lucide-react";
import serviceCar from "@/assets/service-car.jpg";
import serviceTours from "@/assets/service-tours.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services | Destinations Planner" },
    { name: "description", content: "Explore personalised India tour packages and comfortable private car rentals from Destinations Planner." },
    { property: "og:title", content: "Services | Destinations Planner" },
    { property: "og:description", content: "Explore personalised India tour packages and comfortable private car rentals from Destinations Planner." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SitePageLayout>
        <section  className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">How we can help</p>
              <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Everything you need for an easier journey.</h1>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                  <div className="aspect-[16/8] overflow-hidden">
                    <img src={serviceTours} alt="Travellers exploring an Indian heritage site" width={1200} height={600} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">01 / Tour packages</p>
                        <h3 className="mt-3 text-3xl">Journeys with a point of view.</h3>
                      </div>
                      <MapPinned className="mt-1 size-7 shrink-0 text-teal" aria-hidden="true" />
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">From royal Rajasthan and Himalayan escapes to Kerala backwaters and coastal Goa, we shape the route around what you want to feel.</p>
                    <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                      {["Private and small-group trips", "Handpicked stays and experiences", "Flexible day-by-day planning", "Guides who add local colour"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="size-4 text-teal" aria-hidden="true" />{item}</li>)}
                    </ul>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={120}>
                <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                  <div className="aspect-[16/8] overflow-hidden">
                    <img src={serviceCar} alt="Comfortable car ready for a road trip in India" width={1200} height={600} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">02 / Car rentals</p>
                        <h3 className="mt-3 text-3xl">The road, made comfortable.</h3>
                      </div>
                      <CarFront className="mt-1 size-7 shrink-0 text-teal" aria-hidden="true" />
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">Travel between cities and sights with a reliable private car, an experienced driver and the freedom to stop when something catches your eye.</p>
                    <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                      {["Sedan, SUV and tempo travellers", "Professional local drivers", "Airport and station transfers", "One-way and multi-day hire"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="size-4 text-teal" aria-hidden="true" />{item}</li>)}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>
    </SitePageLayout>
  );
}
