export default function CoreCapabilities() {
  const capabilities = [
    {
      title: "Facility Integration",
      desc: "End-to-end engineering integration for mission-critical facilities.",
    },
    {
      title: "Utility & Process Systems",
      desc: "Process piping, gas, chemical and utility infrastructure solutions.",
    },
    {
      title: "HVAC & Exhaust",
      desc: "High-performance HVAC and exhaust systems for controlled environments.",
    },
    {
      title: "Cleanroom Integration",
      desc: "Advanced cleanroom engineering for semiconductor and pharmaceutical facilities.",
    },
    {
      title: "Automation & Digitalization",
      desc: "SCADA, PLC, BMS, EMS and smart digital engineering solutions.",
    },
    {
      title: "Startup & Operational Support",
      desc: "Commissioning, validation and operational readiness services.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-20">
          <p className="uppercase tracking-[4px] text-cyan-600 font-semibold mb-4">
            Core Capabilities
          </p>

          <h2 className="text-5xl font-light text-slate-900 leading-tight">
            Engineering Solutions Across The Entire Project Lifecycle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-slate-200">

          {capabilities.map((item) => (
            <div
              key={item.title}
              className="p-10 border border-slate-200 hover:bg-slate-50 transition"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}