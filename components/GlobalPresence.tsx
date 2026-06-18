export default function GlobalPresence() {
  return (
    <section className="py-32 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold mb-4">
            Global Presence
          </p>

          <h2 className="text-5xl font-light">
            Delivering Projects Across Continents
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 text-lg">
            Strategically positioned across Asia and Europe to support
            mission-critical engineering, automation and infrastructure projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-slate-800 p-10 rounded-2xl hover:border-cyan-500 transition">
            <div className="text-cyan-400 text-5xl font-bold mb-6">
              SG
            </div>

            <h3 className="text-3xl font-light mb-4">
              Singapore
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Global Headquarters leading engineering,
              automation and digital transformation initiatives
              across international markets.
            </p>
          </div>

          <div className="border border-slate-800 p-10 rounded-2xl hover:border-cyan-500 transition">
            <div className="text-cyan-400 text-5xl font-bold mb-6">
              DE
            </div>

            <h3 className="text-3xl font-light mb-4">
              Germany
            </h3>

            <p className="text-slate-400 leading-relaxed">
              European operations supporting advanced engineering,
              cleanroom technologies and industrial transformation projects.
            </p>
          </div>

          <div className="border border-slate-800 p-10 rounded-2xl hover:border-cyan-500 transition">
            <div className="text-cyan-400 text-5xl font-bold mb-6">
              IN
            </div>

            <h3 className="text-3xl font-light mb-4">
              India
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Engineering and project delivery center supporting
              industrial, semiconductor and mission-critical infrastructure.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}