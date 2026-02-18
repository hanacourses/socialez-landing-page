import { Hero, OneDashboard, FeaturesTabs, Scheduling, Performance,Faq,FooterCta,StartedInMins } from "@/components/sections";

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
