import { Hero, OneDashboard, Faq, FooterCta, StartedInMins, PlanAndPricing } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <OneDashboard />
      <PlanAndPricing />
      <StartedInMins />
      <Faq />
      <FooterCta />
    </main>
  );
}
