export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              iScottsberg
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Engineering Excellence Beyond Integration.
              Delivering world-class engineering,
              automation, commissioning and digital
              transformation solutions across global industries.
            </p>

            <div className="mt-6 space-y-2 text-slate-400 text-sm">
              <p>📧 sales@iscottsberg.com</p>
              <p>📞 +91 8072168268</p>

              <a
                href="https://iscottsberg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-cyan-400 transition"
              >
                🌐 www.iscottsberg.com
              </a>

              <a
                href="https://www.linkedin.com/company/iscottsberg-solutions-global/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyan-400 hover:text-cyan-300 transition"
              >
                🔗 LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li>Facility Integration</li>
              <li>Automation</li>
              <li>Digitalization</li>
              <li>HVAC & Exhaust Systems</li>
              <li>Electrical Engineering</li>
              <li>Commissioning</li>
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="text-xl font-semibold mb-5">
              🏢 Headquarters
            </h4>

            <div className="text-slate-400 text-sm leading-relaxed">
              <p className="font-semibold text-white mb-2">
                🇸🇬 Singapore
              </p>

              <p>
                iSCOTTSBERG SOLUTIONS PTE. LTD.
              </p>

              <p className="mt-3">
                21 Woodlands Close,
                <br />
                #03-30 Primz BizHub,
                <br />
                Singapore 737854
              </p>

              <p className="mt-3">
                📧 kannan@iscottsberg.com
              </p>

              <p>
                📞 +65 83395353
              </p>

              <p>
                ☎ +65 66491920
              </p>
            </div>
          </div>

          {/* Global Operations */}
          <div>
            <h4 className="text-xl font-semibold mb-5">
              🌍 Global Operations
            </h4>

            <div className="text-slate-400 text-sm leading-relaxed">

              {/* India */}
              <div className="mb-6">
                <p className="font-semibold text-white mb-2">
                  🇮🇳 India
                </p>

                <p>
                  iSCOTTSBERG SOLUTIONS INDIA PRIVATE LIMITED
                </p>

                <p className="mt-2">
                  C/o T-Hub Foundation,
                  <br />
                  1/C, 83/1, Raidurg Panmaktha,
                  <br />
                  Near Hitech City,
                  <br />
                  Hyderabad, Telangana 500081,
                  <br />
                  India
                </p>
              </div>

              {/* Germany */}
              <div>
                <p className="font-semibold text-white mb-2">
                  🇩🇪 Germany
                </p>

                <p>
                  iScottsberg Solutions GmbH
                </p>

                <p className="mt-2">
                  Merzhausener Straße 12,
                  <br />
                  Schmitten 61389,
                  <br />
                  Germany
                </p>

                <p className="mt-2">
                  📧 sales@iscottsberg.com
                </p>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2026 iScottsberg. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm mt-4 md:mt-0">
            Engineering • Automation • Commissioning • Digital Transformation
          </p>
        </div>

      </div>
    </footer>
  );
}