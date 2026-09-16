import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-teal text-teal-foreground shadow-card transition-transform hover:-translate-y-1"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
