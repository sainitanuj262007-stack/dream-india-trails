import rajasthan from "@/assets/dest-rajasthan.jpg";
import jaisalmer from "@/assets/dest-jaisalmer.jpg";
import jaipur from "@/assets/dest-jaipur.jpg";
import udaipur from "@/assets/dest-udaipur.jpg";
import kashmir from "@/assets/dest-kashmir.jpg";
import himachal from "@/assets/dest-himachal.jpg";
import goa from "@/assets/dest-goa.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import uttarakhand from "@/assets/dest-uttarakhand.jpg";
import manali from "@/assets/dest-manali.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import varanasi from "@/assets/dest-varanasi.jpg";
import northeast from "@/assets/dest-northeast.jpg";

/* ---------------------------------------------------------------
 * EDIT THESE CONTACT DETAILS
 * Replace the placeholder text below with the real details.
 * WHATSAPP_NUMBER must be digits only, with country code (e.g. 919876543210)
 * ------------------------------------------------------------- */
export const WHATSAPP_NUMBER = "9829183778";
export const EMAIL_ADDRESS = "[ADD EMAIL ADDRESS]";
export const PHONE_DISPLAY = "+91 98291 83778";

export const whatsappLink = (message = "Hi! I'd like to plan a trip with Destinations Planner.") => {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : "#enquiry";
};

export type Destination = {
  name: string;
  region: string;
  blurb: string;
  image: string;
};

export const destinations: Destination[] = [
  { name: "Rajasthan", region: "North India", blurb: "Forts, palaces and royal heritage circuits.", image: rajasthan },
  { name: "Jaisalmer", region: "Rajasthan", blurb: "Golden dunes, desert camps and camel safaris.", image: jaisalmer },
  { name: "Jaipur", region: "Rajasthan", blurb: "The Pink City — bazaars, forts and food walks.", image: jaipur },
  { name: "Udaipur", region: "Rajasthan", blurb: "Lakeside palaces and slow romantic evenings.", image: udaipur },
  { name: "Kashmir", region: "Himalayas", blurb: "Dal Lake shikaras, meadows and snow valleys.", image: kashmir },
  { name: "Himachal Pradesh", region: "Himalayas", blurb: "Pine valleys, hill towns and mountain drives.", image: himachal },
  { name: "Manali", region: "Himachal Pradesh", blurb: "Snow, adventure sports and cosy cafés.", image: manali },
  { name: "Goa", region: "West Coast", blurb: "Beaches, sunsets and easy coastal living.", image: goa },
  { name: "Kerala", region: "South India", blurb: "Backwaters, tea hills and ayurveda retreats.", image: kerala },
  { name: "Uttarakhand", region: "Himalayas", blurb: "Rishikesh, Nainital and Char Dham journeys.", image: uttarakhand },
  { name: "Ladakh", region: "Himalayas", blurb: "High passes, blue lakes and road trips.", image: ladakh },
  { name: "Varanasi", region: "North India", blurb: "Ganga ghats, aartis and timeless mornings.", image: varanasi },
  { name: "North East India", region: "Seven Sisters", blurb: "Meghalaya, Assam and living root bridges.", image: northeast },
];

export const navLinks = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Services", hash: "#services" },
  { label: "Destinations", hash: "#destinations" },
  { label: "Stories", hash: "#stories" },
  { label: "Reviews", hash: "#reviews" },
  { label: "Contact", hash: "#enquiry" },
];

/* Placeholder reviews — replace the text and names with real guest reviews. */
export const testimonials = [
  {
    quote: "[PLACEHOLDER REVIEW — replace with a real guest review about their trip experience.]",
    name: "[Guest Name]",
    trip: "[Trip / Destination]",
  },
  {
    quote: "[PLACEHOLDER REVIEW — replace with a real guest review about planning and support.]",
    name: "[Guest Name]",
    trip: "[Trip / Destination]",
  },
  {
    quote: "[PLACEHOLDER REVIEW — replace with a real guest review from a family or group trip.]",
    name: "[Guest Name]",
    trip: "[Trip / Destination]",
  },
];
