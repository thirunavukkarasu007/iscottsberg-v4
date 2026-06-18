import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreCapabilities from "@/components/CoreCapabilities";
import Industries from "@/components/Industries";
import GlobalPresence from "@/components/GlobalPresence";
import ProjectLifecycle from "@/components/ProjectLifecycle";
import LeadershipMessage from "@/components/LeadershipMessage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <GlobalPresence />

      <CoreCapabilities />

      <ProjectLifecycle />

      <Industries />

      <LeadershipMessage />

      <Footer />

    </main>
  );
}