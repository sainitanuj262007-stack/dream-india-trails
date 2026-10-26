import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BedDouble, Bus, CheckCircle2, Clock, Compass, MapPin, Users, Wallet } from "lucide-react";
import { SitePageLayout } from "@/components/site/SitePageLayout";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site-data";
import { getBlogPost } from "@/lib/blog-data";
import jaipur from "@/assets/dest-jaipur.jpg";
import udaipur from "@/assets/dest-udaipur.jpg";
import jaisalmer from "@/assets/dest-jaisalmer.jpg";
import manali from "@/assets/dest-manali.jpg";
import uttarakhand from "@/assets/dest-uttarakhand.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import goa from "@/assets/dest-goa.jpg";

export const Route = createFileRoute("/blog/best-packages-for-family")({
  head: () => ({
    meta: [
      { title: "Best Packages for Family | Budget-Friendly Trips — Destinations Planner" },
      {
        name: "description",
        content:
          "Explore the best packages for family holidays in India. Compare destinations, plan a budget-friendly trip, and find a package that suits your family.",
      },
      {
        property: "og:title",
        content: "Best Packages for Family | Budget-Friendly Trips — Destinations Planner",
      },
      {
        property: "og:description",
        content:
          "Explore the best packages for family holidays in India. Compare destinations, plan a budget-friendly trip, and find a package that suits your family.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://dream-india-trails.lovable.app/blog/best-packages-for-family",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dream-india-trails.lovable.app/blog/best-packages-for-family",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Packages for Family: Budget-Friendly Trips in India",
          description:
            "Explore the best packages for family holidays in India. Compare destinations, plan a budget-friendly trip, and find a package that suits your family.",
          author: { "@type": "Organization", name: "Destinations Planner Team" },
          publisher: { "@type": "Organization", name: "Destinations Planner" },
          mainEntityOfPage: "https://dream-india-trails.lovable.app/blog/best-packages-for-family",
        }),
      },
    ],
  }),
  component: FamilyPackagesArticle,
});

const benefits = [
  { icon: Compass, title: "Better planning", text: "Your itinerary can be arranged before the trip begins." },
  { icon: Bus, title: "Convenient transport", text: "You can plan local sightseeing and transfers in advance." },
  { icon: BedDouble, title: "Accommodation options", text: "Choose hotels according to your comfort and budget." },
  { icon: MapPin, title: "Flexible itineraries", text: "Customise destinations and activities around your family's interests." },
  { icon: Wallet, title: "Budget management", text: "Compare inclusions and estimated expenses before confirming your booking." },
];

const destinations = [
  {
    name: "Rajasthan",
    heading: "A Perfect Family Heritage Trip",
    body: "Rajasthan is a wonderful choice for families who enjoy history, culture, architecture, and local food. You can explore Jaipur's forts and palaces, enjoy Udaipur's lakes, discover Jodhpur's blue streets, or experience the desert landscape of Jaisalmer. A customised Rajasthan family package can combine selected cities without making the itinerary too tiring.",
    bestFor: "Families interested in culture, sightseeing, and road trips.",
    duration: "3–7 days, depending on the cities you choose.",
    highlights: ["Amber Fort and Hawa Mahal in Jaipur", "Lake Pichola and City Palace in Udaipur", "Mehrangarh Fort in Jodhpur", "Desert experiences in Jaisalmer"],
    images: [
      { src: jaipur, alt: "Pink City architecture in Jaipur, Rajasthan" },
      { src: udaipur, alt: "Lake and palaces of Udaipur" },
      { src: jaisalmer, alt: "Golden desert dunes of Jaisalmer" },
    ],
  },
  {
    name: "Himachal Pradesh",
    heading: "A Relaxing Mountain Holiday",
    body: "If your family enjoys mountain views, pleasant weather, and scenic road journeys, Himachal Pradesh is worth considering. Shimla, Manali, and Dharamshala offer different experiences, including mountain scenery, local markets, sightseeing, and outdoor activities. Choose your travel season carefully, especially if travelling during winter or school holidays — weather conditions can affect road journeys and outdoor activities.",
    bestFor: "Families who enjoy nature and mountain destinations.",
    duration: "4–7 days.",
    highlights: ["Scenic mountain drives", "Local markets and cultural attractions", "Nature walks and sightseeing", "Family-friendly accommodation options"],
    images: [{ src: manali, alt: "Mountain scenery around Manali, Himachal Pradesh" }],
  },
  {
    name: "Uttarakhand",
    heading: "Nature, Lakes, and Peaceful Getaways",
    body: "Uttarakhand is another popular option for a family holiday. Destinations such as Nainital, Mussoorie, and Rishikesh offer different combinations of nature, sightseeing, and cultural experiences. Before booking, consider the travel time between destinations and the needs of children or senior family members.",
    bestFor: "Families looking for scenic views and a relaxing break.",
    duration: "3–6 days.",
    highlights: ["Naini Lake and nearby viewpoints", "Mussoorie's scenic attractions", "Nature experiences around Rishikesh", "Local food and shopping"],
    images: [{ src: uttarakhand, alt: "Hills and lake scenery of Uttarakhand" }],
  },
  {
    name: "Kerala",
    heading: "Green Landscapes and Backwater Experiences",
    body: "Kerala is ideal for families who want a change of scenery and a slower-paced holiday. You can combine Kochi, Munnar, and Alleppey for a trip featuring tea gardens, greenery, cultural attractions, and backwater experiences. Plan the itinerary according to your family's preferences and check seasonal weather conditions before travelling.",
    bestFor: "Families who enjoy nature, scenic stays, and relaxed sightseeing.",
    duration: "5–7 days.",
    highlights: ["Munnar's tea gardens", "Alleppey's backwaters", "Kochi's cultural attractions", "Local cuisine and scenic drives"],
    images: [{ src: kerala, alt: "Palm-fringed backwaters of Kerala" }],
  },
  {
    name: "Goa",
    heading: "Beaches and Family Fun",
    body: "Goa is a great option for families who want beach time, local food, sightseeing, and a relaxed holiday. You can explore quieter beaches, visit cultural attractions, and enjoy family-friendly activities. Compare accommodation locations and local transport costs before selecting your package.",
    bestFor: "Families who enjoy beaches and leisure trips.",
    duration: "3–5 days.",
    highlights: ["Beach visits", "Portuguese-influenced architecture", "Local markets and restaurants", "Relaxed sightseeing"],
    images: [{ src: goa, alt: "Sunset over a Goan beach" }],
  },
];

