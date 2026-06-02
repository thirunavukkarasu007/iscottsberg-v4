import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold mb-6">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Let's Build Something
            <br />
            Exceptional Together
          </h1>

          <p className="text-slate-300 text-xl max-w-4xl leading-relaxed">
            Get in touch with our engineering experts to discuss
            your project requirements, facility integration,
            automation or digital transformation initiatives.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-xl font-bold mb-2">
                  📍 Global Presence
                </h3>

                <p className="text-slate-600">
                  Singapore, Germany & India
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  📧 Email
                </h3>

                <p className="text-slate-600">
                  info@iscottsberg.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  📞 Phone
                </h3>

                <p className="text-slate-600">
                  +91 XXXXX XXXXX
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">
                  🕒 Business Hours
                </h3>

                <p className="text-slate-600">
                  Monday - Friday | 9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-lg">

            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-slate-300 rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-slate-300 rounded-xl p-4"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-slate-300 rounded-xl p-4"
              ></textarea>

              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 transition text-white px-8 py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}