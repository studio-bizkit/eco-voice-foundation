import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ImpactPage() {
  const projects = [
    {
      number: "01",
      title: "Project Soar: Vulture Safe Zones",
      status: "Ongoing | Partnership with Tamil Nadu Forest Department",
      description: (
        <p className="text-sm">
          <span className="font-semibold">Challenge:</span> Diclofenac poisoning decimated local vulture populations by 97%{" "}
          <span className="font-semibold">Solution:</span> Established 500 sq km veterinary drug-free zones across three districts{" "}
          <span className="font-semibold">Impact:</span> 40% increase in vulture sightings, 12 active nesting sites restored.
        </p>
      ),
    },
    {
      number: "02",
      title: "Community Awareness Programs",
      status: "2020-Present | 6 Villages, Tamil Nadu and Karnataka",
      description: (
        <p className="text-sm">
          <span className="font-semibold">Challenge:</span> Deforestation threatening endemic bird species{" "}
          <span className="font-semibold">Solution:</span> Engaged 500 families in native tree planting and sustainable harvesting{" "}
          <span className="font-semibold">Impact:</span> 2,000 hectares restored, 67 bird species returned, alternative income for 200 families.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 max-w-7xl mx-auto px-4 pb-16">
        {/* Hero/Banner Image */}
        <div className="relative rounded-2xl overflow-hidden mb-10">
          <Image
            src="/images/impact.png"
            alt="Conservation in Action"
            width={1200}
            height={400}
            className="w-full h-96 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:space-x-12 mb-12 justify-between">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 md:w-1/4 leading-tight">
            Conservation in Action
          </h1>
          <p className="md:w-1/2 text- text-base text-muted-foreground">
            Our conservation efforts are directed towards protecting threatened species and habitats through wildlife research, education and awareness, and collaborations with local communities and stakeholders.
          </p>
        </div>
        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-start md:space-x-8">
              <div className="md:w-1/2 w-full mb-4 md:mb-0">
                <div className="rounded-xl bg-primary/80 w-full h-72 flex items-center justify-center">
                  {/* Placeholder for project image */}
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <Card className="p-6 bg-transparent shadow-none border-none">
                  <span className="block text-xl font-semibold mb-2">{project.number}</span>
                  <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
                  <p className="text-sm text-muted-foreground mb-1">{project.status}</p>
                  {project.description}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
