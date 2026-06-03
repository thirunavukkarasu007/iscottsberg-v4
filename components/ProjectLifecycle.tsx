export default function ProjectLifecycle() {
  const steps = [
    "Consultation",
    "Engineering Design",
    "Implementation",
    "Testing & Commissioning",
    "Long-Term Support",
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-cyan-600 uppercase tracking-[4px] font-semibold mb-4">
            Delivery Process
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Project Delivery Lifecycle
          </h2>

        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={step}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-600 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}