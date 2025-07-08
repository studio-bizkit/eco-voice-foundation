import Image from "next/image";

export default function SecondHeroSection() {
  return (
    <section className="relative h-[600px] md:h-[600px] sm:min-h-[400px] py-16 sm:py-20">
      <Image
        src="/images/middle-bg.png"
        alt="Background"
        fill
        className="absolute inset-0 object-cover object-center z-10"
        priority
      />
         <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 flex h-full items-center justify-center">
        <h2 className="text-2xl sm:text-3xl leading-tight">
          Whether you&apos;re a government agency, corporation, researcher, or concerned citizen,
          <span className='font-bold'> there&apos;s a role for you in India&apos;s conservation story.</span>
        </h2>
      </div>
    </section>
  );
} 