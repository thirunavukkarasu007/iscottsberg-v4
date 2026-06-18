import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero-engineering.jpg"
        alt="iScottsberg"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-8 w-full">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[6px] text-white/70 text-sm mb-8">
              Singapore • India • Germany
            </p>

            <h1 className="text-white font-light leading-[0.95] tracking-tight text-6xl md:text-8xl">
              Engineering
              <br />
              Excellence
              <br />
              Beyond
              <br />
              Integration
            </h1>

            <div className="w-32 h-[1px] bg-white/30 my-10" />

            <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
              Delivering engineering, automation and commissioning
              solutions for semiconductor, data center and advanced
              manufacturing facilities.
            </p>

            <div className="mt-12">

              <Link href="/contact">
                <button className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition duration-500">
                  Contact Us
                </button>
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60">

        <div className="flex flex-col items-center">

          <div className="w-[1px] h-12 bg-white/30"></div>

          <p className="uppercase tracking-[4px] text-xs mt-3">
            Scroll
          </p>

        </div>

      </div>

    </section>
  );
}