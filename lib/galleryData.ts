export interface GalleryItem {
  id: string;
  category: "parkour" | "freerunning" | "tricking" | "jams";
  title: string;
  location: string;
  src: string;
  description: string;
}

export const EXTENDED_GALLERY: GalleryItem[] = [
  {
    id: "p-2282",
    category: "parkour",
    title: "Sea Wall Leap & Precision",
    location: "Calicut Beach Coastal Wall",
    src: "/photos/IMG_2282.webp",
    description: "Athlete executing precision landing on coastal granite sea wall in Calicut.",
  },
  {
    id: "p-2899",
    category: "jams",
    title: "Team Plaza Lineup & Footwork Drills",
    location: "South Beach Promenade",
    src: "/photos/IMG_2899.webp",
    description: "Team NARA athletes aligning for ground coordination and footwork drills.",
  },
  {
    id: "p-2900",
    category: "jams",
    title: "Crew Forward Fold Mobility",
    location: "Calicut Seaside Plazas",
    src: "/photos/IMG_2900.webp",
    description: "Pre-session hamstring mobility and joint preparation circle by the sea.",
  },
  {
    id: "p-2268",
    category: "freerunning",
    title: "Sunrise Flow & Sun Alignment",
    location: "Kozhikode Promenade",
    src: "/photos/IMG_2268.webp",
    description: "Freerunning balance stride sequence captured during early morning coastal sunrise.",
  },
  {
    id: "p-2264",
    category: "freerunning",
    title: "Morning Promenade Stride",
    location: "Calicut Coastal Art Walk",
    src: "/photos/IMG_2264.webp",
    description: "Pacing dynamic stride across elevated stone platforms at Calicut beach.",
  },
  {
    id: "p-2920",
    category: "jams",
    title: "Joint Preparation & Mobility Circle",
    location: "South Beach Training Ground",
    src: "/photos/IMG_2920.webp",
    description: "Warmup routine focusing on ankle and wrist conditioning for safe parkour impact absorption.",
  },
  {
    id: "p-2902",
    category: "jams",
    title: "Calf & Hamstring Stretch Sequence",
    location: "Calicut Seaside Plaza",
    src: "/photos/IMG_2902.webp",
    description: "Movers practicing deep stretching and flexibility drills before vault sessions.",
  },
  {
    id: "img-3117",
    category: "parkour",
    title: "Sunset Landing Mechanics",
    location: "South Beach Promenade",
    src: "/images/IMG_3117.PNG",
    description: "Traceurs mastering silent drop absorption and safety rolls on stone promenades.",
  },
  {
    id: "img-3116",
    category: "jams",
    title: "Seaside Squad Flow",
    location: "Kozhikode Coastal Horizon",
    src: "/images/IMG_3116.PNG",
    description: "Full Team NARA crew silhouetted at dusk along the Malabar coastline.",
  },
  {
    id: "img-3115",
    category: "parkour",
    title: "Cat Pass & Wall Preparation",
    location: "South Beach Breakwater",
    src: "/images/IMG_3115.PNG",
    description: "Athlete preparing kong vault and cat leap mechanics on concrete urban obstacles.",
  },
];
