import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import { SitePageLayout } from "@/components/site/SitePageLayout";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "Travel Blog & Trip Guides | Destinations Planner" },
    { name: "description", content: "Family trip guides, budget tips and destination ideas for your next holiday in India — from the Destinations Planner team." },
    { property: "og:title", content: "Travel Blog & Trip Guides | Destinations Planner" },
    { property: "og:description", content: "Family trip guides, budget tips and destination ideas for your next holiday in India." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BlogListing,
});

function BlogListing() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);
  if (!featured) return null;


  return (
    <SitePageLayout>
      <section className="bg-sand px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Travel journal</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
              Guides, ideas and honest tips for your next India journey.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Planning notes from our travel team — destinations, budgets and family-friendly
              itineraries, written to help you decide with confidence.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Link
              to={featured.slug === "best-packages-for-family" ? "/blog/best-packages-for-family" : "/blog"}
              className="group mt-14 grid overflow-hidden rounded-2xl bg-card shadow-card md:grid-cols-2"
            >
              <div className="relative min-h-[280px] overflow-hidden md:min-h-[420px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  width={1600}
                  height={912}
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 sm:p-12">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  {featured.category} · {featured.readTime}
                </p>
                <h2 className="font-display text-3xl leading-tight sm:text-4xl">{featured.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{featured.excerpt}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Read the guide
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>

          {rest.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Reveal key={post.slug}>
                  <Link
                    to={post.slug === "best-packages-for-family" ? "/blog/best-packages-for-family" : "/blog"}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-soft"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={1600}
                        height={912}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {post.category} · {post.readTime}
                      </p>
                      <h3 className="font-display text-xl leading-snug">{post.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-muted-foreground">More guides are on the way — stay tuned.</p>
          )}

          <Reveal>
            <div className="mt-20 flex flex-col items-start gap-5 rounded-2xl bg-primary px-8 py-10 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-12">
              <div>
                <h2 className="font-display text-2xl leading-snug sm:text-3xl">Already have a destination in mind?</h2>
                <p className="mt-2 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
                  Tell us your dates, group size and budget — we'll shape a personalised itinerary around them.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
              >
                Plan your trip
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SitePageLayout>
  );
}
