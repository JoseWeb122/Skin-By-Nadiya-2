// Centralized content keeps services and short-lived promotions easy to update.
export const business = {
  name: "Skin by Nadiya",
  owner: "Nadiya Giordano",
  title: "Licensed Esthetician",
  location: "DeLand, Florida",
  phone: "(267) 625-5702",
  phoneHref: "tel:+12676255702",
  email: "nadiyagiordano1993@yahoo.com",
  bookingUrl: "https://skinbynadiya.booksy.com/",
  facebookUrl:
    "https://www.facebook.com/people/Nadiya-Giordano/61583448299312/",
};

export const images = {
  hero: {
    src: "https://images.pexels.com/photos/5253959/pexels-photo-5253959.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2000",
    alt: "Natural beauty portrait with visible freckles in soft editorial light",
  },
  brand: {
    src: "https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400",
    alt: "Esthetician providing a relaxing facial treatment",
  },
  rf: {
    src: "https://images.pexels.com/photos/25642674/pexels-photo-25642674.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400",
    alt: "Professional esthetician using modern facial treatment equipment",
  },
  about: {
    src: "https://images.pexels.com/photos/16120497/pexels-photo-16120497.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200",
    alt: "Esthetician performing a professional facial treatment",
  },
  selfCare: {
    src: "https://images.pexels.com/photos/7019749/pexels-photo-7019749.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800",
    alt: "Woman enjoying a quiet self-care skincare ritual",
  },
};

export const services = [
  {
    name: "Facials",
    short:
      "Customized facials designed to address individual skin concerns and restore your natural glow.",
    cta: "Explore facials",
    image:
      "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000",
    alt: "Woman relaxing during a customized facial mask treatment",
  },
  {
    name: "RF Skin Tightening",
    short:
      "Supports collagen and elastin production to help skin look firmer, smoother, and refreshed.",
    cta: "Learn about RF",
    image:
      "https://images.pexels.com/photos/5659055/pexels-photo-5659055.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000",
    alt: "Close-up of a professional facial treatment",
  },
  {
    name: "Ultrasonic Cavitation",
    short:
      "A non-invasive body contouring treatment designed to help contour targeted areas.",
    cta: "Explore body contouring",
    image:
      "https://images.pexels.com/photos/5042610/pexels-photo-5042610.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000",
    alt: "Professional non-invasive body contouring treatment",
  },
  {
    name: "Lash Services",
    short:
      "Lash lifts designed to enhance your natural lashes and create a beautiful lifted appearance.",
    cta: "View lash services",
    image:
      "https://images.pexels.com/photos/3581556/pexels-photo-3581556.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000",
    alt: "Close-up of natural eyelashes in soft sunlight",
  },
  {
    name: "Brow Services",
    short:
      "Brow lamination designed to create fuller-looking, beautifully shaped brows.",
    cta: "View brow services",
    image:
      "https://images.pexels.com/photos/13156200/pexels-photo-13156200.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000",
    alt: "Close-up of naturally shaped brows and eyes",
  },
];

export const treatmentCategories = [
  {
    name: "Facials",
    description:
      "A customized facial experience selected around your current skin needs and goals, with time to relax and reset.",
    suitable:
      "May be a fit for clients seeking personalized maintenance, hydration, or a refreshed appearance.",
    benefits: ["Personalized approach", "Supports healthy-looking skin", "Relaxing care"],
  },
  {
    name: "RF Skin Tightening",
    description:
      "A non-invasive treatment using gentle radiofrequency heat to support the skin's natural collagen and elastin production.",
    suitable:
      "May be a fit for clients interested in firmer, smoother-looking skin without downtime.",
    benefits: ["Supports collagen", "Helps skin look firmer", "No planned downtime"],
  },
  {
    name: "Body Contouring",
    description:
      "Ultrasonic cavitation is a non-invasive treatment designed to help contour and slim the appearance of targeted areas.",
    suitable:
      "May be a fit for clients who want to complement their wellness routine with targeted contouring care.",
    benefits: ["Non-invasive", "Targets selected areas", "Personalized sessions"],
  },
  {
    name: "Lash Services",
    description:
      "A lash lift enhances your natural lashes, creating a lifted, eye-opening effect with a polished finish.",
    suitable:
      "May be a fit for clients who want to highlight their natural lashes with an easy, refined look.",
    benefits: ["Enhances natural lashes", "Lifted appearance", "Low-maintenance beauty"],
  },
  {
    name: "Brow Services",
    description:
      "Brow lamination helps groom and set natural brow hairs for a fuller-looking, beautifully shaped result.",
    suitable:
      "May be a fit for clients who prefer a polished, softly structured brow appearance.",
    benefits: ["Fuller-looking brows", "Defined shape", "Customized finish"],
  },
];

