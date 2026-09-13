"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface Slide {
  image: string;
  title: string;
  description: string;
  badge: string;
}

export const defaultSlides: Slide[] = [
  {
    image: "/photos/IMG_2282.webp",
    title: "Sea Wall Precision",
    description: "Explosive leaps and obstacle clearance on the Calicut coastline.",
    badge: "Parkour",
  },
  {
    image: "/photos/IMG_2899.webp",
    title: "Morning Squad Drills",
    description: "South Beach promenade lineup and spatial coordination.",
    badge: "Training",
  },
  {
    image: "/images/IMG_3116.PNG",
    title: "Sunset Beach Jam",
    description: "Athletes flowing together against the golden Arabian sea horizon.",
    badge: "Community",
  },
  {
    image: "/photos/IMG_2268.webp",
    title: "Sunrise Flow",
    description: "Patience, balance strides, and early morning movement clarity.",
    badge: "Freerunning",
  },
  {
    image: "/photos/IMG_2900.webp",
    title: "Mobility & Prep",
    description: "Functional conditioning, joint preparation, and safe landings.",
    badge: "Conditioning",
  },
  {
    image: "/photos/IMG_2920.webp",
    title: "Coastal Vaults",
    description: "Vaulting through urban obstacles along Calicut South Beach.",
    badge: "Vaults",
  },
  {
    image: "/images/IMG_3117.PNG",
    title: "Landing Mechanics",
    description: "Mastering body control and ground absorption on stone plazas.",
    badge: "Discipline",
  },
];

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 400) {
    return {
      distanceDivisor: 100,
      velocityDivisor: 450,
      sensitivity: 150,
      xMultiplier: 65,
      yMultiplier: 15,
      rotationMultiplier: 6,
      scaleReduction: 0.05,
    };
  }
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 90,
      yMultiplier: 20,
      rotationMultiplier: 8,
      scaleReduction: 0.06,
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 130,
      yMultiplier: 30,
      rotationMultiplier: 10,
      scaleReduction: 0.09,
    };
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 170,
    yMultiplier: 40,
    rotationMultiplier: 12,
    scaleReduction: 0.12,
  };
};

interface CarouselStackedProps {
  slides?: Slide[];
  className?: string;
}

const CarouselStacked = ({
  slides = defaultSlides,
  className = "",
}: CarouselStackedProps) => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  const [windowWidth, setWindowWidth] = React.useState(0);

  const total = slides.length;

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth]
  );

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full py-6 sm:py-10 bg-transparent overflow-hidden select-none",
        className
      )}
    >
      <div className="relative w-full max-w-7xl h-80 sm:h-[28rem] lg:h-[32rem] flex items-center justify-center">
        {/* Transparent Drag Surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing touch-pan-y"
        />

        {slides.map((slide, i) => (
          <Card
            key={i}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}
      </div>

      {/* Interactive Drag Hint */}
      <div className="flex items-center gap-2 mt-4 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
        <span>Drag or swipe cards horizontally to explore</span>
      </div>
    </div>
  );
};

interface CardProps {
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}

const Card = ({ slide, index, total, progress, config }: CardProps) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o) => 1 - Math.abs(o) * config.scaleReduction
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0]
  );
  const zIndex = useTransform(offset, (o) =>
    Math.round(100 - Math.abs(o) * 10)
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        y,
        scale,
        opacity,
        zIndex,
      }}
      className={cn(
        "absolute rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1C1C1C] border border-white/15 shadow-2xl group pointer-events-none",
        "w-40 h-56 xs:w-48 xs:h-64 sm:w-64 sm:h-88 lg:w-72 lg:h-[26rem]"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.image}
        alt={`${slide.title} - ${slide.description} | Team NARA Parkour Calicut`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
      />

      <motion.div
        style={{
          opacity: useTransform(
            offset,
            [-2, -0.5, 0, 0.5, 2],
            [0.5, 0.2, 0, 0.2, 0.5]
          ),
        }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      <Badge className="absolute top-2.5 right-2.5 sm:top-5 sm:right-5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-brand-orange text-white font-mono text-[9px] sm:text-xs font-bold uppercase tracking-widest shadow-md">
        {slide.badge}
      </Badge>

      <div className="absolute bottom-3.5 left-3 right-3 sm:bottom-6 sm:left-5 sm:right-5 text-white text-left pointer-events-none">
        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="text-sm xs:text-base sm:text-xl font-headline font-black uppercase leading-tight mb-1 text-white drop-shadow-md tracking-wider"
        >
          {slide.title}
        </motion.p>
        <motion.p
          style={{
            opacity: useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]),
          }}
          className="hidden sm:block text-xs text-neutral-300 line-clamp-2 font-medium"
        >
          {slide.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CarouselStacked;
