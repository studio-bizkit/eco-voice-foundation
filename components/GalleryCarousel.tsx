"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryCarousel() {
  const galleryImages = [
    "/images/gallery/1.png",
    "/images/gallery/2.png",
    "https://images.pexels.com/photos/7656717/pexels-photo-7656717.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
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
            transform: `translateX(-${currentImageIndex * 66.66}%)`,
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
  );
} 