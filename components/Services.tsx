const services = [
  {
    icon: "🏭",
    title: "Facility Integration",
    description:
      "End-to-end facility integration solutions for mission-critical infrastructure and industrial environments.",
  },
  {
    icon: "⚙️",
    title: "Automation",
    description:
      "PLC, SCADA, BMS, EMS and industrial automation systems for smart operations.",
  },
  {
    icon: "💡",
    title: "Digitalization",
    description:
      "Digital transformation, analytics and intelligent engineering solutions.",
  },
  {
    icon: "🌬️",
    title: "HVAC & Exhaust",
    description:
      "High-performance HVAC and exhaust systems for controlled environments.",
  },
  {
    icon: "⚡",
    title: "Electrical Engineering",
    description:
      "Power distribution, switchgear, MCC and critical electrical infrastructure.",
  },
  {
    icon: "🚀",
    title: "Commissioning",
    description:
      "FAT, SAT, startup support and commissioning for reliable operations.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold uppercase tracking-[3px] mb-4">
            Our Services
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Core Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 text-cyan-600 font-semibold group-hover:translate-x-2 transition">
                Learn More →
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}