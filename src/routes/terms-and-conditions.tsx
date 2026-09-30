import { createFileRoute } from "@tanstack/react-router";
import { LegalContact, LegalPageLayout, LegalSection } from "@/components/site/LegalPageLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({ meta: [
    { title: "Terms & Conditions | Destinations Planner" },
    { name: "description", content: "Read the terms for enquiries, tour packages, car rentals and travel planning with Destinations Planner." },
    { property: "og:title", content: "Terms & Conditions | Destinations Planner" },
    { property: "og:description", content: "Terms for enquiries, tour packages, car rentals and travel planning with Destinations Planner." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <LegalPageLayout title="TERMS & CONDITIONS">
      <p className="text-lg leading-8 text-muted-foreground">Please read these Terms & Conditions before using this website or requesting travel services from DESTINATIONS PLANNER. By using this website or contacting us about our services, you acknowledge these terms. A confirmed booking may also be subject to the specific terms shared with you before payment.</p>
      <LegalSection title="About DESTINATIONS PLANNER"><p>DESTINATIONS PLANNER is a travel agency providing Tour Packages, Car Rental, Customized Travel Planning, Travel Assistance and Enquiry Services across India.</p></LegalSection>
      <LegalSection title="Website Use"><p>Use this website for lawful personal enquiries and travel planning. Do not misuse its forms, content or services, interfere with its operation, or submit information that you do not have permission to share.</p></LegalSection>
      <LegalSection title="Travel Enquiries"><p>Submitting an enquiry does not automatically create a booking or guarantee a price, itinerary, vehicle, hotel or availability. We will contact you to discuss your requirements and provide details before any booking is confirmed.</p></LegalSection>
      <LegalSection title="Tour Packages"><p>Package inclusions, exclusions, dates, accommodation, transport and activities depend on the specific itinerary and quotation shared with you. Please review these details carefully before confirming your trip. Availability may change until your booking is confirmed.</p></LegalSection>
      <LegalSection title="Car Rental Services"><p>Vehicle type, route, duration, driver arrangements, pickup and drop-off, and any applicable additional charges will be set out in your quotation or booking confirmation. Changes to a route or travel schedule may affect availability and cost.</p></LegalSection>
      <LegalSection title="Pricing and Payments"><p>Prices and payment requirements will be communicated in your quotation before you confirm. A quoted price applies only to the services listed there and may change if availability, dates, traveller numbers or requirements change. Please check your quotation for payment instructions and included taxes or charges.</p></LegalSection>
      <LegalSection title="Booking Confirmation"><p>A booking is confirmed only when we explicitly confirm it to you in writing after any required payment and supplier arrangements have been completed. An enquiry, draft itinerary or payment request alone is not a confirmed booking.</p></LegalSection>
      <LegalSection title="Customer Responsibilities"><p>Please provide accurate traveller details and contact information, review your itinerary and booking details promptly, follow applicable safety instructions and local laws, and tell us about any relevant travel requirements before confirmation.</p></LegalSection>
      <LegalSection title="Travel Documents and Permissions"><p>Travellers are responsible for checking and obtaining any passports, visas, permits, identification and health documents required for their journey. Requirements can change; please confirm them with official sources before travelling.</p></LegalSection>
      <LegalSection title="Cancellation and Refunds"><p>Cancellation and refund terms must be confirmed before booking, including any applicable supplier conditions. [ADD YOUR ACTUAL CANCELLATION & REFUND POLICY HERE]</p></LegalSection>
      <LegalSection title="Changes to Bookings"><p>Let us know as soon as possible if you need to change a confirmed booking. Changes depend on availability and the terms of the relevant providers; any revised price or charge will be explained before you agree to it.</p></LegalSection>
      <LegalSection title="Third-Party Services"><p>Hotels, transport operators, guides and other travel providers may supply parts of your trip under their own applicable terms. We will share relevant supplier information where available, but their availability and policies may affect your arrangements.</p></LegalSection>
      <LegalSection title="Travel Disruptions and Force Majeure"><p>Weather, road conditions, natural events, government action, strikes and other events outside reasonable control may disrupt travel. If this happens, we will discuss available alternatives with you; any changes, refunds or additional costs depend on the circumstances and applicable supplier terms.</p></LegalSection>
      <LegalSection title="Website Information and Images"><p>Website descriptions and images are provided for general travel inspiration and may not reflect the exact itinerary, accommodation or vehicle offered to you. Please rely on your written quotation and confirmation for the details of your booking.</p></LegalSection>
      <LegalSection title="Intellectual Property"><p>Content and branding on this website may not be copied, republished or used commercially without permission from the relevant rights holder. Third-party images or materials remain the property of their respective owners.</p></LegalSection>
      <LegalSection title="Privacy and Personal Information"><p>We use information you provide to respond to enquiries and arrange requested services. Please read our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for more detail.</p></LegalSection>
      <LegalSection title="Limitation of Liability"><p>Travel involves risks and may be affected by events or services beyond our direct control. To the extent permitted by applicable law, our responsibility for any issue will depend on the specific services we agreed to provide and the circumstances involved. Nothing in these terms excludes rights or liabilities that cannot lawfully be excluded.</p></LegalSection>
      <LegalSection title="Communication"><p>We may respond to an enquiry or communicate about a requested service using the contact details you provide, including WhatsApp, email or phone. Please ensure those details are correct and let us know if they change.</p></LegalSection>
      <LegalSection title="Third-Party Website Links"><p>Our website may contain links to websites operated by others. Their content and privacy practices are their own; please review their terms before using them.</p></LegalSection>
      <LegalSection title="Changes to These Terms"><p>We may update these terms from time to time. Changes will be posted on this page with an updated date. Please review the current terms before making a new enquiry or booking.</p></LegalSection>
      <LegalSection title="Governing Law and Disputes"><p>These terms are subject to applicable law in India. For any dispute about the appropriate court or jurisdiction: [ADD CONFIRMED JURISDICTION / CITY AFTER LEGAL REVIEW]. Please contact us first so we can try to resolve your concern.</p></LegalSection>
      <LegalSection title="Contact Us"><p>Questions about these terms? Contact us:</p><LegalContact /></LegalSection>
      <LegalSection title="Acceptance"><p>By continuing to use this website or requesting our services, you acknowledge that you have read these terms. Booking-specific terms will be shared before you confirm and pay for a booking.</p></LegalSection>
    </LegalPageLayout>
  );
}