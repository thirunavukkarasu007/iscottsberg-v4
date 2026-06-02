import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const projects = [
  {
    title: "Semiconductor Facility Integration",
    category: "Semiconductor",
    image: "/projects/semiconductor.jpg",
    description:
      "Complete facility integration, automation and commissioning for advanced semiconductor manufacturing facilities.",
  },
  {
    title: "Mission Critical Data Center",
    category: "Data Center",
    image: "/projects/datacenter.jpg",
    description:
      "Engineering, automation and operational readiness solutions for hyperscale data centers.",
  },
  {
    title: "Pharmaceutical Cleanroom Project",
    category: "Pharmaceutical",
    image: "/projects/pharma.jpg",
    description:
      "GMP-compliant cleanroom engineering, HVAC and process integration solutions.",
  },
  {
    title: "Industrial Automation Upgrade",
    category: "Manufacturing",
    image: "/projects/automation.jpg",
    description:
      "PLC, SCADA and digital transformation deployment for smart manufacturing operations.",
  },
  {
    title: "Energy Management System",
    category: "Infrastructure",
    image: "/projects/energy.jpg",
    description:
      "Integrated EMS platform for monitoring, optimization and sustainability initiatives.",
  },
  {
    title: "Commissioning & Startup Support",
    category: "Industrial",
    image: "/projects/commissioning.jpg",
    description:
      "End-to-end FAT, SAT, startup and operational readiness services.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold mb-6">
            Our Projects
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Delivering Excellence
            <br />
            Across Industries
          </h1>

          <p className="text-slate-300 text-xl max-w-4xl leading-relaxed">
            Explore some of the engineering, automation and digital
            transformation projects that define iScottsberg's commitment
            to excellence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Featured Projects
            </h2>

            <p className="text-slate-600 text-lg">
              Engineering success stories from mission-critical industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />

                <div className="p-8">

                  <span className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <button className="text-cyan-600 font-semibold hover:text-cyan-800 transition">
                    View Case Study →
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <h3 className="text-5xl font-bold text-cyan-600">100+</h3>
              <p className="mt-3">Projects Completed</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <h3 className="text-5xl font-bold text-cyan-600">50+</h3>
              <p className="mt-3">Global Clients</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <h3 className="text-5xl font-bold text-cyan-600">10+</h3>
              <p className="mt-3">Years Experience</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <h3 className="text-5xl font-bold text-cyan-600">24/7</h3>
              <p className="mt-3">Project Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8">
            Let's Deliver Your Next Success Story
          </h2>

          <p className="text-slate-300 text-lg mb-10">
            Partner with iScottsberg to transform ideas into
            high-performance engineering solutions.
          </p>

          <button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-semibold transition">
            Start a Project
          </button>

        </div>
      </section>

      <Footer />
    </main>
  );
}