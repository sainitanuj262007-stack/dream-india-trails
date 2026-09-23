import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { EMAIL_ADDRESS, PHONE_DISPLAY, whatsappLink } from "@/lib/site-data";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Destinations Planner" },
      { name: "description", content: "Booking, cancellation, refund and liability terms for Destinations Planner travel services." },
      { property: "og:title", content: "Terms & Conditions | Destinations Planner" },
      { property: "og:description", content: "Booking, cancellation, refund and liability terms for Destinations Planner travel services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsAndConditions,
});

const lastUpdated = "23 September 2026";

function TermsAndConditions() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <section className="bg-sand px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to home
              </Link>
              <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl">
                Terms & Conditions
              </h1>
              <p className="mt-4 text-sm text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-4xl space-y-12">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Please read these terms carefully before booking a trip or service with Destinations Planner. By confirming a booking, you agree to the terms below. If anything is unclear, contact us before you pay.
              </p>
            </Reveal>

            <TermsSection title="1. Bookings & Payments">
              <p>
                All bookings are confirmed only after we receive the agreed deposit or full payment and send you a written confirmation by email or WhatsApp. Prices quoted are in Indian Rupees (INR) unless stated otherwise and include the services specifically listed in your itinerary.
              </p>
              <p>
                For peak-season travel, festivals, or luxury properties, full or higher advance payment may be required. We will clearly mention this before you confirm.
              </p>
            </TermsSection>

            <TermsSection title="2. Cancellation & Refund Policy">
              <p>
                Cancellation requests must be sent by email or WhatsApp and are effective from the date and time we acknowledge them. Refunds depend on third-party supplier policies (hotels, airlines, railways, activity providers) and are processed after those amounts are returned to us.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>More than 30 days before departure: cancellation charge is generally limited to non-recoverable supplier costs and a small service fee.</li>
                <li>15–30 days before departure: up to 50% of the total trip cost may be charged, depending on supplier penalties.</li>
                <li>Less than 15 days before departure or no-show: most or all of the trip cost may be non-refundable.</li>
              </ul>
              <p>
                We recommend travel insurance to cover unexpected cancellations due to illness, family emergencies, or other disruptions.
              </p>
            </TermsSection>

            <TermsSection title="3. Travel Documents">
              <p>
                It is your responsibility to hold a valid passport, visa, ID proofs, and any required health certificates for every traveller. We can guide you on requirements, but we are not responsible for denied boarding, deportation, or trip changes caused by incomplete or invalid documents.
              </p>
            </TermsSection>

            <TermsSection title="4. Itinerary Changes">
              <p>
                Road conditions, weather, local events, supplier availability, and government regulations in India can change quickly. We may need to adjust routes, hotels, or activities to protect your safety or experience. Whenever possible, we will inform you in advance and offer alternatives of similar value.
              </p>
              <p>
                If you request changes after confirmation, extra charges may apply based on supplier policies and availability.
              </p>
            </TermsSection>

            <TermsSection title="5. Limitation of Liability">
              <p>
                Destinations Planner acts as an intermediary and travel organiser. We take reasonable care in selecting hotels, transport providers, guides, and activity partners, but we are not liable for their independent acts, omissions, accidents, delays, or losses.
              </p>
              <p>
                We are not responsible for losses caused by circumstances beyond our control, including but not limited to natural disasters, political unrest, strikes, pandemics, government orders, or failures in public transport.
              </p>
            </TermsSection>

            <TermsSection title="6. Travel Insurance">
              <p>
                We strongly recommend that every traveller buys comprehensive travel insurance covering medical emergencies, trip cancellation, baggage loss, and personal accident before departure. We do not sell insurance directly.
              </p>
            </TermsSection>

            <TermsSection title="7. Force Majeure">
              <p>
                Neither party will be liable for failure or delay in performance due to events outside reasonable control, such as floods, earthquakes, epidemics, war, terrorism, strikes, or government restrictions. In such cases, we will work with suppliers to reschedule or refund recoverable amounts.
              </p>
            </TermsSection>

            <TermsSection title="8. Behaviour & Safety">
              <p>
                Travellers are expected to behave respectfully toward local people, cultures, wildlife, and heritage sites. We reserve the right to terminate services without refund if a traveller’s behaviour is unsafe, unlawful, or seriously disrupts the group or local community.
              </p>
            </TermsSection>

            <TermsSection title="9. Governing Law">
              <p>
                These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan, unless otherwise agreed in writing.
              </p>
            </TermsSection>

            <TermsSection title="10. Contact Us">
              <p>
                If you have questions about these terms, reach us at:
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li>
                  WhatsApp: {" "}
                  <a
                    href={whatsappLink("Hi! I have a question about your Terms & Conditions.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  Email: {" "}
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-primary hover:underline">
                    {EMAIL_ADDRESS}
                  </a>
                </li>
              </ul>
            </TermsSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <article className="space-y-4 leading-relaxed text-foreground">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="space-y-4 text-muted-foreground">{children}</div>
      </article>
    </Reveal>
  );
}
