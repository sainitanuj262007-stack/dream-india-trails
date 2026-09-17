import { ArrowUpRight, CarFront, Check, Headphones, MapPinned, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import storyOne from "@/assets/story-1.jpg";
import storyThree from "@/assets/story-3.jpg";
import serviceCar from "@/assets/service-car.jpg";
import serviceTours from "@/assets/service-tours.jpg";
import {
  destinations,
  testimonials,
} from "@/lib/site-data";

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

        <section id="about" className="scroll-mt-20 bg-sand px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Travel, thoughtfully done</p>
              <h2 className="mt-4 max-w-lg text-4xl leading-[1.08] sm:text-5xl">See India through the eyes of people who love it.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                India is too rich for a checklist. We create unhurried journeys that connect you with its landscapes, food, stories and people — with the right amount of comfort along the way.
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                Whether it is your first visit or your tenth, your trip is planned by a real travel specialist who listens first, knows the details and stays close throughout.
              </p>
              <a href="#enquiry" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3">
                Start planning your India <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">How we can help</p>
              <h2 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Everything you need for an easier journey.</h2>
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

        <section id="destinations" className="scroll-mt-20 bg-accent px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <Reveal className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Explore India</p>
                <h2 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Where will your story begin?</h2>
              </Reveal>
              <Reveal delay={100}><a href="#enquiry" className="inline-flex items-center gap-2 text-sm font-bold text-primary">Build my itinerary <ArrowUpRight className="size-4" aria-hidden="true" /></a></Reveal>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {destinations.map((destination, index) => (
                <Reveal key={destination.name} delay={(index % 5) * 60}>
                  <a href="#enquiry" className="group relative block aspect-[0.82] overflow-hidden rounded-xl bg-muted">
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

        <section id="why-us" className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 sm:py-28">
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

        <section id="stories" className="scroll-mt-20 bg-sand px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Travel stories</p>
              <h2 className="mt-4 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">India leaves you with more than photographs.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
              <Reveal><article className="group relative min-h-[420px] overflow-hidden rounded-2xl"><img src={storyOne} alt="Colourful street scene from an Indian journey" width={1200} height={800} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground sm:p-9"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">A slower Rajasthan</p><h3 className="mt-3 max-w-lg text-3xl leading-tight sm:text-4xl">The magic is often between the places.</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-foreground/75">A morning chai, a quiet courtyard, a road that curves into the desert. Leave space for the unexpected.</p></div></article></Reveal>
              <Reveal delay={120}><article className="group relative min-h-[420px] overflow-hidden rounded-2xl"><img src={storyThree} alt="Mountain landscape from an Indian travel story" width={800} height={1000} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">Into the Himalayas</p><h3 className="mt-3 text-3xl leading-tight">Go where the air feels different.</h3><a href="#enquiry" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Plan a slower trip <ArrowUpRight className="size-4" aria-hidden="true" /></a></div></article></Reveal>
            </div>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-20 bg-background px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">From our travellers</p>
              <h2 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Good journeys are better shared.</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial, index) => <Reveal key={testimonial.name + index} delay={index * 100}><figure className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"><div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="size-4 fill-current" aria-hidden="true" />)}</div><blockquote className="mt-6 font-display text-xl leading-snug">“{testimonial.quote}”</blockquote><figcaption className="mt-8 border-t border-border pt-5 text-sm"><span className="block font-bold">{testimonial.name}</span><span className="mt-1 block text-muted-foreground">{testimonial.trip}</span></figcaption></figure></Reveal>)}
            </div>
          </div>
        </section>

        <section id="enquiry" className="scroll-mt-20 bg-accent px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Let’s make a plan</p>
              <h2 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Tell us what India looks like to you.</h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Share a few details and we’ll come back with ideas that feel like your kind of trip. No pressure, no generic brochures.</p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><span className="inline-flex items-center gap-2"><Check className="size-4 text-teal" aria-hidden="true" />Thoughtful advice</span><span className="inline-flex items-center gap-2"><Check className="size-4 text-teal" aria-hidden="true" />Quick response</span></div>
            </Reveal>
            <Reveal delay={120}><EnquiryForm /></Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
