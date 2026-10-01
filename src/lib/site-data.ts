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

/* Verified business contact details supplied by the owner. Edit here to update
 * the footer, legal pages, floating button and enquiry destination together.
 * WHATSAPP_NUMBER uses digits only, including country code. */
export const WHATSAPP_NUMBER = "919829183778";
export const EMAIL_ADDRESS = "dpemtr2020@gmail.com";
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
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Destinations", to: "/destinations" },
  { label: "Stories", to: "/stories" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

/* Sample guest reviews — replace with real testimonials when you have them. */
export const testimonials = [
  {
    quote:
      "Our Rajasthan trip was absolutely seamless. The hotels, the driver, the guide at Mehrangarh — everything felt premium and well thought out.",
    name: "Ankit & Priya Sharma",
    trip: "Rajasthan Heritage Tour",
  },
  {
    quote:
      "I was travelling solo and a little nervous, but the team was available on WhatsApp the whole time. The Kerala backwater stay was the highlight of my year.",
    name: "Sarah Mitchell",
    trip: "Kerala Solo Getaway",
  },
  {
    quote:
      "We booked a family trip to Himachal with six people across three generations. The pacing was perfect, the car was comfortable, and the kids loved Manali.",
    name: "Vikram Mehta Family",
    trip: "Himachal Family Holiday",
  },
];
