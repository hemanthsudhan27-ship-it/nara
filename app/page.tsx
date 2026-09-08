"use client";

import React from "react";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import WhatWeDo from "@/components/WhatWeDo";
import Community from "@/components/Community";
import WhoCanJoin from "@/components/WhoCanJoin";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import { useRegister } from "@/context/RegisterContext";

export default function Home() {
  const { openRegister } = useRegister();

  return (
    <>
      {/* 1. Hero Section */}
      <Hero onOpenRegister={() => openRegister()} />

      {/* 2. Outdoor Parkour Sessions (Light Section) */}
      <Sessions onOpenRegister={(batch) => openRegister(batch)} />

      {/* 3. What We Do (Dark 5-Column Grid) */}
      <WhatWeDo />

      {/* 4. A Community That Moves (Light Section) */}
      <Community />

      {/* 5. Who Can Join? (Split 3-Column Band) */}
      <WhoCanJoin onOpenRegister={(batch) => openRegister(batch)} />

      {/* 6. Gallery Section (Dark 5-Action Thumbnails) */}
      <Gallery />

      {/* 7. CTA Banner (Solid Orange Full-Width) */}
      <CtaBanner onOpenRegister={() => openRegister()} />
    </>
  );
}
