import Image from "next/image";

export default function LeadershipMessage() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-cyan-600 uppercase tracking-[4px] font-semibold mb-4">
              Leadership Message
            </p>

            <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-8">
              Engineering Beyond
              <br />
              Expectations
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">

              <p>
                At iScottsberg, engineering is more than
                infrastructure and systems. It is about
                creating reliable foundations that help
                businesses grow, innovate and succeed.
              </p>

              <p>
                Our commitment is to deliver world-class
                engineering, automation, commissioning and
                digital transformation solutions that create
                long-term value for our customers.
              </p>

              <p>
                With our presence across Singapore,
                India and Germany, we continue to support
                mission-critical industries with excellence,
                integrity and innovation.
              </p>

            </div>

            <div className="mt-10">

              <h3 className="text-2xl font-bold text-slate-900">
                Kannan
              </h3>

              <p className="text-cyan-600 font-semibold">
                Founder & Managing Director
              </p>

            </div>

          </div>

          <div className="relative">

            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-3xl blur-3xl opacity-20"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/kannan-founder.jpg"
                alt="Founder"
                width={700}
                height={800}
                className="w-full h-auto object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}