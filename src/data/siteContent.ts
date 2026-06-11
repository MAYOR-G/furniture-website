import {
  Armchair,
  BadgeCheck,
  BedDouble,
  ChefHat,
  Gem,
  Hammer,
  Leaf,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sofa,
  Sparkles,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Collection = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type Product = {
  name: string;
  category: string;
  price: string;
  badge: string;
  image: string;
  materials: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ShowroomStory = {
  title: string;
  description: string;
  image: string;
  detail: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
};

export const brand = {
  name: "Oak & Ivory Living",
  tagline: "Furniture, styling, and quiet luxury for considered homes.",
  phone: "+234 805 555 0147",
  email: "hello@oakandivoryliving.com",
  address: "Plot 18 Admiralty Way, Lekki Phase 1, Lagos",
  instagram: "@oakandivoryliving",
};

export const navLinks: NavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "Products", href: "#products" },
  { label: "Consultation", href: "#consultation" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "12+", label: "curated room sets" },
  { value: "48 hr", label: "design quote turnaround" },
  { value: "4.9/5", label: "client experience rating" },
];

export const collections: Collection[] = [
  {
    title: "Living Room",
    description: "Statement sofas, occasional chairs, layered tables, and media consoles.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    icon: Sofa,
  },
  {
    title: "Bedroom",
    description: "Upholstered beds, calm storage, bedside lighting, and soft textiles.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    icon: BedDouble,
  },
  {
    title: "Dining",
    description: "Solid wood dining sets, hosting pieces, buffets, and bar cabinets.",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=80",
    icon: ChefHat,
  },
  {
    title: "Office",
    description: "Executive desks, ergonomic seating, library shelving, and quiet work zones.",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80",
    icon: Armchair,
  },
  {
    title: "Outdoor",
    description: "Weather-friendly loungers, terrace dining, woven accents, and planters.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    icon: Leaf,
  },
];

export const products: Product[] = [
  {
    name: "Adena Cloud Sofa",
    category: "Living Room",
    price: "NGN 1,850,000",
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    materials: "Boucle upholstery, walnut plinth",
  },
  {
    name: "Lekki Cane Lounge Chair",
    category: "Accent Seating",
    price: "NGN 620,000",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=900&q=80",
    materials: "Ash frame, handwoven cane",
  },
  {
    name: "Iroko Dining Table",
    category: "Dining",
    price: "NGN 1,450,000",
    badge: "Custom Sizes",
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=900&q=80",
    materials: "Iroko top, bronze metal base",
  },
  {
    name: "Ivory Arc Bed",
    category: "Bedroom",
    price: "NGN 980,000",
    badge: "Made to Order",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
    materials: "Linen blend, kiln-dried frame",
  },
  {
    name: "Marina Storage Console",
    category: "Storage",
    price: "NGN 720,000",
    badge: "Ready Stock",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80",
    materials: "Oak veneer, fluted doors",
  },
  {
    name: "Bronze Nesting Tables",
    category: "Occasional Tables",
    price: "NGN 380,000",
    badge: "Limited Run",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80",
    materials: "Travertine-look tops, bronze legs",
  },
];

export const features: Feature[] = [
  {
    title: "Curated, not crowded",
    description:
      "Each showroom piece is selected for scale, comfort, finish quality, and how well it works in real homes.",
    icon: Gem,
  },
  {
    title: "Design guidance included",
    description:
      "Clients can book a styling session for layout advice, fabric direction, and furniture pairings.",
    icon: Sparkles,
  },
  {
    title: "Custom sizing available",
    description:
      "Sofas, beds, dining tables, and consoles can be adjusted for apartments, family homes, and hospitality spaces.",
    icon: Hammer,
  },
  {
    title: "Delivery and installation",
    description:
      "Our team coordinates protected delivery, placement, and final setup across Lagos and selected cities.",
    icon: Truck,
  },
];

export const showroomStories: ShowroomStory[] = [
  {
    title: "Warm minimal living",
    description:
      "Ivory upholstery, walnut tables, stone lamps, and art-led styling for a calm city apartment.",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80",
    detail: "Soft neutrals with bronze accents",
  },
  {
    title: "Family dining suite",
    description:
      "A generous timber table, comfortable upholstered chairs, and storage that hides hosting essentials.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    detail: "Designed for long weekend meals",
  },
  {
    title: "Quiet executive corner",
    description:
      "A composed work setting with tactile storage, a supportive chair, and layered task lighting.",
    image:
      "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=900&q=80",
    detail: "Home office, but elevated",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The team understood the kind of calm, refined home we wanted. The sofa, dining set, and styling pieces arrived exactly as discussed.",
    name: "Adaora N.",
    title: "Homeowner, Ikoyi",
    initials: "AN",
  },
  {
    quote:
      "Oak & Ivory gives clients a showroom experience that feels premium without being intimidating. Their custom sizing process is very clear.",
    name: "Tunde A.",
    title: "Interior designer, Lagos",
    initials: "TA",
  },
  {
    quote:
      "We needed durable pieces for a serviced apartment project. They helped us balance beauty, maintenance, delivery timing, and budget.",
    name: "Mariam B.",
    title: "Hospitality operator",
    initials: "MB",
  },
];

export const assuranceItems = [
  { label: "Secure quote process", icon: ShieldCheck },
  { label: "Quality-checked finishes", icon: BadgeCheck },
  { label: "Packed for delivery", icon: PackageCheck },
  { label: "Lagos showroom visits", icon: MapPin },
  { label: "Phone consultation", icon: Phone },
];

export const openingHours = [
  "Monday - Friday: 9:00 AM - 6:00 PM",
  "Saturday: 10:00 AM - 5:00 PM",
  "Sunday: Private appointments only",
];
