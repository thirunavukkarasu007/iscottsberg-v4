import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/hero-engineering.jpg"
        alt="iScottsberg Engineering Solutions"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="min-h-screen flex items-center">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
                Singapore Headquartered • Global Engineering Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Engineering Excellence
              <br />
              For Mission-Critical
              <span className="text-cyan-400"> Industries</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-3xl">
              Delivering world-class engineering, automation,
              commissioning and digital transformation solutions
              across Semiconductor, Data Centers, Pharmaceutical,
              Manufacturing and Industrial sectors worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link href="/services">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg">
                  Explore Services
                </button>
              </Link>

              <Link href="/contact">
                <button className="border border-white/30 hover:bg-white hover:text-slate-950 text-white px-8 py-4 rounded-xl font-semibold transition">
                  Schedule Meeting
                </button>
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/10">

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  100+
                </h3>
                <p className="text-slate-300 mt-2">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  15+
                </h3>
                <p className="text-slate-300 mt-2">
                  Countries Served
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  3
                </h3>
                <p className="text-slate-300 mt-2">
                  Global Offices
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  24/7
                </h3>
                <p className="text-slate-300 mt-2">
                  Engineering Support
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}