export const rfBenefits = [
  { title: "Tightens & Firms", text: "Helps improve the appearance of loose skin." },
  { title: "Supports Collagen", text: "Stimulates collagen and elastin production." },
  { title: "Smoother-Looking Skin", text: "Helps soften the appearance of fine lines." },
  { title: "Improved Texture", text: "Helps improve the appearance of skin texture and tone." },
  { title: "No Downtime", text: "Designed to fit comfortably into your lifestyle." },
];

export const faqItems = [
  {
    question: "What should I expect at my first appointment?",
    answer:
      "Your appointment begins with a conversation about your skin, goals, comfort, and the experience you are looking for. Nadiya will use that time to recommend an appropriate service and explain what to expect before treatment begins.",
  },
  {
    question: "How do I know which facial is right for me?",
    answer:
      "You do not need to have everything figured out before booking. Share your current concerns and goals, and Nadiya can help guide you toward a facial that makes sense for your skin.",
  },
  {
    question: "What is RF skin tightening?",
    answer:
      "RF, or radiofrequency, is a non-invasive aesthetic treatment that uses controlled, gentle heat energy to support the body's natural collagen and elastin production.",
  },
  {
    question: "Is RF treatment non-invasive?",
    answer:
      "Yes, RF skin tightening is described as a non-invasive treatment. Suitability is personal, so your goals and any relevant considerations can be discussed before treatment.",
  },
  {
    question: "Is there downtime after RF treatment?",
    answer:
      "RF is generally selected as a no-planned-downtime treatment. Individual experiences can vary, and Nadiya will explain what you may expect for your specific appointment.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "Preparation can vary by service. After booking, contact Nadiya with any questions and follow the guidance provided for your selected treatment. Avoid making assumptions about special preparation requirements.",
  },
  {
    question: "Do you offer lash and brow services?",
    answer:
      "Yes. Skin by Nadiya offers lash lifts and brow lamination services designed to enhance your natural features.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Use any Book Now button on this site to visit the Skin by Nadiya Booksy page. You can also call or email Nadiya if you would like help choosing a service.",
  },
  {
    question: "Where are you located?",
    answer:
      "Skin by Nadiya serves clients in DeLand, Florida. Contact Nadiya or review your booking confirmation for current appointment location details.",
  },
];

export const galleryItems = [
  {
    src: "https://images.pexels.com/photos/5659018/pexels-photo-5659018.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200",
    alt: "Relaxing facial mask application in a skincare studio",
    caption: "Treatment imagery placeholder",
  },
  {
    src: "https://images.pexels.com/photos/34939696/pexels-photo-34939696.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000",
    alt: "Minimal skincare oils and serums in warm neutral light",
    caption: "Skincare imagery placeholder",
  },
  {
    src: "https://images.pexels.com/photos/7582555/pexels-photo-7582555.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200",
    alt: "Client receiving a calming facial massage",
    caption: "Treatment imagery placeholder",
  },
  {
    src: "https://images.pexels.com/photos/7479517/pexels-photo-7479517.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000",
    alt: "Artistic close-up celebrating natural skin texture",
    caption: "Natural skin imagery placeholder",
  },
];

export const testimonials = [
  "Client testimonial will be added here.",
  "Client testimonial will be added here.",
  "Client testimonial will be added here.",
];

export const campaigns = {
  newClient: {
    enabled: true,
    price: "$95",
    treatment: "European Facial",
    description:
      "Experience our signature European Facial, a customized, results-focused treatment tailored to your unique skin goals.",
  },
  giveaway: {
    enabled: true,
    status: "Giveaway details to be confirmed",
    headline: "Win a Free RF Treatment",
    deadline: "[ADD DATE]",
    winnerDate: "[ADD DATE]",
  },
  referral: {
    enabled: true,
    headline: "Refer a friend. Get $20.",
    description:
      "Share the glow with someone you love and receive $20 toward your next RF treatment.",
  },
  lashModel: {
    enabled: true,
    headline: "Lash Model Needed",
    priceLine: "Classic Lash Extensions - Full Set $100",
    duration: "2-3 hours",
    requirements: [
      "Must have clean, healthy lashes",
      "No lash extensions currently on",
      "No heavy makeup or mascara",
      "Must be able to relax with eyes closed",
      "Please arrive on time",
      "A patch test may be required",
      "Photos may be taken for portfolio purposes",
    ],
  },
};