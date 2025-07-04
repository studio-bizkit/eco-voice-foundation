import { Card, CardContent } from "@/components/ui/card";

export default function FocusAreasSection({ cards }: { cards: { icon: React.ReactNode; title: string; desc: string }[] }) {
  return (
    <section id="focus-areas" className="py-16 bg-gray-50">
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
                  <h3 className="text-md font-semibold mb-2 text-secondary">{card.title}</h3>
                  <p className="text-sm leading-snug">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 