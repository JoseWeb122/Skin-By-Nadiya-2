import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  business,
  campaigns,
  faqItems,
  galleryItems,
  images,
  rfBenefits,
  services,
  testimonials,
  treatmentCategories,
} from "./content";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Specials", "#specials"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h13M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ open = false }: { open?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`inline-flex flex-col items-center ${light ? "text-white" : "text-[#292621]"}`}
    >
      <span className="font-display text-[1.45rem] leading-none tracking-[0.08em] uppercase sm:text-[1.6rem]">
        Skin by Nadiya
      </span>
      <span className="mt-1.5 text-[0.52rem] font-semibold tracking-[0.32em] uppercase opacity-75">
        Licensed Esthetician
      </span>
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
  image = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  image?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.14 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${image ? "image-reveal" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function ActionLink({
  href,
  children,
  variant = "dark",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline-light" | "outline-dark";
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`btn btn-${variant}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowIcon className="h-4 w-4" />
    </a>
  );
}

function AnnouncementBar() {
  return (
    <div className="relative z-[60] flex min-h-9 items-center justify-center gap-4 bg-[#3a332f] px-4 py-2 text-center text-white">
      <p className="text-[0.58rem] font-medium tracking-[0.16em] uppercase sm:text-[0.64rem]">
        New Client Special <span className="mx-1.5 text-[#cdb595]">-</span> European Facial $95
      </p>
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="hidden border-b border-white/70 pb-0.5 text-[0.58rem] font-semibold tracking-[0.15em] uppercase sm:inline-block"
      >
        Book now
      </a>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-[#d8cec1]/70 bg-[#f7f3ec]/92 py-3 shadow-[0_10px_35px_rgba(48,43,40,0.05)] backdrop-blur-xl"
          : "border-transparent bg-[#f7f3ec] py-4"
      }`}
    >
      <div className="site-container grid grid-cols-[1fr_auto_1fr] items-center">
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navItems.slice(0, 3).map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="nav-link text-[0.64rem] font-semibold tracking-[0.15em] uppercase"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="col-start-2">
          <Logo />
        </div>
        <div className="hidden items-center justify-end gap-6 xl:flex">
          {navItems.slice(3).map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="nav-link text-[0.64rem] font-semibold tracking-[0.15em] uppercase"
            >
              {label}
            </a>
          ))}
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-[#292621] px-4 py-3 text-[0.62rem] font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-[#292621] hover:text-white"
          >
            Book now
          </a>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="col-start-3 row-start-1 ml-auto flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 top-[92px] z-[-1] bg-[#f7f3ec] transition-all duration-500 xl:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-2 px-6"
          aria-label="Mobile navigation"
        >
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-display py-2 text-4xl uppercase"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              {label}
            </a>
          ))}
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark mt-8"
          >
            <span>Book an appointment</span>
            <ArrowIcon className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-7.5rem)] overflow-hidden bg-[#51443e] text-white"
    >
      <img
        src={images.hero.src}
        alt={images.hero.alt}
        className="hero-image absolute inset-0 h-full w-full object-cover object-[62%_38%]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,27,25,.75)_0%,rgba(31,27,25,.42)_43%,rgba(31,27,25,.06)_75%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(28,24,22,.45)_0%,transparent_36%)]" />
      <div className="site-container relative flex min-h-[calc(100svh-7.5rem)] items-end pb-14 pt-28 sm:pb-20 lg:items-center lg:py-24">
        <div className="hero-copy max-w-3xl">
          <p className="label mb-7 text-white/85">
            Licensed Esthetician <span className="mx-2 text-[#ddc2ae]">/</span> DeLand, FL
          </p>
          <h1 className="display-title max-w-[9ch] text-[clamp(3.8rem,9vw,8rem)]">
            Your Skin.
            <br />
            Your Confidence.
          </h1>
          <p className="mt-7 max-w-xl text-[0.98rem] leading-7 text-white/85 sm:text-lg sm:leading-8">
            Personalized aesthetic treatments designed to help you relax, rejuvenate, and reveal your
            natural glow.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={business.bookingUrl} variant="light" external>
              Book your appointment
            </ActionLink>
            <ActionLink href="#services" variant="outline-light">
              Explore services
            </ActionLink>
          </div>
          <p className="mt-8 border-l border-[#d5b99f] pl-4 text-[0.65rem] font-medium tracking-[0.18em] text-white/80 uppercase">
            Real People. Real Results. Real Confidence.
          </p>
        </div>
      </div>
      <a
        href="#introduction"
        className="absolute bottom-9 right-8 hidden items-center gap-3 text-[0.58rem] tracking-[0.18em] uppercase lg:flex"
      >
        <span className="h-px w-12 bg-white/60" /> Scroll to discover
      </a>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Licensed Esthetician",
    "Personalized Care",
    "Results-Focused Treatments",
    "High-Quality Products",
    "DeLand, FL",
  ];
  const repeated = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-[#d7cdbf] bg-[#efe6da] py-5">
      <div className="marquee-track">
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="whitespace-nowrap px-7 text-[0.63rem] font-semibold tracking-[0.18em] uppercase sm:px-12">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#ac8b76]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <section id="introduction" className="section-pad bg-[#f7f3ec]">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1fr_.9fr] lg:gap-24">
        <Reveal className="max-w-2xl">
          <p className="label mb-7 text-[#9a765d]">Porefection Aesthetics</p>
          <h2 className="section-title normal-case">
            Healthy Skin.
            <br />
            Happier You.
          </h2>
          <div className="mt-9 flex gap-6">
            <span className="mt-3 hidden h-px w-16 shrink-0 bg-[#ac8b76] sm:block" />
            <div>
              <p className="body-large max-w-xl text-[#686057]">
                Your skin deserves more than a one-size-fits-all approach. Nadiya provides personalized
                aesthetic treatments designed around your individual skin goals, helping you feel
                confident, refreshed, and comfortable in your own skin.
              </p>
              <a href="#services" className="link-line mt-8">
                Discover the approach <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal image className="h-[32rem] lg:h-[42rem]">
          <img
            src={images.brand.src}
            alt={images.brand.alt}
            loading="lazy"
            className="h-full w-full scale-[1.05] object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section id="services" className="section-pad bg-[#fbf9f5]">
      <div className="site-container">
        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_.6fr] lg:items-end">
          <div>
            <p className="label mb-6 text-[#9a765d]">The treatment menu</p>
            <h2 className="section-title max-w-[15ch]">
              Aesthetic Treatments That Bring Out Your Natural Beauty
            </h2>
          </div>
          <p className="body-large max-w-xl text-[#71685f] lg:pb-2">
            From customized facials to skin tightening and body contouring, every treatment is designed
            with your skin goals and overall confidence in mind.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.name}
              delay={(index % 3) * 110}
              className={`service-card group ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <a href="#treatments" className="block">
                <div
                  className={`overflow-hidden bg-[#e8dfd3] ${
                    index === 0 ? "h-[25rem] lg:h-[34rem]" : "h-[25rem]"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-[#cfc4b7] py-6">
                  <span className="service-index pt-1 text-xs tracking-[0.12em] text-[#9b8e83]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl uppercase sm:text-[2.05rem]">{service.name}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#71685f]">{service.short}</p>
                    <span className="link-line mt-5">
                      {service.cta} <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RfFeature() {
  return (
    <section className="bg-[#352f2c] text-white">
      <div className="grid min-h-[55rem] lg:grid-cols-2">
        <Reveal image className="min-h-[34rem] lg:min-h-full">
          <img
            src={images.rf.src}
            alt={images.rf.alt}
            loading="lazy"
            className="h-full w-full scale-[1.05] object-cover"
          />
        </Reveal>
        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-[clamp(4rem,7vw,8rem)] lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="label mb-7 text-[#d2b99e]">Featured treatment</p>
            <h2 className="section-title">
              Tighter.
              <br />
              Smoother.
              <br />
              Brighter.
            </h2>
            <p className="mt-8 font-display text-2xl text-[#e5d5c3] sm:text-3xl">
              Discover the benefits of RF skin tightening.
            </p>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              RF, or radiofrequency, is a non-invasive skin rejuvenation treatment that uses gentle heat
              energy to stimulate your body's natural collagen and elastin production.
            </p>
            <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {rfBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`border-t border-white/18 py-5 ${
                    index === rfBenefits.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <h3 className="text-[0.67rem] font-semibold tracking-[0.15em] uppercase">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{benefit.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ActionLink href={business.bookingUrl} variant="light" external>
                Book an RF treatment
              </ActionLink>
            </div>
            <p className="mt-6 text-xs leading-5 text-white/45">
              Individual results may vary. Treatment suitability will be discussed during your
              appointment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function NewClientSpecial() {
  if (!campaigns.newClient.enabled) return null;
  return (
    <section id="specials" className="relative overflow-hidden bg-[#e6d8c8] py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-4 -top-16 font-display text-[14rem] leading-none text-white/25 sm:text-[22rem]">
        95
      </div>
      <div className="site-container relative">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div>
            <p className="label text-[#7b6252]">Exclusive welcome</p>
            <h2 className="mt-5 font-display text-[clamp(2.7rem,5.5vw,5.7rem)] leading-[.95] uppercase">
              A Little Something for New Clients
            </h2>
          </div>
          <div className="hidden h-44 w-px bg-[#ad9984]/60 lg:block" />
          <div className="lg:pl-8">
            <div className="flex items-end gap-5">
              <span className="font-display text-[6rem] leading-[.8] sm:text-[8rem]">
                {campaigns.newClient.price}
              </span>
              <span className="mb-1 text-xs font-semibold tracking-[0.18em] uppercase">
                {campaigns.newClient.treatment}
              </span>
            </div>
            <p className="mt-7 max-w-lg leading-7 text-[#61584f]">
              {campaigns.newClient.description}
            </p>
            <div className="mt-8">
              <ActionLink href={business.bookingUrl} external>
                Claim your new client special
              </ActionLink>
            </div>
            <p className="mt-5 text-xs leading-5 text-[#756b61]">
              Limited promotional pricing. Contact Nadiya for current availability and details.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const values = [
    ["Licensed & Experienced", "Professional skincare knowledge with a personalized approach."],
    ["Personalized Care", "Every client and every skin journey is different."],
    [
      "High-Quality Products",
      "Thoughtful products selected to support beautiful, healthy-looking skin.",
    ],
  ];
  return (
    <section id="about" className="section-pad bg-[#f7f3ec]">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[.85fr_1fr] lg:gap-24">
        <div>
          <Reveal image className="h-[38rem] lg:h-[49rem]">
            <img
              src={images.about.src}
              alt={images.about.alt}
              loading="lazy"
              className="h-full w-full scale-[1.05] object-cover"
            />
          </Reveal>
          <p className="mt-3 text-[0.65rem] tracking-[0.12em] text-[#8d8176] uppercase">
            Studio imagery placeholder - Nadiya's portrait can be added here
          </p>
        </div>
        <Reveal>
          <p className="label mb-7 text-[#9a765d]">Meet Nadiya</p>
          <h2 className="section-title max-w-[12ch]">My Passion Is Helping You Feel Your Best.</h2>
          <p className="mt-8 text-xl leading-8 text-[#564f48]">
            I'm a licensed esthetician dedicated to helping you look and feel your best from the inside
            out.
          </p>
          <p className="mt-5 leading-7 text-[#71685f]">
            My approach is centered around personalized care, high-quality products, and treatments
            selected with your individual skin goals in mind.
          </p>
          <div className="mt-10">
            {values.map(([title, text], index) => (
              <div
                key={title}
                className="grid grid-cols-[2.2rem_1fr] border-t border-[#d4c9bc] py-5"
              >
                <span className="text-xs text-[#a49383]">0{index + 1}</span>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.14em] uppercase">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#756c63]">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#contact" className="link-line mt-8">
            Get to know Nadiya <ArrowIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function WhyNadiya() {
  const reasons = [
    "Licensed Esthetician",
    "Personalized Treatment Plans",
    "High-Quality Products",
    "Relaxing, Boutique Experience",
    "Results-Focused Approach",
    "Individual Attention",
  ];
  return (
    <section className="section-pad overflow-hidden border-y border-[#d7cdbf] bg-[#fbf9f5]">
      <div className="site-container grid gap-16 lg:grid-cols-[1fr_.85fr] lg:gap-24">
        <Reveal>
          <p className="label mb-7 text-[#9a765d]">The Skin by Nadiya difference</p>
          <h2 className="section-title">Why Choose Nadiya?</h2>
          <div className="mt-12 grid sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={reason} className="border-t border-[#d2c8bb] py-5 sm:mr-8">
                <span className="text-[0.65rem] tracking-[0.14em] text-[#9d8d7e]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal
          delay={160}
          className="relative flex min-h-[28rem] items-center bg-[#d9bdb5] px-8 py-16 sm:px-14"
        >
          <span className="absolute left-6 top-4 font-display text-[9rem] leading-none text-white/30">
            &ldquo;
          </span>
          <blockquote className="relative font-display text-[clamp(3rem,5.2vw,5.6rem)] leading-[.98] uppercase">
            Self care isn't selfish.
            <br />
            It's necessary.
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

function TreatmentExplorer() {
  const [active, setActive] = useState(0);
  const current = treatmentCategories[active];
  return (
    <section id="treatments" className="section-pad bg-[#efe6da]">
      <div className="site-container">
        <Reveal className="max-w-3xl">
          <p className="label mb-6 text-[#9a765d]">Find your treatment</p>
          <h2 className="section-title">Care Curated for You.</h2>
          <p className="mt-6 max-w-xl leading-7 text-[#71685f]">
            Explore each category, then book directly or connect with Nadiya for personalized guidance.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div role="tablist" aria-label="Treatment categories" className="border-t border-[#bfae9c]">
            {treatmentCategories.map((category, index) => (
              <button
                key={category.name}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="treatment-panel"
                onClick={() => setActive(index)}
                className={`group flex w-full items-center justify-between border-b border-[#bfae9c] py-5 text-left transition-colors ${
                  active === index ? "text-[#8c6258]" : "hover:text-[#8c6258]"
                }`}
              >
                <span className="font-display text-[1.65rem] uppercase sm:text-3xl">
                  {category.name}
                </span>
                <span
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-45" : "group-hover:rotate-45"
                  }`}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
          <div
            id="treatment-panel"
            role="tabpanel"
            key={current.name}
            className="animate-[hero-rise_500ms_ease_forwards] lg:pt-2"
          >
            <p className="label text-[#9a765d]">
              {String(active + 1).padStart(2, "0")} / {String(treatmentCategories.length).padStart(2, "0")}
            </p>
            <h3 className="mt-5 font-display text-[clamp(2.8rem,5vw,5rem)] leading-none uppercase">
              {current.name}
            </h3>
            <p className="body-large mt-7 max-w-2xl text-[#5f5750]">{current.description}</p>
            <div className="mt-9 grid gap-7 border-y border-[#c5b5a4] py-7 sm:grid-cols-2">
              <div>
                <p className="label text-[#8a7665]">May be suitable for</p>
                <p className="mt-4 text-sm leading-6 text-[#71685f]">{current.suitable}</p>
              </div>
              <div>
                <p className="label text-[#8a7665]">Key benefits</p>
                <ul className="mt-4 space-y-2">
                  {current.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm text-[#5f5750]">
                      <span className="text-[#9d7a68]">/</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <ActionLink href={business.bookingUrl} external>
                Book this treatment
              </ActionLink>
            </div>
            <p className="mt-4 text-xs text-[#857a70]">
              Individual results and treatment experiences may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    document.body.classList.toggle("lightbox-open", selected !== null);
    const onKey = (event: KeyboardEvent) => {
      if (selected === null) return;
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((selected + 1) % galleryItems.length);
      if (event.key === "ArrowLeft") {
        setSelected((selected - 1 + galleryItems.length) % galleryItems.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="results" className="section-pad bg-[#fbf9f5]">
      <div className="site-container">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label mb-6 text-[#9a765d]">The gallery</p>
            <h2 className="section-title">
              Real People.
              <br />
              Real Results.
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="body-large text-[#71685f]">Beautiful skin journeys deserve to be celebrated.</p>
            <p className="mt-3 text-xs leading-5 text-[#8d8176]">
              Client result photography has not yet been provided. The gallery below uses editorial
              treatment placeholders and does not represent client outcomes.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid auto-rows-[17rem] gap-4 md:grid-cols-2 md:auto-rows-[23rem] lg:grid-cols-12">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.src}
              delay={index * 80}
              className={`gallery-item overflow-hidden bg-[#e6ddd2] ${
                index === 0
                  ? "md:row-span-2 lg:col-span-7"
                  : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                      ? "lg:col-span-5"
                      : "md:col-span-2 lg:col-span-12"
              }`}
            >
              <button
                type="button"
                onClick={() => setSelected(index)}
                className="group relative h-full w-full text-left"
                aria-label={`Open ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-5 pb-5 pt-16 text-[0.62rem] tracking-[0.15em] text-white uppercase opacity-0 transition-opacity group-hover:opacity-100">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[#d1c6b9] pt-7 sm:flex-row sm:items-center">
          <p className="text-sm text-[#71685f]">
            Follow along for treatment updates, studio news, and future client stories.
          </p>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="link-line"
          >
            Follow Nadiya <ArrowIcon className="h-4 w-4" />
          </a>
        </Reveal>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1d1917]/95 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-white"
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelected((selected - 1 + galleryItems.length) % galleryItems.length);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white sm:left-8"
          >
            <ArrowIcon className="h-7 w-7 rotate-180" />
          </button>
          <figure className="max-h-[85vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={galleryItems[selected].src}
              alt={galleryItems[selected].alt}
              className="max-h-[78vh] max-w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-xs tracking-[0.14em] text-white/70 uppercase">
              {galleryItems[selected].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelected((selected + 1) % galleryItems.length);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white sm:right-8"
          >
            <ArrowIcon className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % testimonials.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-pad bg-[#d7bbb3]">
      <div className="site-container">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="label mb-7 text-[#6e514a]">Client notes</p>
          <h2 className="section-title">Kind Words from Clients</h2>
          <div className="mt-14 min-h-[12rem]" aria-live="polite">
            <span className="font-display text-6xl leading-none text-white/50">&ldquo;</span>
            <blockquote
              key={active}
              className="animate-[hero-rise_500ms_ease_forwards] font-display text-[clamp(2rem,4.5vw,4.2rem)] leading-tight"
            >
              {testimonials[active]}
            </blockquote>
            <p className="mt-5 text-[0.62rem] font-semibold tracking-[0.17em] text-[#674f49] uppercase">
              Placeholder - replace with a verified client testimonial
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              className="flex h-11 w-11 items-center justify-center border border-[#6e514a]/40 transition-colors hover:bg-[#6e514a] hover:text-white"
            >
              <ArrowIcon className="h-5 w-5 rotate-180" />
            </button>
            <span className="text-xs tracking-[0.12em]">
              {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setActive((active + 1) % testimonials.length)}
              className="flex h-11 w-11 items-center justify-center border border-[#6e514a]/40 transition-colors hover:bg-[#6e514a] hover:text-white"
            >
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Promotions({ onLashInterest }: { onLashInterest: () => void }) {
  return (
    <section className="section-pad bg-[#f7f3ec]">
      <div className="site-container">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label mb-6 text-[#9a765d]">Special opportunities</p>
            <h2 className="section-title">A Little Extra Glow.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#756c63]">
            Campaign details are subject to change. Connect with Nadiya to confirm current availability
            before participating.
          </p>
        </Reveal>

        {campaigns.giveaway.enabled && (
          <Reveal className="grid overflow-hidden border border-[#cfc3b6] lg:grid-cols-[1.1fr_.9fr]">
            <div className="bg-[#3b3430] p-8 text-white sm:p-12 lg:p-16">
              <span className="inline-block border border-[#d0b99d]/50 px-3 py-2 text-[0.6rem] tracking-[0.14em] uppercase">
                {campaigns.giveaway.status}
              </span>
              <p className="label mt-10 text-[#d8bfa5]">One lucky winner</p>
              <h3 className="mt-5 font-display text-[clamp(3.1rem,6vw,6rem)] leading-[.93] uppercase">
                {campaigns.giveaway.headline}
              </h3>
              <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-white/75 uppercase">
                Tag <span className="mx-2 text-[#c3a98d]">/</span> Comment
                <span className="mx-2 text-[#c3a98d]">/</span> Glow
              </p>
            </div>
            <div className="bg-[#eaded0] p-8 sm:p-12 lg:p-16">
              <p className="label text-[#876f5d]">How to enter</p>
              <ol className="mt-8">
                {[
                  [
                    "Tag 3 people in the comments",
                    "Share the giveaway post with people you think would love it.",
                  ],
                  [
                    "Comment why RF could benefit you",
                    "Tell Nadiya what you would hope to get from the experience.",
                  ],
                  [
                    "That's it - you're entered to win",
                    "Entries are not open until dates are confirmed and announced.",
                  ],
                ].map(([title, text], index) => (
                  <li
                    key={title}
                    className="grid grid-cols-[2.3rem_1fr] border-t border-[#baa896] py-5"
                  >
                    <span className="text-xs text-[#8f7a67]">0{index + 1}</span>
                    <div>
                      <h4 className="text-sm font-semibold uppercase">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[#71685f]">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <ActionLink href={business.facebookUrl} external>
                  Enter the giveaway
                </ActionLink>
                <div className="text-xs leading-5 text-[#71685f]">
                  Deadline: {campaigns.giveaway.deadline}
                  <br />
                  Winner announcement: {campaigns.giveaway.winnerDate}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {campaigns.referral.enabled && (
            <Reveal className="flex min-h-[27rem] flex-col justify-between bg-[#ddd0bf] p-8 sm:p-12">
              <div>
                <p className="label text-[#846d5b]">Share the care</p>
                <h3 className="mt-6 font-display text-[clamp(3rem,5vw,5rem)] leading-none uppercase">
                  {campaigns.referral.headline}
                </h3>
                <p className="mt-6 max-w-md leading-7 text-[#625951]">
                  {campaigns.referral.description}
                </p>
              </div>
              <a href="#contact" className="link-line mt-10 w-fit">
                Refer a friend <ArrowIcon className="h-4 w-4" />
              </a>
            </Reveal>
          )}
          {campaigns.lashModel.enabled && (
            <Reveal delay={120} className="min-h-[27rem] bg-[#e3c8c2] p-8 sm:p-12">
              <p className="label text-[#76564f]">Model call</p>
              <h3 className="mt-6 font-display text-[clamp(3rem,5vw,5rem)] leading-none uppercase">
                {campaigns.lashModel.headline}
              </h3>
              <p className="mt-4 text-sm font-semibold tracking-[0.12em] uppercase">
                {campaigns.lashModel.priceLine}
              </p>
              <div className="mt-7 grid gap-6 sm:grid-cols-[auto_1fr]">
                <div className="border-r border-[#a88e88]/60 pr-6">
                  <span className="font-display text-3xl">{campaigns.lashModel.duration}</span>
                  <p className="mt-1 text-[0.58rem] tracking-[0.14em] uppercase">Appointment</p>
                </div>
                <p className="text-sm leading-6 text-[#66534f]">
                  Help me perfect my craft! Clean, healthy lashes are required, and photos may be taken
                  for portfolio purposes.
                </p>
              </div>
              <details className="group mt-7 border-y border-[#aa918a]/60 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold tracking-[0.14em] uppercase">
                  View all requirements <ChevronIcon />
                </summary>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {campaigns.lashModel.requirements.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-5 text-[#66534f]">
                      <span>/</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
              <button type="button" onClick={onLashInterest} className="link-line mt-7">
                I'm interested <ArrowIcon className="h-4 w-4" />
              </button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

function SelfCare() {
  return (
    <section className="relative min-h-[48rem] overflow-hidden bg-[#58443d] text-white">
      <img
        src={images.selfCare.src}
        alt={images.selfCare.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,27,24,.79)_0%,rgba(34,27,24,.5)_43%,rgba(34,27,24,.12)_78%)]" />
      <div className="site-container relative flex min-h-[48rem] items-center py-24">
        <Reveal className="max-w-3xl">
          <p className="label mb-7 text-[#ddc2ae]">Relax. Rejuvenate. Glow.</p>
          <h2 className="section-title max-w-[11ch] text-[clamp(3.5rem,7vw,7rem)]">
            Self Care Isn't Selfish.
            <br />
            It's Necessary.
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-white/80">
            Make time to slow down, reset, and invest in yourself.
          </p>
          <div className="mt-9">
            <ActionLink href={business.bookingUrl} variant="light" external>
              Book your self-care session
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BookingBanner() {
  return (
    <section className="bg-[#eadfd2] py-24 sm:py-32">
      <Reveal className="site-container text-center">
        <p className="label mb-7 text-[#9a765d]">Begin your skin journey</p>
        <h2 className="section-title mx-auto max-w-[16ch]">Ready to Feel Confident in Your Skin?</h2>
        <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[#71685f]">
          Let's create a treatment experience around your skin goals.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ActionLink href={business.bookingUrl} external>
            Book an appointment
          </ActionLink>
          <ActionLink href={business.phoneHref} variant="outline-dark">
            Call {business.phone}
          </ActionLink>
        </div>
      </Reveal>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad bg-[#fbf9f5]">
      <div className="site-container grid gap-14 lg:grid-cols-[.65fr_1fr] lg:gap-24">
        <Reveal>
          <p className="label mb-7 text-[#9a765d]">Good to know</p>
          <h2 className="section-title">Your Questions, Answered.</h2>
          <p className="mt-7 max-w-md leading-7 text-[#71685f]">
            Treatment details are personal. These general answers are a starting point, and Nadiya can
            help with anything specific.
          </p>
          <a href="#contact" className="link-line mt-8">
            Ask a question <ArrowIcon className="h-4 w-4" />
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="border-t border-[#cec2b5]">
            {faqItems.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.question} className="border-b border-[#cec2b5]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-[1.35rem] leading-snug sm:text-2xl">
                      {item.question}
                    </span>
                    <span className="shrink-0">
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#71685f]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact({
  selectedService,
  onServiceChange,
}: {
  selectedService: string;
  onServiceChange: (value: string) => void;
}) {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const note = String(data.get("message") || "").trim();
    if (!name || !email || !service || !note || !email.includes("@")) {
      setStatus("error");
      setMessage("Please complete the required fields and enter a valid email address.");
      return;
    }

    const phone = String(data.get("phone") || "").trim();
    const subject = encodeURIComponent(`Website inquiry from ${name} - ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nService: ${service}\n\nMessage:\n${note}`,
    );
    setStatus("success");
    setMessage("Your email app is opening with your message ready to send to Nadiya.");
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad bg-[#efe6da]">
      <div className="site-container">
        <Reveal className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="label mb-7 text-[#9a765d]">Contact & booking</p>
            <h2 className="section-title">Let's Connect.</h2>
            <p className="mt-7 max-w-md leading-7 text-[#71685f]">
              Have a question before you book? Reach out directly and start the conversation.
            </p>
            <address className="mt-10 not-italic">
              <p className="font-display text-3xl">{business.owner}</p>
              <p className="mt-1 text-xs tracking-[0.14em] text-[#766b61] uppercase">
                {business.title}
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <p>{business.location}</p>
                <p>
                  <a
                    href={business.phoneHref}
                    className="border-b border-transparent hover:border-current"
                  >
                    {business.phone}
                  </a>
                </p>
                <p className="break-all">
                  <a
                    href={`mailto:${business.email}`}
                    className="border-b border-transparent hover:border-current"
                  >
                    {business.email}
                  </a>
                </p>
              </div>
            </address>
            <div className="mt-8 flex gap-6">
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="link-line"
              >
                Facebook
              </a>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="link-line"
              >
                Booksy
              </a>
            </div>
          </div>

          <form onSubmit={submitForm} noValidate className="bg-[#fbf9f5] p-7 sm:p-12">
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              <label className="block">
                <span className="label text-[#7a6b60]">Name *</span>
                <input
                  className="field"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="block">
                <span className="label text-[#7a6b60]">Email *</span>
                <input
                  className="field"
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="block">
                <span className="label text-[#7a6b60]">Phone</span>
                <input
                  className="field"
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  autoComplete="tel"
                />
              </label>
              <label className="block">
                <span className="label text-[#7a6b60]">Service interested in *</span>
                <select
                  className="field"
                  name="service"
                  value={selectedService}
                  onChange={(event) => onServiceChange(event.target.value)}
                  required
                >
                  <option value="">Select a service</option>
                  {treatmentCategories.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                  <option value="Lash Model Opportunity">Lash Model Opportunity</option>
                  <option value="New Client Special">New Client Special</option>
                  <option value="Not Sure Yet">Not sure yet</option>
                </select>
              </label>
            </div>
            <label className="mt-7 block">
              <span className="label text-[#7a6b60]">Message *</span>
              <textarea
                className="field min-h-28 resize-y"
                name="message"
                placeholder="Tell Nadiya how she can help"
                required
              />
            </label>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <button type="submit" className="btn btn-dark">
                <span>Send message</span>
                <ArrowIcon className="h-4 w-4" />
              </button>
              <p className="max-w-sm text-xs leading-5 text-[#81766c]">
                Submitting opens your email app so you can review and send your message securely.
              </p>
            </div>
            {status !== "idle" && (
              <div
                role="status"
                className={`mt-6 border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-[#7d927e] bg-[#edf3ec] text-[#506451]"
                    : "border-[#aa7068] bg-[#f7ece9] text-[#83534d]"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="border-t border-[#d5c9bb] bg-[#f7f3ec] py-20">
      <Reveal className="site-container grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="label mb-5 text-[#9a765d]">Your local esthetician</p>
          <h2 className="section-title">Serving DeLand, FL.</h2>
          <p className="mt-5 text-[#71685f]">
            Your local destination for personalized skincare, aesthetics, and self-care.
          </p>
        </div>
        <div className="md:text-right">
          <p className="font-display text-3xl">DeLand, Florida</p>
          <a href={business.phoneHref} className="link-line mt-4">
            Call for details <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2f2b29] pb-24 pt-20 text-white md:pb-8">
      <div className="site-container">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div className="items-start lg:max-w-sm">
            <div className="flex justify-start">
              <Logo light />
            </div>
            <p className="mt-8 font-display text-4xl leading-tight">
              Your Skin.
              <br />
              Your Confidence.
            </p>
            <p className="mt-5 text-sm leading-6 text-white/55">
              Personalized aesthetics and self-care in DeLand, Florida.
            </p>
          </div>
          <div>
            <p className="label text-[#ceb69c]">Explore</p>
            <nav className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3" aria-label="Footer navigation">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="label text-[#ceb69c]">Contact</p>
            <div className="mt-6 space-y-3 text-sm text-white/65">
              <p>
                <a href={business.phoneHref} className="hover:text-white">
                  {business.phone}
                </a>
              </p>
              <p className="break-all">
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
              </p>
              <p>DeLand, FL</p>
              <p>
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </p>
            </div>
            <div className="mt-7">
              <ActionLink href={business.bookingUrl} variant="light" external>
                Book an appointment
              </ActionLink>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/12 pt-6 text-[0.62rem] tracking-[0.1em] text-white/35 uppercase sm:flex-row sm:justify-between">
          <p>&copy; 2026 Skin by Nadiya. All rights reserved.</p>
          <p>Licensed Esthetician / DeLand, Florida</p>
        </div>
      </div>
    </footer>
  );
}

function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[#cbbdad] bg-[#f7f3ec]/95 p-2 backdrop-blur-xl md:hidden">
      <a
        href={business.phoneHref}
        className="flex min-h-12 items-center justify-center text-[0.65rem] font-semibold tracking-[0.12em] uppercase"
      >
        Call Nadiya
      </a>
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-12 items-center justify-center bg-[#332e2b] text-[0.65rem] font-semibold tracking-[0.12em] text-white uppercase"
      >
        Book now
      </a>
    </div>
  );
}

export default function App() {
  const [contactService, setContactService] = useState("");

  const handleLashInterest = () => {
    setContactService("Lash Model Opportunity");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#292621]">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Introduction />
        <ServicesPreview />
        <RfFeature />
        <NewClientSpecial />
        <About />
        <WhyNadiya />
        <TreatmentExplorer />
        <Gallery />
        <Testimonials />
        <Promotions onLashInterest={handleLashInterest} />
        <SelfCare />
        <BookingBanner />
        <Faq />
        <Contact selectedService={contactService} onServiceChange={setContactService} />
        <Location />
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  );
}