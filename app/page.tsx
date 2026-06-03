import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedWorldwide from "@/components/TrustedWorldwide";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectLifecycle from "@/components/ProjectLifecycle";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadershipMessage from "@/components/LeadershipMessage";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <Hero />

      {/* Global Presence Stats */}
      <TrustedWorldwide />

      {/* About Company */}
      <AboutSection />

      {/* Services */}
      <Services />

      {/* Industries */}
      <Industries />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Project Delivery Process */}
      <ProjectLifecycle />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Founder Message */}
      <LeadershipMessage />

      {/* Final CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />

    </main>
  );
}