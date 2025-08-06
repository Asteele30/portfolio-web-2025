"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface UnderConstructionSectionProps {
  sectionName?: string;
}

export default function UnderConstructionSection({ sectionName = "This Section" }: UnderConstructionSectionProps) {
  return (
    <section className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-8 max-w-3xl mx-auto my-12 shadow-lg text-center">
      <h2 className="text-3xl font-extrabold text-black mb-4">
        {sectionName} - Under Construction
      </h2>
      <p className="text-black max-w-xl mx-auto mb-6">
        I am working hard on this section! Come back soon to see it complete. :)
      </p>
    </section>
  );
}
