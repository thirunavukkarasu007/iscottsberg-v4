import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold mb-6">
            About iScottsberg
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Engineering Excellence
            <br />
            Beyond Integration
          </h1>

          <p className="text-slate-300 text-xl max-w-4xl leading-relaxed">
            iScottsberg delivers integrated engineering,
            automation, commissioning and digital
            transformation solutions for mission-critical
            industries worldwide.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Who We Are
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              iScottsberg is a global engineering solutions
              company specializing in facility integration,
              industrial automation, commissioning and
              digital transformation.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              Our expertise spans Semiconductor,
              Data Centers, Pharmaceutical,
              Manufacturing and Industrial sectors,
              helping clients achieve operational
              excellence and long-term growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-slate-900 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-5xl font-bold">100+</h3>
                <p className="mt-2">Projects Delivered</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold">10+</h3>
                <p className="mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold">3</h3>
                <p className="mt-2">Global Locations</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold">24/7</h3>
                <p className="mt-2">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-relaxed">
              To deliver world-class engineering,
              automation and digital solutions that
              enhance operational efficiency,
              reliability and sustainability.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Our Vision
            </h2>

            <p className="text-slate-600 leading-relaxed">
              To become a globally trusted engineering
              partner known for innovation,
              excellence and successful project delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Excellence
              </h3>
              <p className="text-slate-600">
                Delivering quality in every project.
              </p>
            </div>

            <div className="border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Innovation
              </h3>
              <p className="text-slate-600">
                Driving progress through technology.
              </p>
            </div>

            <div className="border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Integrity
              </h3>
              <p className="text-slate-600">
                Building trust through transparency.
              </p>
            </div>

            <div className="border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Collaboration
              </h3>
              <p className="text-slate-600">
                Working together for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}