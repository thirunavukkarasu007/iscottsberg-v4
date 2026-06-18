import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* Left Content */}

          <div className="lg:col-span-5">

            <p className="uppercase tracking-[5px] text-slate-500 text-sm mb-8">
              About iScottsberg
            </p>

            <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight">
              Global Engineering
              <br />
              Expertise.
              <br />
              Local Execution.
            </h2>

          </div>

          {/* Right Content */}

          <div className="lg:col-span-7">

            <p className="text-2xl text-slate-700 leading-relaxed font-light">
              Founded in Singapore, iScottsberg delivers
              engineering, automation and commissioning
              solutions across Asia and Europe.
            </p>

            <p className="mt-8 text-lg text-slate-500 leading-relaxed max-w-3xl">
              With operations in Singapore, India and Germany,
              we support semiconductor, data center,
              pharmaceutical and industrial clients through
              every stage of the project lifecycle.
            </p>

          </div>

        </div>

        {/* Image Section */}

        <div className="mt-24">

          <div className="relative overflow-hidden">

            <Image
              src="/about-engineering.jpg"
              alt="Engineering"
              width={1600}
              height={900}
              className="w-full h-[650px] object-cover"
            />

          </div>

        </div>

        {/* Locations */}

        <div className="grid md:grid-cols-3 gap-12 mt-20 border-t border-slate-200 pt-16">

          <div>

            <p className="text-sm uppercase tracking-[3px] text-slate-500 mb-4">
              Headquarters
            </p>

            <h3 className="text-3xl font-light text-slate-900">
              Singapore
            </h3>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[3px] text-slate-500 mb-4">
              Operations
            </p>

            <h3 className="text-3xl font-light text-slate-900">
              India
            </h3>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[3px] text-slate-500 mb-4">
              Operations
            </p>

            <h3 className="text-3xl font-light text-slate-900">
              Germany
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}