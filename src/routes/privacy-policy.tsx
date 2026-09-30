import { createFileRoute } from "@tanstack/react-router";
import { LegalContact, LegalPageLayout, LegalSection } from "@/components/site/LegalPageLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title: "Privacy Policy | Destinations Planner" },
    { name: "description", content: "Learn how Destinations Planner handles personal information shared through travel enquiries and bookings." },
    { property: "og:title", content: "Privacy Policy | Destinations Planner" },
    { property: "og:description", content: "How Destinations Planner handles information shared through travel enquiries and bookings." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPageLayout title="PRIVACY POLICY">
      <p className="text-lg leading-8 text-muted-foreground">This policy explains how DESTINATIONS PLANNER handles information you share when you contact us, use this website or request travel services. Please contact us if you have questions about your information.</p>
      <LegalSection title="Information We Collect"><p>When you send an enquiry, you may provide your name, WhatsApp or phone number, email address, travel plans and other details you choose to share. Basic technical information about your visit, such as device or browser details, may also be processed where applicable to operate the website.</p></LegalSection>
      <LegalSection title="How We Use Your Information"><p>We use the information to respond to enquiries, discuss and provide requested travel services, communicate about bookings, and improve our website and services. Information you send in an enquiry helps us prepare relevant travel options.</p></LegalSection>
      <LegalSection title="WhatsApp, Email and Phone Communication"><p>If you contact us or provide your details, we may reply about your enquiry or booking by WhatsApp, email or phone. Messages sent using those services may also be handled under the service provider’s own privacy terms. Our enquiry form prepares a WhatsApp message for you; it is sent only when you choose to send it in WhatsApp.</p></LegalSection>
      <LegalSection title="Sharing Information"><p>We may share only the details needed with relevant travel or service providers, such as hotels, transport operators and guides, to arrange the services you request. We may also disclose information when permitted or required by applicable law. Third-party providers handle information under their own practices.</p></LegalSection>
      <LegalSection title="Data Security"><p>We take reasonable steps to protect information handled for our services. No internet transmission or storage method can be guaranteed completely secure; please avoid sending sensitive documents until we have explained how they will be handled.</p></LegalSection>
      <LegalSection title="Data Retention"><p>We keep enquiry and booking information for as long as reasonably needed to respond, provide requested services, manage records and meet applicable legal obligations. Retention may vary depending on the nature of the enquiry or booking. Contact us if you have a specific retention question.</p></LegalSection>
      <LegalSection title="Cookies and Basic Analytics"><p>The website may use essential browser technologies to operate. If optional cookies or basic analytics are used, information about your visit may be collected to understand and improve the website. You can manage cookies through your browser settings; some site functions may depend on them.</p></LegalSection>
      <LegalSection title="Third-Party Links"><p>Links to other websites are provided for convenience. We do not control their privacy practices; please read their policies before providing them with personal information.</p></LegalSection>
      <LegalSection title="Children’s Privacy"><p>Our website is not intended for children to submit enquiries independently. A parent or guardian should contact us when arranging travel for a child. If you believe a child has shared information with us without appropriate involvement, please contact us.</p></LegalSection>
      <LegalSection title="Your Rights and Requests"><p>Subject to applicable law, you may ask about the personal information we hold, request a correction or deletion, or raise a concern about its use. Contact us using the details below; we may need to verify your identity before acting on a request.</p></LegalSection>
      <LegalSection title="Policy Updates"><p>We may revise this policy as our services or legal requirements change. The latest version will appear here with an updated date.</p></LegalSection>
      <LegalSection title="Contact Us"><p>For privacy questions or requests, contact:</p><LegalContact address /></LegalSection>
    </LegalPageLayout>
  );
}