const comparisonRows = [
  { destination: "Rajasthan", duration: "3–7 days", bestFor: "Culture and heritage", budget: "Low to high" },
  { destination: "Himachal Pradesh", duration: "4–7 days", bestFor: "Mountains and nature", budget: "Moderate" },
  { destination: "Uttarakhand", duration: "3–6 days", bestFor: "Lakes and scenic getaways", budget: "Low to moderate" },
  { destination: "Kerala", duration: "5–7 days", bestFor: "Nature and backwaters", budget: "Moderate" },
  { destination: "Goa", duration: "3–5 days", bestFor: "Beaches and leisure", budget: "Low to high" },
];

const chooseSteps = [
  { title: "Decide your travel budget", text: "Set a total budget before comparing packages. Include transport, accommodation, meals, sightseeing, shopping, and emergency expenses." },
  { title: "Choose a destination everyone will enjoy", text: "Consider the ages, interests, and comfort of everyone travelling. A destination with too much travelling between attractions may not suit families with young children or elderly members." },
  { title: "Compare package inclusions", text: "Do not select a package based only on its advertised price. Check the hotel category and room arrangements, meals included, private or shared transport, sightseeing and entry tickets, taxes and additional charges, and cancellation and refund conditions." },
  { title: "Travel during suitable dates", text: "If your schedule is flexible, compare weekday departures and less busy travel periods. Prices and availability vary by destination and season." },
  { title: "Ask about customisation", text: "Your family may prefer more sightseeing, comfortable hotels, shorter travel days, or additional rest time. Ask your travel agency whether the itinerary can be adjusted." },
];

const budgetTips = [
  { title: "Book in advance", text: "Compare transport and accommodation options early." },
  { title: "Choose fewer destinations", text: "Spending more time in one place can reduce transfer costs." },
  { title: "Compare transport options", text: "For some groups, sharing a vehicle may be more convenient than booking separate taxis." },
  { title: "Select suitable accommodation", text: "Compare family rooms with the cost of booking multiple rooms." },
  { title: "Keep an activity budget", text: "Decide which experiences are essential and which are optional." },
  { title: "Check the final quotation", text: "Confirm taxes, inclusions, payment terms, and cancellation policies before paying." },
];

const studentOptions = ["Jaipur and nearby destinations — heritage sightseeing and short cultural trips.", "Rishikesh — nature, sightseeing, and suitable supervised outdoor experiences.", "Udaipur — lakes, architecture, and local culture.", "Himachal Pradesh — scenic mountain holidays and sightseeing."];

const studentTips = ["Set a per-person budget before choosing a destination.", "Compare train, bus, and other suitable transport options.", "Share accommodation costs where appropriate.", "Prepare a clear itinerary and emergency contact list.", "Confirm booking, cancellation, and supervision arrangements with the responsible adults or group organiser."];

