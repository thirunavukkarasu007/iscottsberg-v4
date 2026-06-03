export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Global Presence",
      description:
        "Strategically positioned across Singapore, India and Germany to support global clients.",
    },
    {
      number: "02",
      title: "Mission-Critical Expertise",
      description:
        "Deep experience in Semiconductor, Data Centers, Pharmaceutical and Industrial sectors.",
    },
    {
      number: "03",
      title: "End-to-End Delivery",
      description:
        "From engineering design and integration to commissioning and long-term support.",
    },
    {
      number: "04",
      title: "24/7 Engineering Support",
      description:
        "Dedicated technical teams ensuring reliability, uptime and operational excellence.",
    },
  ];

  return (
    <section className="py-28 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold">
            Engineering Confidence
            <br />
            Across Global Industries
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
            Combining engineering excellence, global reach and
            mission-critical expertise to deliver reliable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item) => (
            <div
              key={item.number}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition duration-300"
            >
              <div className="text-5xl font-bold text-cyan-500 mb-6">
                {item.number}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}