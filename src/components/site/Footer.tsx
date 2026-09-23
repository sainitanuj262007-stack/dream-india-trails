import { Mail, MessageCircle } from "lucide-react";
import { navLinks, EMAIL_ADDRESS, PHONE_DISPLAY, whatsappLink } from "@/lib/site-data";
import logoAsset from "@/assets/destinations-planner-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 font-display text-lg font-semibold">
            <img
              src={logoAsset.url}
              alt=""
              width="56"
              height="56"
              className="size-14 shrink-0 object-contain"
            />
            <span>Destinations Planner</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Personalised tour packages and car rentals across India — for families, couples,
            friends, groups and international travellers.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <li key={l.hash}>
                <a href={l.hash} className="text-sm hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal navigation">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Legal
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/terms-and-conditions" className="text-sm hover:text-primary">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp: {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="size-4" aria-hidden="true" />
                {EMAIL_ADDRESS}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Destinations Planner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
