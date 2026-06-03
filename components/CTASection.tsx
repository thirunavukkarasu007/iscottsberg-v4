import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-28 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-900 text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold leading-tight">
          Ready To Build
          <br />
          Your Next Engineering Project?
        </h2>

        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">
          Partner with iScottsberg for engineering,
          automation, commissioning and digital
          transformation solutions.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <Link href="/contact">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold">
              Contact Us
            </button>
          </Link>

          <Link href="/contact">
            <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-950 transition">
              Schedule Meeting
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}