import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PHONE_DISPLAY, whatsappLink, WHATSAPP_NUMBER } from "@/lib/site-data";

const POPUP_SESSION_KEY = "destinations-planner-contact-popup-shown";

export function ArrivalContactPopup() {
  const [open, setOpen] = useState(false);
  const phoneDigits = WHATSAPP_NUMBER.replace(/\D/g, "");

  useEffect(() => {
    if (window.sessionStorage.getItem(POPUP_SESSION_KEY)) return;

    window.sessionStorage.setItem(POPUP_SESSION_KEY, "true");
    setOpen(true);
  }, []);

  if (!phoneDigits) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-xl border-border bg-card p-6 sm:p-8">
        <DialogHeader className="space-y-3 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Destinations Planner
          </p>
          <DialogTitle className="font-display text-2xl leading-tight sm:text-3xl">
            Plan your India trip
          </DialogTitle>
          <DialogDescription className="leading-relaxed">
            Talk to us directly—choose a call or send us a WhatsApp message.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-3 grid gap-3">
          <Button
            asChild
            variant="outline"
            className="h-auto min-h-14 justify-start gap-3 rounded-lg px-4 py-3 text-left"
          >
            <a href={`tel:+${phoneDigits}`}>
              <PhoneCall className="size-5 text-primary" aria-hidden="true" />
              <span className="grid gap-0.5">
                <span>Call us</span>
                <span className="text-xs font-normal text-muted-foreground">{PHONE_DISPLAY}</span>
              </span>
            </a>
          </Button>
          <Button
            asChild
            className="h-auto min-h-14 justify-start gap-3 rounded-lg bg-teal px-4 py-3 text-left text-teal-foreground hover:bg-teal/90"
          >
            <a
              href={whatsappLink("Hi! I'd like to plan a trip to India with Destinations Planner.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              <span className="grid gap-0.5">
                <span>Message on WhatsApp</span>
                <span className="text-xs font-normal text-teal-foreground/80">Usually the quickest way to reach us</span>
              </span>
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}