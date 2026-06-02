import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Semiconductor",
    image: "/projects/semiconductor.jpg",
    description:
      "Advanced facility integration, automation and commissioning solutions for semiconductor manufacturing environments.",
  },
  {
    title: "Data Centers",
    image: "/projects/datacenter.jpg",
    description:
      "Mission-critical infrastructure engineering and automation solutions for modern data centers.",
  },
  {
    title: "Pharmaceutical",
    image: "/projects/pharma.jpg",
    description:
      "Cleanroom engineering, validation and facility integration supporting GMP compliance.",
  },
  {
    title: "Automation",
    image: "/projects/automation.jpg",
    description:
      "Industrial automation, SCADA, PLC and digital transformation projects for global industries.",
  },
  {
    title: "Energy",
    image: "/projects/energy.jpg",
    description:
      "Engineering solutions supporting sustainable energy and critical infrastructure operations.",
  },
  {
    title: "Commissioning",
    image: "/projects/commissioning.jpg",
    description:
      "FAT, SAT, startup assistance and commissioning support ensuring operational excellence.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-4">
            Featured Projects
          </p>

          <h2 className="text-5xl font-bold text-white">
            Engineering Success Stories
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Delivering mission-critical engineering, automation and
            commissioning projects across global industries.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition duration-500"
            >

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 text-cyan-400 font-semibold group-hover:translate-x-2 transition">
                  View Project →
                </div>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-14">

          <Link href="/projects">
            <button className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl text-white font-semibold transition">
              View All Projects
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}