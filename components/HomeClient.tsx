"use client";

import React from "react";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import WhatWeDo from "@/components/WhatWeDo";
import Community from "@/components/Community";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";
import { useRegister } from "@/context/RegisterContext";

export default function HomeClient() {
  const { openRegister } = useRegister();

  return (
    <>
      {/* 1. Hero Section — inspire, hook, one CTA */}
      <Hero onOpenRegister={() => openRegister()} />

      {/* 2. Sessions Preview — schedule hook, no fee wall yet */}
      <Sessions onOpenRegister={(batch) => openRegister(batch)} />

      {/* 3. What We Do — 5-discipline credibility grid */}
      <WhatWeDo />

      {/* 4. Community Story — short version, build connection */}
      <Community />

      {/* 6. Gallery Sneakpeek — aspiration, inspire action */}
      <Gallery />

      {/* 7. Final CTA Banner */}
      <CtaBanner onOpenRegister={() => openRegister()} />
    </>
  );
}
