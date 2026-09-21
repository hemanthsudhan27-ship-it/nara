export interface Batch {
  id: string;
  title: string;
  time: string;
  location: string;
  focus: string;
  level: string;
  trainer: string;
  trainerLink: string;
  admissionFee: number;
  monthlyFee: number;
  badge: string;
  spots: number;
  spotsStatus: "open" | "filling" | "almost-full";
  requirements: string;
}

export const BATCHES: Batch[] = [
  {
    id: "batch-1-wandru",
    title: "Batch 1: Wandru — Outdoor Parkour & Freerunning",
    time: "Monday, Wednesday & Friday • 6:00 AM – 7:30 AM",
    location: "Different outdoor locations across Calicut (South Beach & Urban Promenades)",
    focus: "Grounded fundamentals, vault mechanics, safety rolling, precision landings, functional mobility, and explosive freerunning flow led by Coach Renjith.",
    level: "All Levels (Complete beginners warmly guided)",
    trainer: "Coach Renjith & Coach Nithin",
    trainerLink: "/coaches",
    admissionFee: 2500,
    monthlyFee: 2000,
    badge: "Batch 1 • Wandru",
    spots: 8,
    spotsStatus: "filling",
    requirements: "You are required to bring your own yoga mat and a bottle of water for every session.",
  },
];

export const FAQS = [
  {
    q: "What is the fee structure for the parkour classes in Calicut?",
    a: "Our fee structure includes an Admission Fee of ₹2,500 (one-time upon registration) and a Monthly Fee of ₹2,000 for regular classes.",
  },
  {
    q: "What is the class schedule and timing?",
    a: "Classes are held every Monday, Wednesday & Friday from 6:00 AM to 7:30 AM. Perfect morning timings before work or college.",
  },
  {
    q: "Where do the parkour classes take place in Calicut?",
    a: "Currently, we conduct our outdoor Parkour & Freerunning classes at different locations across Calicut, including coastal beach promenades, South Beach ledges, and architectural plazas.",
  },
  {
    q: "Who is leading the Team NARA classes?",
    a: "Classes are conducted by experienced Team NARA trainers. You can check out our movement collective on Instagram @teamnara.in.",
  },
  {
    q: "What are the mandatory requirements for every training session?",
    a: "You are required to bring your own yoga mat and a bottle of water for every session. Please wear comfortable athletic clothes and flexible sneakers.",
  },
  {
    q: "Do I need any previous gymnastics or parkour experience?",
    a: "None whatsoever! We welcome absolute beginners. Every drill is broken down into safe, grounded progressions tailored to your individual pace.",
  },
  {
    q: "How does the admission registration work?",
    a: "Fill out the registration form, complete the ₹2,500 admission fee payment via UPI, and submit your UPI reference. You'll receive verification and a WhatsApp welcome with details for the upcoming class.",
  },
];
