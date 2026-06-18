import Image from "next/image";

const services = [
  "Facility Integration",
  "Automation",
  "Digitalization",
  "Electrical Engineering",
  "HVAC & Exhaust Systems",
  "Commissioning",
];

export default function Services() {
  return (
    <section className="bg-slate-950 text-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-12 gap-20">

          {/* Left Side */}

          <div className="lg:col-span-4">

            <p className="uppercase tracking-[5px] text-slate-400 text-sm mb-8">
              Services
            </p>

            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              What
              <br />
              We Do
            </h2>

          </div>

          {/* Right Side */}

          <div className="lg:col-span-8">

            <div className="border-t border-white/10">

              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center justify-between py-10 border-b border-white/10 group cursor-pointer"
                >
                  <h3 className="text-3xl md:text-4xl font-light group-hover:text-cyan-400 transition">
                    {service}
                  </h3>

                  <span className="text-2xl text-white/40 group-hover:text-cyan-400 transition">
                    →
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Image */}

        <div className="mt-24">

          <Image
            src="/services-banner.jpg"
            alt="Engineering Services"
            width={1600}
            height={900}
            className="w-full h-[650px] object-cover"
          />

        </div>

      </div>

    </section>
  );
}