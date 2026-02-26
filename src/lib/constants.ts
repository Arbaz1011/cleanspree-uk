// Site configuration - easily editable for non-technical users
export const SITE_CONFIG = {
  name: "Clean Spree",
  /** Logo: "/api/logo" (finds public/logo.png or .svg in project) or "" for letter badge only. */
  logo: "/api/logo",
  tagline: "Professional Cleaning Services Across the UK",
  description: "Reliable, high-quality cleaning services for hotels, offices, homes, and more across the United Kingdom.",
  /** UK mobile */
  phone: "07778 737256",
  phoneTel: "+447778737256", // E.164 for tel: and WhatsApp links
  email: "info@cleanspree.co.uk",
  whatsapp: "447778737256", // UK: no + for WhatsApp link
  address: "London, UK",
  social: {
    instagram: "https://www.instagram.com/cleanspree.ie",
    linkedin: "https://www.linkedin.com/company/clean-spree-ltd/",
  },
} as const;

// Service images: local files from public/images/services/
const SERVICE_IMAGES = {
  "hotel-cleaning": "/images/services/hotel-cleaning.jpg.jpg",
  "deep-kitchen": "/images/services/deep-kitchen.jpg.jpeg",
  "office-cleaning": "/images/services/office-cleaning.jpg.jpg",
  "house-cleaning": "/images/services/house-cleaning.jpg.jpg",
  "new-build": "/images/services/new-build.jpg.jpg",
  "end-of-tenancy": "/images/services/end-of-tenancy.jpg.jpg",
  "security-services": "/images/services/security-services.jpg.jpg",
} as const;

/** Services aligned with cleanspree.ie (same business, UK region). Each has features list for Services page. */
export const SERVICES = [
  {
    id: "hotel-cleaning",
    title: "Hotel Cleaning",
    shortDesc: "Front & back of house cleaning for hotels.",
    description: "Comprehensive cleaning solutions for hotels, ensuring immaculate spaces for your guests. Our services include room turnover, common area maintenance, and deep cleaning of facilities.",
    features: ["Conference rooms", "Lobby and reception areas", "Kitchen and restaurant cleaning", "Common area maintenance", "Room turnover service"],
    image: SERVICE_IMAGES["hotel-cleaning"],
  },
  {
    id: "security-services",
    title: "Security Services",
    shortDesc: "Professional security and site protection.",
    description: "Reliable security services to protect your premises, staff, and assets. We provide trained personnel and tailored solutions for commercial and residential clients.",
    features: ["Site security and patrols", "Access control", "CCTV monitoring support", "Event and out-of-hours cover", "Key holding and alarm response"],
    image: SERVICE_IMAGES["security-services"],
  },
  {
    id: "deep-kitchen",
    title: "Deep Kitchen Cleaning",
    shortDesc: "Commercial and domestic kitchen deep cleans.",
    description: "Professional deep cleaning services for commercial and residential kitchens. We ensure your kitchen meets all hygiene standards and regulations.",
    features: ["Sanitization services", "Ventilation system cleaning", "Floor and wall cleaning", "Grease removal", "Appliance deep cleaning"],
    image: SERVICE_IMAGES["deep-kitchen"],
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    shortDesc: "Daily and periodic office cleaning.",
    description: "Keep your workplace clean, healthy, and productive with our professional office cleaning services. Regular maintenance to deep cleaning solutions.",
    features: ["Waste management", "Window cleaning", "Washroom sanitation", "Floor care and maintenance", "Daily maintenance cleaning"],
    image: SERVICE_IMAGES["office-cleaning"],
  },
  {
    id: "house-cleaning",
    title: "House Cleaning",
    shortDesc: "Front & back of house domestic cleaning.",
    description: "Thorough home cleaning services tailored to your specific needs and preferences. We treat your home with the care and respect it deserves.",
    features: ["Special occasion cleaning", "Carpet and upholstery cleaning", "Window and glass cleaning", "Deep cleaning services", "Regular maintenance cleaning"],
    image: SERVICE_IMAGES["house-cleaning"],
  },
  {
    id: "new-build",
    title: "New Build Cleaning",
    shortDesc: "Post-construction and new build cleans.",
    description: "Specialized cleaning services for newly constructed properties. We ensure your new property is ready for occupation or handover.",
    features: ["Final inspection cleaning", "Floor cleaning and polishing", "Window and frame cleaning", "Dust and debris removal"],
    image: SERVICE_IMAGES["new-build"],
  },
  {
    id: "end-of-tenancy",
    title: "End of Tenancy Cleaning",
    shortDesc: "Move-out cleaning for landlords and tenants.",
    description: "Detailed cleaning services to ensure property handover in perfect condition. Get your deposit back with our thorough cleaning service.",
    features: ["Inspection checklist compliance", "Window and blind cleaning", "Oven and appliance cleaning", "Carpet deep cleaning", "Complete property cleaning"],
    image: SERVICE_IMAGES["end-of-tenancy"],
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;
