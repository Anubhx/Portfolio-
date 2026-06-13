import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import HowIWork from "@/components/HowIWork";
import AboutSnapshot from "@/components/AboutSnapshot";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SelectedWork from "@/components/SelectedWork";
import DesignPhilosophy from "@/components/DesignPhilosophy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <HowIWork />
      <AboutSnapshot />
      <ExperienceTimeline />
      <SelectedWork />
      <DesignPhilosophy />
    </>
  );
}
