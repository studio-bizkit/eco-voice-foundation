"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  hideChevron?: boolean;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  children,
  isOpen,
  onToggle,
  hideChevron = false,
}) => {
  return (
    <div className="border-b border-gray-200 py-8">
      <div
        className="flex items-start justify-between cursor-pointer w-full"
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onToggle(); }}
      >
        {/* Two-column layout: title left, content right */}
        <div className="flex w-full">
          {/* Title column */}
          <div className="w-1/2 flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-0">
              {title}
            </h2>
          </div>
          {/* Content column */}
          <div className="w-1/2 pl-8 flex flex-col justify-start">
            <div 
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div 
                className={`text-gray-700 text-lg leading-relaxed transform transition-all duration-700 ease-in-out ${
                  isOpen ? 'translate-y-0' : '-translate-y-4'
                }`}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0">
          <span
            className={`p-2 rounded-full transition-all duration-500 ease-in-out ${
              hideChevron ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            <ChevronDown 
              className={`w-6 h-6 text-gray-600 transition-all duration-500 ease-in-out ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default function CustomAccordion() {
  const [openSection, setOpenSection] = useState<string | null>('who-are-we');

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const accordionData = [
    {
      id: 'who-are-we',
      title: 'Who are we?',
      content: (
        <div className="animate-fade-in">
          <p>
            Eco Voice Foundation (EVF) is a non-profit organization, home to a team of curious and committed changemakers. We are dedicated to the protection of threatened species and their habitats through science-driven conservation and grassroots collaboration. By empowering local communities and nurturing indigenous youth as future conservation leaders we bridge the gap between wildlife protection and sustainable development.
          </p>
        </div>
      )
    },
    {
      id: 'our-history',
      title: 'Our History',
      content: (
        <div className="animate-fade-in">
          <p>
            Founded with a vision to create lasting environmental impact, Eco Voice Foundation has grown from a small group of passionate conservationists to a recognized leader in community-based conservation. Our journey began with local wildlife protection initiatives and has expanded to encompass comprehensive ecosystem restoration and youth leadership development programs.
          </p>
        </div>
      )
    },
    {
      id: 'our-mission',
      title: 'Our Mission',
      content: (
        <div className="animate-fade-in">
          <p>
            Our mission is to protect and restore critical habitats while empowering communities to become stewards of their natural heritage. We work to create sustainable solutions that benefit both wildlife and local populations, ensuring that conservation efforts are economically viable and culturally appropriate for the communities we serve.
          </p>
        </div>
      )
    },
    {
      id: 'our-approach',
      title: 'Our Approach',
      content: (
        <div className="animate-fade-in">
          <p>
            We believe in collaborative conservation that combines scientific research with traditional knowledge. Our approach involves working directly with local communities, training indigenous youth as conservation leaders, and implementing evidence-based strategies that address both immediate threats and long-term sustainability challenges.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="mx-auto py-2">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
      
      <div className="space-y-0">
        {accordionData.map((section) => (
          <AccordionSection
            key={section.id}
            title={section.title}
            isOpen={openSection === section.id}
            onToggle={() => toggleSection(section.id)}
            hideChevron={openSection === section.id}
          >
            {section.content}
          </AccordionSection>
        ))}
      </div>
    </div>
  );
}