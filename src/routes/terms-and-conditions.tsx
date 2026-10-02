import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalContact, LegalPageLayout, LegalSection } from "@/components/site/LegalPageLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({ meta: [
    { title: "Terms & Conditions | Destinations Planner" },
    { name: "description", content: "A short, plain-language summary of the terms for enquiries, tour packages and car rentals with Destinations Planner." },
    { property: "og:title", content: "Terms & Conditions | Destinations Planner" },
    { property: "og:description", content: "A short, plain-language summary of the terms for enquiries, tour packages and car rentals with Destinations Planner." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <LegalPageLayout title="TERMS & CONDITIONS" lastUpdated="02-08-2026">
      <p className="text-lg leading-8 text-muted-foreground">The simple version of our terms. If anything here is unclear, just message us — we are happy to explain.</p>

      <LegalSection title="Enquiry is not a booking"><p>Sending an enquiry does not confirm a trip, a price or a room. Your trip is confirmed only when we send you a written confirmation and the agreed payment is received.</p></LegalSection>

      <LegalSection title="What we arrange"><p>We plan tour packages, customised itineraries and car rentals across India. Your quotation lists exactly what is included, so please read it before you confirm.</p></LegalSection>

      <LegalSection title="Prices and payment"><p>The price in your quotation applies to the services listed there. Prices can change with dates, traveller numbers and availability until your booking is confirmed.</p></LegalSection>

      <LegalSection title="Your part"><p>Please share correct traveller details, check your itinerary when we send it, and carry the valid documents your trip needs, such as a passport, visa or photo ID.</p></LegalSection>

      <LegalSection title="Cancellations and changes"><p>Tell us as early as you can if your plans change. [ADD YOUR ACTUAL CANCELLATION & REFUND POLICY HERE]</p></LegalSection>

      <LegalSection title="Sometimes plans change"><p>Weather, road conditions or events beyond our control can affect a trip. If that happens we will always look for the best available option with you.</p></LegalSection>

      <LegalSection title="Your details stay with us"><p>We use your name, number and email only to reply to you and arrange your trip. Read the <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for the full picture.</p></LegalSection>

      <LegalSection title="Questions?"><p>Reach us any time:</p><LegalContact /></LegalSection>

      <LegalSection title="Governing law"><p>These terms follow Indian law. [ADD CONFIRMED JURISDICTION / CITY AFTER LEGAL REVIEW]</p></LegalSection>
    </LegalPageLayout>
  );
}
