import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Semiconductor",
      description:
        "Advanced engineering, automation and facility integration solutions for semiconductor manufacturing facilities.",
    },
    {
      title: "Data Centers",
      description:
        "Mission-critical infrastructure, commissioning and operational excellence for modern data centers.",
    },
    {
      title: "Pharmaceutical",
      description:
        "Engineering solutions supporting GMP compliance, cleanroom environments and critical operations.",
    },
    {
      title: "Manufacturing",
      description:
        "Automation and digital transformation solutions improving productivity and efficiency.",
    },
    {
      title: "Infrastructure",
      description:
        "Integrated engineering and commissioning services for large-scale infrastructure projects.",
    },
    {
      title: "Industrial Facilities",
      description:
        "End-to-end engineering support for industrial plants and mission-critical facilities.",
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold mb-6">
            Industries
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Engineering Excellence
            <br />
            Across Global Industries
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl">
            Delivering innovative engineering, automation and digital
            transformation solutions across mission-critical industries
            worldwide.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Industries We Serve
            </h2>

            <p className="text-slate-600 text-lg">
              Supporting global industries with engineering expertise,
              innovation and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {industries.map((industry) => (
              <div
                key={industry.title}
                className="border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {industry.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}