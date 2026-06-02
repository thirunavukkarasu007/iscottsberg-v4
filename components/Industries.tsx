const industries = [
  {
    title: "Semiconductor",
    description:
      "Advanced engineering and integration solutions for semiconductor manufacturing facilities.",
  },
  {
    title: "Data Centers",
    description:
      "Reliable infrastructure, automation and commissioning for mission-critical data centers.",
  },
  {
    title: "Pharmaceutical",
    description:
      "Engineering solutions supporting GMP compliance, cleanrooms and critical operations.",
  },
  {
    title: "Manufacturing",
    description:
      "Industrial automation and operational excellence for modern manufacturing plants.",
  },
  {
    title: "Electronics",
    description:
      "Facility engineering and digital transformation for electronics production environments.",
  },
  {
    title: "Infrastructure",
    description:
      "Integrated engineering solutions supporting large-scale infrastructure projects.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-600 font-semibold uppercase tracking-[3px] mb-4">
            Industries
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Industries We Serve
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Delivering engineering excellence across global mission-critical industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-2xl font-bold mb-6">
                {industry.title.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {industry.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {industry.description}
              </p>

              <div className="mt-6 text-cyan-600 font-semibold">
                Explore Industry →
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}