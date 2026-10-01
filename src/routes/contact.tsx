import { createFileRoute } from "@tanstack/react-router";
import { SitePageLayout } from "@/components/site/SitePageLayout";
import { Reveal } from "@/components/site/Reveal";
import { Check } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | Destinations Planner" },
    { name: "description", content: "Tell Destinations Planner about your India travel plans and send an enquiry via WhatsApp." },
    { property: "og:title", content: "Contact | Destinations Planner" },
    { property: "og:description", content: "Tell Destinations Planner about your India travel plans and send an enquiry via WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SitePageLayout>
        <section  className="scroll-mt-20 bg-accent px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Let’s make a plan</p>
              <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl">Tell us what India looks like to you.</h1>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">Share a few details, then send your enquiry through WhatsApp. We’ll come back with ideas that feel like your kind of trip.</p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><span className="inline-flex items-center gap-2"><Check className="size-4 text-teal" aria-hidden="true" />Thoughtful advice</span><span className="inline-flex items-center gap-2"><Check className="size-4 text-teal" aria-hidden="true" />Quick response</span></div>
            </Reveal>
            <Reveal delay={120}><EnquiryForm /></Reveal>
          </div>
        </section>
    </SitePageLayout>
  );
}
