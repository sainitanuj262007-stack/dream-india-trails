import { createFileRoute } from "@tanstack/react-router";
import { SitePageLayout } from "@/components/site/SitePageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [
    { title: "Reviews | Destinations Planner" },
    { name: "description", content: "Read traveller stories and reviews for Destinations Planner India trips." },
    { property: "og:title", content: "Reviews | Destinations Planner" },
    { property: "og:description", content: "Read traveller stories and reviews for Destinations Planner India trips." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SitePageLayout>
        <section  className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">From our travellers</p>
              <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Good journeys are better shared.</h1>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial, index) => <Reveal key={testimonial.name + index} delay={index * 100}><figure className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"><div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="size-4 fill-current" aria-hidden="true" />)}</div><blockquote className="mt-6 font-display text-xl leading-snug">“{testimonial.quote}”</blockquote><figcaption className="mt-8 border-t border-border pt-5 text-sm"><span className="block font-bold">{testimonial.name}</span><span className="mt-1 block text-muted-foreground">{testimonial.trip}</span></figcaption></figure></Reveal>)}
            </div>
          </div>
        </section>
    </SitePageLayout>
  );
}
