// Site configuration - easily editable for non-technical users
export const SITE_CONFIG = {
  name: "Clean Spree UK",
  tagline: "Professional Cleaning Services Across the UK",
  description: "Reliable, high-quality cleaning services for hotels, offices, homes, and more across the United Kingdom.",
  phone: "+44 7700 900000", // Replace with client's number
  email: "info@cleanspree-uk.com", // Replace with client's email
  whatsapp: "447700900000", // UK format without + for WhatsApp link
  address: "London, United Kingdom",
  social: {
    facebook: "https://facebook.com/cleanspreeuk",
    instagram: "https://instagram.com/cleanspreeuk",
    linkedin: "https://linkedin.com/company/cleanspreeuk",
  },
} as const;

export const SERVICES = [
  {
    id: "hotel-cleaning",
    title: "Hotel Cleaning",
    shortDesc: "Front & back of house cleaning for hotels.",
    description: "Comprehensive cleaning for hotels including lobbies, corridors, guest rooms, and back-of-house areas. We maintain the highest standards to ensure guest satisfaction.",
    icon: "BuildingOffice2Icon",
  },
  {
    id: "deep-kitchen",
    title: "Deep Kitchen Cleaning",
    shortDesc: "Commercial and domestic kitchen deep cleans.",
    description: "Thorough deep cleaning of commercial and residential kitchens. Grease removal, equipment cleaning, and hygiene compliance for food safety.",
    icon: "CubeIcon",
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    shortDesc: "Daily and periodic office cleaning.",
    description: "Keep your workspace spotless with our office cleaning services. From daily tidies to deep cleans, we help maintain a professional environment.",
    icon: "BriefcaseIcon",
  },
  {
    id: "house-cleaning",
    title: "House Cleaning",
    shortDesc: "Front & back of house domestic cleaning.",
    description: "Regular or one-off house cleaning. We cover all areas including living spaces, bedrooms, bathrooms, and utility areas.",
    icon: "HomeIcon",
  },
  {
    id: "new-build",
    title: "New Build Cleaning",
    shortDesc: "Post-construction and new build cleans.",
    description: "Specialist cleaning after construction or renovation. Removal of dust, debris, and polish-ready finish for new properties.",
    icon: "SparklesIcon",
  },
  {
    id: "end-of-tenancy",
    title: "End of Tenancy Cleaning",
    shortDesc: "Move-out cleaning for landlords and tenants.",
    description: "Full property clean to help you secure your deposit. We meet most landlord and agent checklists for end of tenancy.",
    icon: "KeyIcon",
  },
  {
    id: "one-off",
    title: "One-Off Cleaning",
    shortDesc: "Single deep cleans when you need them.",
    description: "Flexible one-off cleaning for events, spring cleans, or when you need an extra hand. Book once with no commitment.",
    icon: "CalendarIcon",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
