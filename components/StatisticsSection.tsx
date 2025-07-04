import { Card, CardContent } from "@/components/ui/card";

export default function StatisticsSection() {
  return (
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
              <div className="text-white/70 w-1/2 font-light">communities actively engaged</div>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-white text-left p-6 hover:bg-primary/80 transition-colors">
            <CardContent className="p-0 flex flex-col items-start justify-between h-full ">
              <div className="text-5xl font-semibold">295</div>
              <div className="text-white/70 w-7/12  font-light">research publications in peer-reviewed journals</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 