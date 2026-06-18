import Image from "next/image";

const industries = [
  {
    title: "Semiconductor",
    image: "/industries/semiconductor.jpg",
  },
  {
    title: "Data Centers",
    image: "/industries/datacenter.jpg",
  },
  {
    title: "Pharmaceutical",
    image: "/industries/pharma.jpg",
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-20">

          <p className="uppercase tracking-[5px] text-slate-500 text-sm mb-6">
            Industries
          </p>

          <h2 className="text-5xl md:text-6xl font-light text-slate-900">
            Industries
            <br />
            We Serve
          </h2>

        </div>

        <div className="space-y-12">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden"
            >

              <div className="relative h-[500px]">

                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-12 left-12">

                  <h3 className="text-white text-5xl md:text-6xl font-light">
                    {industry.title}
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}