const faqs = [
  { q: "What are the best packages for family holidays in India?", a: "Rajasthan, Himachal Pradesh, Uttarakhand, Kerala, and Goa are popular options. The best package depends on your family's interests, travel dates, budget, and preferred trip duration." },
  { q: "How can I find budget-friendly travel packages for family trips?", a: "Compare multiple quotations, travel during less busy periods where possible, choose suitable accommodation, and check exactly what each package includes before booking." },
  { q: "Which destination is best for a short family trip?", a: "Rajasthan heritage destinations, Uttarakhand, and nearby hill or nature destinations can work well for short trips. Your starting location and available travel time will affect the best choice." },
  { q: "What should a family tour package include?", a: "Depending on the package, it may include accommodation, transport, meals, sightseeing, and selected activities. Always confirm the written inclusions and exclusions." },
  { q: "Are customised family travel packages available?", a: "Many travel agencies offer customised itineraries based on destination, group size, accommodation preferences, and budget. Contact your chosen agency to confirm the options available." },
  { q: "How can students plan an affordable trip?", a: "Students can compare transport options, choose a manageable itinerary, share appropriate accommodation costs, and plan group expenses in advance. Any required permissions and supervision should also be arranged." },
  { q: "How do I contact Destinations Planner for a travel quotation?", a: "Visit our contact page and share your preferred destination, travel dates, number of travellers, and approximate budget. These details help us understand your requirements." },
];

