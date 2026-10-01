import { createFileRoute, Link } from "@tanstack/react-router";
import { SitePageLayout } from "@/components/site/SitePageLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import storyOne from "@/assets/story-1.jpg";
import storyThree from "@/assets/story-3.jpg";

export const Route = createFileRoute("/stories")({
  head: () => ({ meta: [
    { title: "Travel Stories | Destinations Planner" },
    { name: "description", content: "Travel inspiration from Rajasthan and the Himalayas for your next India journey." },
    { property: "og:title", content: "Travel Stories | Destinations Planner" },
    { property: "og:description", content: "Travel inspiration from Rajasthan and the Himalayas for your next India journey." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <SitePageLayout>
        <section  className="scroll-mt-20 bg-sand px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Travel stories</p>
              <h1 className="mt-4 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">India leaves you with more than photographs.</h1>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
              <Reveal><article className="group relative min-h-[420px] overflow-hidden rounded-2xl"><img src={storyOne} alt="Colourful street scene from an Indian journey" width={1200} height={800} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground sm:p-9"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">A slower Rajasthan</p><h3 className="mt-3 max-w-lg text-3xl leading-tight sm:text-4xl">The magic is often between the places.</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-foreground/75">A morning chai, a quiet courtyard, a road that curves into the desert. Leave space for the unexpected.</p></div></article></Reveal>
              <Reveal delay={120}><article className="group relative min-h-[420px] overflow-hidden rounded-2xl"><img src={storyThree} alt="Mountain landscape from an Indian travel story" width={800} height={1000} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">Into the Himalayas</p><h3 className="mt-3 text-3xl leading-tight">Go where the air feels different.</h3><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Plan a slower trip <ArrowUpRight className="size-4" aria-hidden="true" /></Link></div></article></Reveal>
            </div>
          </div>
        </section>
    </SitePageLayout>
  );
}
