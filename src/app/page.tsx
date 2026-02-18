import { Hero, OneDashboard, FeaturesTabs, Scheduling, Performance } from "@/components/sections";
import { Hero, OneDashboard, Faq, FooterCta, StartedInMins } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <OneDashboard />
      <FeaturesTabs />
      <Scheduling />
      <Performance />
      <StartedInMins />
      <Faq />
      <FooterCta />
    </main>
  );
}
