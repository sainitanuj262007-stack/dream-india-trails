import heroImage from "@/assets/hero-india.jpg";
import heroVideo from "@/assets/hero-india.mp4.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sunrise over the Taj Mahal, India"
          width={1920}
          height={1088}
          className="size-full object-cover"
        />
        <video
          className="absolute inset-0 size-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroImage}
          aria-hidden="true"
        >
          <source src={heroVideo.url} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/80">
          Travel across India, planned around you
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
          YOUR DREAM HOLIDAY STARTS HERE
        </h1>
        <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
          Handcrafted tour packages and comfortable car rentals for families, couples, friends,
          groups and visitors from abroad — planned by people who know India.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#enquiry"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            Plan Your Trip
          </a>
          <a
            href="#destinations"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-white/10 px-7 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Explore Destinations
          </a>
        </div>
      </div>
    </section>
  );
}
