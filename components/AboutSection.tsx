import { MapPin } from "lucide-react";

export default function AboutSection({ children }: { children?: React.ReactNode }) {
  return (
    <section id="about" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className='flex flex-row justify-between'>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 max-w-xl">
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
          {children}
        </div>
      </div>
    </section>
  );
} 