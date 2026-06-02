import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openings = [
  {
    title: "Automation Engineer",
    location: "India",
    type: "Full Time",
    description:
      "Experience in PLC, SCADA, BMS and industrial automation systems.",
  },
  {
    title: "Electrical Design Engineer",
    location: "Singapore",
    type: "Full Time",
    description:
      "Design and engineering of power distribution and control systems.",
  },
  {
    title: "Commissioning Engineer",
    location: "Germany",
    type: "Full Time",
    description:
      "FAT, SAT, startup and operational readiness support for global projects.",
  },
  {
    title: "Project Engineer",
    location: "India",
    type: "Full Time",
    description:
      "Manage engineering projects and coordinate multidisciplinary teams.",
  },
];

export default function CareersPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold mb-6">
            Careers
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Build Your Future
            <br />
            With iScottsberg
          </h1>

          <p className="text-slate-300 text-xl max-w-4xl leading-relaxed">
            Join a team of passionate engineers, innovators and
            problem-solvers delivering world-class solutions
            across global industries.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Why Join iScottsberg?
            </h2>

            <p className="text-slate-600 text-lg">
              Grow your career with exciting global opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">🌎</div>
              <h3 className="text-2xl font-bold mb-4">
                Global Exposure
              </h3>
              <p className="text-slate-600">
                Work on international projects across multiple industries.
              </p>
            </div>

            <div className="border rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4">
                Career Growth
              </h3>
              <p className="text-slate-600">
                Continuous learning and professional development.
              </p>
            </div>

            <div className="border rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">
                Innovation Culture
              </h3>
              <p className="text-slate-600">
                Be part of cutting-edge engineering and digital transformation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Current Openings
            </h2>
          </div>

          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {job.title}
                    </h3>

                    <p className="text-slate-600 mb-3">
                      {job.description}
                    </p>

                    <div className="flex gap-4 text-sm">
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                        {job.location}
                      </span>

                      <span className="bg-slate-100 px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <button className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700">
                    Apply Now
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8">
            Don't See A Suitable Role?
          </h2>

          <p className="text-slate-300 text-lg mb-10">
            Send us your resume and we will contact you when
            suitable opportunities become available.
          </p>

          <button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-semibold transition">
            Submit Resume
          </button>

        </div>
      </section>

      <Footer />
    </main>
  );
}