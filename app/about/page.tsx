"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import CustomAccordion from "@/components/CustomAccordion";
import { useState } from "react";

const team = [
  { name: "Byju H", role: "President & Chief Executive Officer" },
  { name: "Manigandan Selvaraj", role: "Secretary & Scientist" },
  { name: "Manikandan S", role: "Vice President (Legal Affairs)" },
  { name: "Prabhakar S", role: "Treasurer" },
  { name: "Maitreyi H", role: "Associate Researcher" },
  { name: "Lakshmi R Nair", role: "Head Sustainability" },
];

export default function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto px-2 sm:px-4 pb-16">
        {/* Hero/Banner Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-10">
          <Image
            src="/images/impact.png"
            alt="Conservation in Action"
            width={1200}
            height={400}
            className="w-full h-48 sm:h-72 md:h-96 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="mb-8 sm:mb-12">
          <CustomAccordion />
        </div>
        {/* Team Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          The minds behind EVF
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 min-w-[320px]">
            {team.map((member, i) => (
              <Card
                key={i}
                className={`flex flex-col items-center p-4 sm:p-6 bg-white/80 transition-opacity duration-300 relative ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-30' : 'opacity-100'}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-28 h-28 sm:w-40 sm:h-40 mb-3 sm:mb-4 rounded-xl overflow-hidden">
                  <Image
                    src="/images/gallery/1.png"
                    alt={member.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-base sm:text-lg font-semibold text-center">
                  {member.name}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground text-center">
                  {member.role}
                </div>
                {/* Show description if hovered */}
                {hoveredIndex === i && (
                  <div className="absolute inset-0 bg-white/95 flex items-center justify-center p-2 sm:p-6 rounded-xl z-10 animate-fadeIn overflow-y-auto">
                    <span className="text-[10px] sm-text-[12px] text-gray-800 text-center">
                      A visionary ecologist and conservation leader is a driving force behind EVF’s mission, specializing in shorebird and vulture conservation. With a strong emphasis on community-driven conservation, his expertise shapes impactful field strategies that protect threatened species. An accomplished author and researcher, he has published more than 60 peer-reviewed articles and authored two influential books Valley of Hope - Moyar and Vultures and Matriarch, an autobiography of an elephant, showcasing his deep commitment to wildlife conservation. He serves as academic editor and reviewer on several international scientific journals on birds and ecology.
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
