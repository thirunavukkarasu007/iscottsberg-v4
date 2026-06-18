import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreCapabilities from "@/components/CoreCapabilities";
import Industries from "@/components/Industries";
import GlobalPresence from "@/components/GlobalPresence";
import LeadershipMessage from "@/components/LeadershipMessage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <CoreCapabilities />

      <Industries />

      <GlobalPresence />

      <LeadershipMessage />

      <Footer />
    </main>
  );
}