"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from "@/components/ui/badge";
import {
  TreePine,
  Users,
  BookOpen,
  Handshake,
  Building2,
  Scale,
  ChevronLeft,
  ChevronRight,
  MapPin
} from "lucide-react";
import Image from 'next/image';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "/images/gallery/1.png",
    "/images/gallery/2.png",
    "https://images.pexels.com/photos/7656717/pexels-photo-7656717.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const cards = [
    {
      icon: <BookOpen className="h-4 w-4 text-primary" />,
      title: 'Research and Conservation',
      desc: 'We lead comprehensive species recovery initiatives, from breeding programs to safe zone establishment. Our work focuses on critically endangered species like the White-rumped vultures, etc.',
    },
    {
      icon: <TreePine className="h-4 w-4 text-primary" />,
      title: 'Restoration',
      desc: 'Nature conservation through ecosystem rehabilitation creates ideal habitats for wildlife to thrive. We help restore degraded forests, grasslands, and wetlands using native species and traditional ecological knowledge.',
    },
    {
      icon: <Users className="h-4 w-4 text-primary" />,
      title: 'Community Engagement',
      desc: 'Local communities are conservation\'s backbone. We develop livelihood programs, conduct awareness campaigns, and train local wildlife guardians to ensure long-term protection.',
    },
    {
      icon: <Building2 className="h-4 w-4 text-primary" />,
      title: 'Corporate Partnerships',
      desc: 'Help companies achieve meaningful environmental impact through science-based conservation projects.',
    },
    {
      icon: <Scale className="h-4 w-4 text-primary" />,
      title: 'Policy and Government Advisory',
      desc: 'We advise state and national governments on wildlife protection policies, protected area management, and human-wildlife conflict resolution.',
    },
  ]

  const items = [
    'Fund a species tracking program',
    'Sponsor habitat restoration',
    'Join our research initiatives',
    'Become a community partner',
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="relative w-[200px] h-[36px]">
                <Image
                  src="/images/logo.png"
                  alt="Eco Voice Foundation Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-xs text-secondary hover:text-primary">
              <a href="#focus-areas" className=" transition-colors ">FOCUS AREAS</a>
              <a href="#centers" className=" transition-colors ">CENTERS</a>
              <a href="#impact" className=" transition-colors ">IMPACT</a>
              <a href="#about" className=" transition-colors ">ABOUT US</a>
              <Button className="border h-0 border-primary hover:bg-primary bg-transparent hover:text-white text-primary text-xs rounded-full py-3">
                DONATE NOW
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.ibb.co/BVVS3xNg/bg.png')`
          }}
        >

        </div>
        <div className="relative z-10 text-center text-white max-w-5xl px-4 flex flex-col gap-10 items-center -mt-44">
          <h1 className="text-5xl md:text-5xl leading-tight text-primary font-medium">
            Together, we are dedicated to protecting threatened species and habitats
          </h1>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80 text-white px-8 py-4 text-lg font-regular rounded-full max-w-xs"
          >
            Partner with us
          </Button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-48">
            <Card className="bg-secondary text-white text-left p-6 hover:bg-primary/80 transition-colors">
              <CardContent className="p-0 flex flex-col items-start justify-between h-full ">
                <div className="text-5xl font-semibold">295</div>
                <div className="text-white/70 w-2/3 font-light">endangered species under active conservation</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary text-white text-left p-6 hover:bg-primary/80 transition-colors">
              <CardContent className="p-0 flex flex-col items-start justify-between h-full ">
                <div className="text-5xl font-semibold">295</div>
                <div className="text-white/70 w-2/3 font-light">communities actively engaged</div>
              </CardContent>
            </Card>
            <Card className="bg-secondary text-white text-left p-6 hover:bg-primary/80 transition-colors">
              <CardContent className="p-0 flex flex-col items-start justify-between h-full ">
                <div className="text-5xl font-semibold">295</div>
                <div className="text-white/70 w-2/3 font-light">research publications in peer-reviewed journals</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

          <div className='flex flex-row justify-between'>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 max-w-xl">
              Based near Mudumalai Tiger Reserve, serving the biodiversity corridors of South India
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md text-right">
              Specializing in wildlife conservation and habitat restoration across South India, we partner with communities, governments, and researchers to rebuild degraded ecosystems.
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading + Location */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div className="lg:max-w-3xl">
                <h3 className="text-sm text-black/60 mb-2">Live Activities</h3>
                <p className="text-black max-w-sm font-semibold">
                  Rescuing and rehabilitating injured wildlife to return them to their natural habitats
                </p>
              </div>
              <div className="flex flex-col items-start text-sm text-gray-500 pr-2">
                <div className='flex items-center text-black justify-center gap-1 font-semibold'>
                  <span>Bandipur</span>
                  <MapPin className="h-3 w-3" />
                </div>
                <span>Karnataka, IN</span>
              </div>
            </div>

            {/* Carousel with Chevrons */}
            <div className="flex items-end justify-end gap-12">
              {/* Chevron buttons */}
              <div className="flex flex-row justify-center items-center gap-4">
                <button
                  disabled={currentImageIndex === 0}
                  onClick={prevImage}
                  className="bg-white border border-gray-300 hover:bg-gray-100 p-2 rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-primary hover:bg-primary text-white p-2 rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable carousel */}
              <div className="relative w-full overflow-hidden max-h-[500px] rounded-xl">
                <div
                  className="flex transition-transform duration-500 rounded-xl"
                  style={{
                    transform: `translateX(-${currentImageIndex * 66.66}%)`, // 66.66% shifts one full + half
                  }}
                >
                  {galleryImages.map((src, index) => (
                    <div
                      key={index}
                      className="min-w-[66.66%] pr-4"
                    >
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="rounded-xl w-full h-full object-cover max-h-[500px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section >

      {/* Focus Areas Section */}
      < section id="focus-areas" className="py-16 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="cursor-pointer bg-secondary text-white rounded-xl">
              <CardContent className="p-5 items-start justify-start h-full">
                <div className="flex items-end justify-start h-full">
                  <h3 className="text-3xl">Our <br /> Focus Areas</h3>
                </div>
              </CardContent>
            </Card>
            {cards.map((card, i) => (
              <div key={i} className="group [perspective:1000px] cursor-pointer">
                <div className="relative h-64 w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Front Face */}
                  <div
                    className="absolute inset-0 bg-white rounded-xl p-5 border"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex flex-col items-start justify-between h-full">
                      <div className="p-2 bg-primary/20 rounded-lg mb-4">
                        {card.icon}
                      </div>
                      <h3 className="text-md font-semibold">{card.title}</h3>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute inset-0 bg-white rounded-xl p-5 overflow-hidden flex flex-col justify-between border"
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                  >
                    <h3 className="text-md font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm leading-snug">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section >

      {/* Second Hero Section */}
      < section className="relative py-24" >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url('https://i.ibb.co/8gSZxmDq/middle-bg.png')`
          }}
        >
          <div className="absolute inset-0 bg-black/70 "></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-3xl mb-6 leading-tight">
            Whether you're a government agency, corporation, researcher, or concerned citizen, there's a role for you in India's conservation story.
          </h2>
        </div>
      </section >

      {/* Get Involved Section */}
      < section id="impact" className="py-16 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Make an Impact? Get Involved
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((title, i) => (
              <div key={i} className="text-left flex flex-col items-start justify-start gap-2">
                <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <div className="w-2/3">
                  <h3 className="text-lg  text-secondary">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-secondary text-white py-16" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/images/logo.png" alt="Eco Voice Foundation Logo" width={200} height={36} className="h-8 w-8" />
              </div>
              <p className="text-gray-300 mb-4">Voice For Species</p>
              <p className="text-gray-400 text-sm mb-6">
                Dedicated to protecting threatened species and habitats through research, restoration, and community engagement.
              </p>
              <Button className="bg-transparent hover:bg-primary/80 rounded-full ">
                Donate now
              </Button>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Eco Voice Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer >
    </div >
  );
}