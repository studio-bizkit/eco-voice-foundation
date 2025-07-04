export default function SecondHeroSection() {
  return (
    <section className="relative h-[600px] md:h-[600px] sm:min-h-[400px] py-16 sm:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/8gSZxmDq/middle-bg.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 flex h-full items-center justify-center">
        <h2 className="text-2xl sm:text-3xl leading-tight">
          Whether you&apos;re a government agency, corporation, researcher, or concerned citizen,
          <span className='font-bold'>there&apos;s a role for you in India&apos;s conservation story.</span>
        </h2>
      </div>
    </section>
  );
} 