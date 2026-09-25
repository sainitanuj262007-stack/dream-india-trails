import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/destinations-planner-logo.png.asset.json";
import { Footer } from "@/components/site/Footer";
import { whatsappLink } from "@/lib/site-data";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Destinations Planner" },
      { name: "description", content: "Your India travel enquiry is ready to send to Destinations Planner on WhatsApp." },
      { property: "og:title", content: "Thank You | Destinations Planner" },
      { property: "og:description", content: "Your India travel enquiry is ready to send to Destinations Planner on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const [enquiryLink, setEnquiryLink] = useState(whatsappLink());

  useEffect(() => {
    const savedLink = sessionStorage.getItem("destinations-planner-enquiry-link");
    if (savedLink) setEnquiryLink(savedLink);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" aria-label="Destinations Planner home" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Destinations Planner" width="44" height="44" className="size-11 object-contain" />
            <span className="font-display text-lg font-semibold">Destinations Planner</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-10rem)] items-center justify-center px-5 py-20 sm:px-8">
        <section className="w-full max-w-2xl text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-accent text-teal">
            <CheckCircle2 className="size-10" aria-hidden="true" />
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Thank you for reaching out</p>
          <h1 className="mt-4 text-4xl leading-[1.08] sm:text-6xl">Your India journey starts with a conversation.</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your details are ready in WhatsApp. Tap <strong className="font-semibold text-foreground">Send</strong> there so our travel planner receives your enquiry and can start shaping your trip.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Open WhatsApp
            </a>
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-semibold transition-colors hover:bg-accent"
            >
              Explore Destinations
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">We’ll be in touch with thoughtful ideas for your journey.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}