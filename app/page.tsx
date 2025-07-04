import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import AboutSection from '@/components/AboutSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import FocusAreasSection from '@/components/FocusAreasSection';
import SecondHeroSection from '@/components/SecondHeroSection';
import GetInvolvedSection from '@/components/GetInvolvedSection';
import Footer from '@/components/Footer';
import {
  TreePine,
  Users,
  BookOpen,
  Handshake,
  Building2,
  Scale,
} from "lucide-react";

export const metadata = {
  title: 'Eco Voice Foundation | Wildlife Conservation & Habitat Restoration',
  description: 'Eco Voice Foundation is dedicated to protecting threatened species and habitats in South India through research, restoration, community engagement, and policy advisory.',
};

export default function Home() {
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
  ];

  const items = [
    'Fund a species tracking program',
    'Sponsor habitat restoration',
    'Join our research initiatives',
    'Become a community partner',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatisticsSection />
      <AboutSection>
        <GalleryCarousel />
      </AboutSection>
      <FocusAreasSection cards={cards} />
      <SecondHeroSection />
      <GetInvolvedSection items={items} />
      <Footer />
    </div>
  );
}