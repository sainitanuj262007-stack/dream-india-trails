import familyHero from "@/assets/blog-family-hero.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
};

/* Add new posts here — the listing page picks them up automatically. */
export const blogPosts: BlogPost[] = [
  {
    slug: "best-packages-for-family",
    title: "Best Packages for Family: Budget-Friendly Trips in India",
    excerpt:
      "Rajasthan's forts, Himachal's mountains, Kerala's backwaters and Goa's beaches — how to pick a family package that fits your budget.",
    image: familyHero,
    category: "Family Travel Guide",
    readTime: "9 min read",
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
