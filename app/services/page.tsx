import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Facility Integration",
    icon: "🏭",
    description:
      "End-to-end facility integration solutions for mission-critical infrastructure and industrial environments.",
  },
  {
    title: "Automation",
    icon: "⚙️",
    description:
      "PLC, SCADA, BMS, EMS and industrial automation systems for smart operations.",
  },
  {
    title: "Digitalization",
    icon: "💡",
    description:
      "Digital transformation, analytics and intelligent engineering solutions.",
  },
  {
    title: "HVAC & Exhaust",
    icon: "🌬️",
    description:
      "Cleanroom-compatible HVAC and exhaust systems for critical facilities.",
  },
  {
    title: "Electrical Engineering",
    icon: "⚡",
    description:
      "Power distribution, MCC, ATS and switchgear engineering solutions.",
  },
  {
    title: "Commissioning",
    icon: "🚀",
    description:
      "FAT, SAT, startup support and operational readiness services.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold mb-6">
            Our Services
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Engineering Solutions
            <br />
            That Drive Results
          </h1>

          <p className="text-slate-300 text-xl max-w-4xl leading-relaxed">
            Delivering world-class engineering, automation,
            commissioning and digital transformation services
            across global mission-critical industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Core Capabilities
            </h2>

            <p className="text-slate-600 text-lg">
              Comprehensive engineering expertise under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <button className="text-cyan-600 font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Why Choose iScottsberg
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-4xl font-bold text-cyan-600">
                100+
              </h3>
              <p className="mt-3">Projects Delivered</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-4xl font-bold text-cyan-600">
                10+
              </h3>
              <p className="mt-3">Years Experience</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-4xl font-bold text-cyan-600">
                24/7
              </h3>
              <p className="mt-3">Technical Support</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <h3 className="text-4xl font-bold text-cyan-600">
                3
              </h3>
              <p className="mt-3">Global Locations</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8">
            Ready To Start Your Project?
          </h2>

          <p className="text-slate-300 text-lg mb-10">
            Connect with our engineering experts and discover
            how iScottsberg can accelerate your success.
          </p>

          <button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-semibold transition">
            Schedule Consultation
          </button>

        </div>
      </section>

      <Footer />
    </main>
  );
}