function FamilyPackagesArticle() {
  const post = getBlogPost("best-packages-for-family");

  return (
    <SitePageLayout>
      <article className="bg-background">
        {/* Hero */}
        <header className="bg-sand px-5 pb-14 pt-20 sm:px-8 sm:pb-16">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {post?.category} · {post?.readTime}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[1.08] sm:text-5xl">
                Best Packages for Family: Budget-Friendly Trips in India
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore the best packages for family holidays in India — compare destinations, plan a
                budget-friendly trip, and find a package that suits your family.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <img
                src={post?.image}
                alt="Indian family enjoying a holiday at a Rajasthani palace terrace"
                width={1600}
                height={912}
                className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover shadow-card"
              />
            </Reveal>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          {/* Intro */}
          <Reveal>
            <p className="text-lg leading-relaxed">
              Planning a family trip is exciting, but choosing the right destination, hotel, transport,
              and budget can sometimes feel confusing. Everyone wants a comfortable holiday without
              spending more than necessary.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The good news is that India offers many destinations for families — from peaceful hill
              stations and beautiful lakes to historic forts and relaxing beaches. With the right
              planning, you can find the <strong className="text-foreground">best packages for family</strong>{" "}
              holidays that match your interests and budget.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              In this guide, we will explore popular destinations, budget-friendly travel tips, package
              comparisons, and ways to choose the right trip for your family.
            </p>
          </Reveal>

          {/* Why packages */}
          <Reveal>
            <h2 className="mt-16 font-display text-3xl leading-tight sm:text-4xl">
              Why choose travel packages for family holidays?
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A family holiday should be about spending quality time together, not worrying about every
              travel arrangement. A well-planned package can make the experience easier and more comfortable.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <b.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border-l-4 border-primary bg-sand px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              Always check what the package includes. Hotel stays, meals, sightseeing, transport, and
              entry tickets may be charged separately depending on the package.
            </p>
          </Reveal>

          {/* Destinations */}
          <h2 className="mt-16 font-display text-3xl leading-tight sm:text-4xl">
            Best packages for family: top destinations in India
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            India has destinations for every kind of family holiday. The right choice depends on your
            travel dates, available budget, trip duration, and preferred activities.
          </p>

          {destinations.map((d, i) => (
            <Reveal key={d.name}>
              <section className="mt-14">
                <h3 className="font-display text-2xl leading-snug sm:text-3xl">
                  {i + 1}. {d.name}: {d.heading}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{d.body}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-sand p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <Users className="size-4 text-primary" aria-hidden="true" /> Best for
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{d.bestFor}</p>
                  </div>
                  <div className="rounded-xl bg-sand p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <Clock className="size-4 text-primary" aria-hidden="true" /> Suggested duration
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{d.duration}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Highlights</p>
                <ul className="mt-3 space-y-2">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                {d.images.length > 1 ? (
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {d.images.map((img) => (
                      <img
                        key={img.alt}
                        src={img.src}
                        alt={img.alt}
                        width={800}
                        height={1000}
                        loading="lazy"
                        className="aspect-[4/5] w-full rounded-xl object-cover shadow-soft"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={d.images[0].src}
                    alt={d.images[0].alt}
                    width={1600}
                    height={912}
                    loading="lazy"
                    className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-soft"
                  />
                )}
              </section>
            </Reveal>
          ))}

          {/* Comparison table */}
          <Reveal>
            <h2 className="mt-16 font-display text-3xl leading-tight sm:text-4xl">Family travel packages comparison</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Not sure which destination suits your family? Use this table as a starting point.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-border shadow-soft">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-sand">
                  <tr>
                    {["Destination", "Suggested duration", "Best suited for", "Budget level"].map((h) => (
                      <th key={h} scope="col" className="px-5 py-4 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r) => (
                    <tr key={r.destination} className="border-t border-border">
                      <th scope="row" className="px-5 py-4 font-semibold">{r.destination}</th>
                      <td className="px-5 py-4 text-muted-foreground">{r.duration}</td>
                      <td className="px-5 py-4 text-muted-foreground">{r.bestFor}</td>
                      <td className="px-5 py-4 text-muted-foreground">{r.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs italic text-muted-foreground">
              These are general planning suggestions, not confirmed package quotations. Actual costs
              depend on your travel dates, number of travellers, hotel category, transport, and activities.
            </p>
          </Reveal>

          {/* How to choose */}
          <Reveal>
            <h2 className="mt-16 font-display text-3xl leading-tight sm:text-4xl">How to choose the right family travel package</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Finding a suitable package is easier when you know what matters most to your family.
            </p>
            <ol className="mt-8 space-y-6">
              {chooseSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Budget tips */}
          <Reveal>
            <h2 className="mt-16 font-display text-3xl leading-tight sm:text-4xl">How to plan a budget-friendly family holiday</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              You do not always need a large budget to enjoy a memorable family trip. A few practical
              decisions can help you manage expenses.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {budgetTips.map((t) => (
                <li key={t.title} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A reliable, budget-friendly travel agency should explain the available options clearly and
              help you understand what you are paying for.
            </p>
          </Reveal>

          {/* Students */}
          <Reveal>
            <h2 className="mt-16 font-display text-3xl leading-tight sm:text-4xl">Are there travel packages for students?</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Family holidays are not the only way to explore India. Students can also plan affordable
              trips with friends, classmates, or student groups. The right travel packages for student
              trips depend on the number of travellers, travel dates, destination, and total budget.
              Popular options include:
            </p>
            <ul className="mt-5 space-y-2">
              {studentOptions.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-xl sm:text-2xl">Tips for planning a student trip</h3>
            <ul className="mt-4 space-y-2">
              {studentTips.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A customised group itinerary can help students plan a trip that fits their time and budget.
            </p>
          </Reveal>

          {/* Why Destinations Planner + CTA */}
          <Reveal>
            <div className="mt-16 rounded-2xl bg-sand p-8 sm:p-10">
              <h2 className="font-display text-2xl leading-snug sm:text-3xl">
                Why choose Destinations Planner for your next trip?
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                At Destinations Planner, the aim is to help travellers plan trips around their destination
                preferences, travel dates, and budget. Whether you are planning a family holiday, a
                Rajasthan sightseeing trip, or a group getaway, start by sharing what kind of experience
                you want. You can discuss options such as family tour packages, Rajasthan and Jaisalmer
                trips, car rental and travel transport, and customised holiday experiences.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every trip has different requirements, so ask for a personalised quotation with clear
                inclusions and costs before making your decision.
              </p>
              <h3 className="mt-8 font-display text-xl sm:text-2xl">Ready to plan your family holiday?</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Your next family holiday can begin with a simple conversation. Tell us where you want to
                go, how many people are travelling, and what budget you have in mind.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Plan your trip — contact us
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <a
                  href={whatsappLink("Hi Destinations Planner! I read your family travel guide and I'd like to discuss a family package.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>

          {/* FAQs */}
          <Reveal>
            <h2 className="mt-16 font-display text-3xl leading-tight sm:text-4xl">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
              {faqs.map((f, i) => (
                <details key={f.q} className="group px-6 py-5" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          {/* Author */}
          <Reveal>
            <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-soft sm:flex-row sm:items-center">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-xl font-semibold text-primary">
                DP
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">About the author</p>
                <h2 className="mt-1 font-display text-xl">Destinations Planner Team</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The Destinations Planner team shares travel-planning information to help travellers
                  explore destinations, compare holiday options, and plan trips according to their needs
                  and budgets. For a personalised holiday plan, contact us through the website's contact
                  page.
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs italic text-muted-foreground">
              Final note: travel prices, availability, and package inclusions can change. Confirm the
              latest details with your travel provider before booking.
            </p>
          </Reveal>
        </div>
      </article>
    </SitePageLayout>
  );
}
