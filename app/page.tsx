import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedWorldwide from "@/components/TrustedWorldwide";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      <Navbar />

      <Hero />

      <TrustedWorldwide />

      <AboutSection />

      <Services />

      <Industries />

      <FeaturedProjects />

      <Footer />

    </main>
  );
}