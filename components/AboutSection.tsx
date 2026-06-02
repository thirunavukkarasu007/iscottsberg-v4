export default function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-cyan-600 font-semibold uppercase tracking-[3px] mb-4">
              About iScottsberg
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Delivering Engineering Excellence Across Global Industries
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              iScottsberg provides integrated engineering,
              automation, commissioning and digital transformation
              solutions for mission-critical industries worldwide.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Our expertise spans Semiconductor, Data Centers,
              Pharmaceutical, Manufacturing and Industrial sectors,
              helping clients achieve operational excellence,
              reliability and sustainable growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-cyan-700 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-2 gap-8">

              <div>
                <h3 className="text-4xl font-bold">100+</h3>
                <p className="mt-2 text-slate-200">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="mt-2 text-slate-200">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">3</h3>
                <p className="mt-2 text-slate-200">
                  Global Locations
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="mt-2 text-slate-200">
                  Support
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}