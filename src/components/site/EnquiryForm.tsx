import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/lib/site-data";

const buildWhatsAppMessage = (values: { name: string; whatsapp: string; email: string; message: string }) => {
  return `Hi Destinations Planner! I'm ${values.name.trim()} and I'd like to plan a trip to India.

📧 Email: ${values.email.trim()}
📱 WhatsApp: ${values.whatsapp.trim()}

📝 Trip details:
${values.message.trim() || "Not shared yet — I'd love to discuss ideas."}`;
};

type Errors = Partial<Record<"name" | "whatsapp" | "email", string>>;

export function EnquiryForm() {
  const [values, setValues] = useState({ name: "", whatsapp: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your full name.";
    const digits = values.whatsapp.replace(/\D/g, "");
    if (digits.length < 10) e.whatsapp = "Enter a valid WhatsApp number with country code.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = "Enter a valid email address.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      const link = whatsappLink(buildWhatsAppMessage(values));
      window.open(link, "_blank", "noopener,noreferrer");
      setSent(true);
    }
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring";

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-10 text-teal" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-semibold">Thank you, {values.name.split(" ")[0]}!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Your enquiry has been received. A travel planner will get back to you on WhatsApp or email
          with a suggested itinerary.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(`Hi, I'm ${values.name}. I just submitted an enquiry on your website.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setValues({ name: "", whatsapp: "", email: "", message: "" });
              setSent(false);
            }}
            className="inline-flex min-h-11 items-center rounded-full border border-border px-6 text-sm font-semibold"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="enq-name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            id="enq-name"
            name="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "enq-name-error" : undefined}
            placeholder="Your full name"
            className={field}
          />
          {errors.name ? (
            <p id="enq-name-error" className="mt-1.5 text-sm text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="enq-whatsapp" className="text-sm font-medium">
            WhatsApp Number
          </label>
          <input
            id="enq-whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            value={values.whatsapp}
            onChange={(e) => setValues({ ...values, whatsapp: e.target.value })}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "enq-whatsapp-error" : undefined}
            placeholder="+91 00000 00000"
            className={field}
          />
          {errors.whatsapp ? (
            <p id="enq-whatsapp-error" className="mt-1.5 text-sm text-destructive">
              {errors.whatsapp}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="enq-email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            id="enq-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "enq-email-error" : undefined}
            placeholder="you@example.com"
            className={field}
          />
          {errors.email ? (
            <p id="enq-email-error" className="mt-1.5 text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="enq-message" className="text-sm font-medium">
            Trip details <span className="text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="enq-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            placeholder="Destination, travel dates, number of travellers…"
            className={field}
          />
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
}
