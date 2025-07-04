import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/BVVS3xNg/bg.png')`
        }}
      />
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
  );
} 