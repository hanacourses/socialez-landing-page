import { Footer } from "@/components/layout";
import { Hero, OneDashboard, FeaturesTabs, Scheduling, Performance, Faq, FooterCta, StartedInMins, Conversations, PlanAndPricing } from "@/components/sections";

export default function Home() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <Hero />
      <OneDashboard />
      <FeaturesTabs />
      <Scheduling />
      <Performance />
      <Conversations />
      <PlanAndPricing />
      <StartedInMins />
      <Faq />
      <Footer />
    </main>
  );
}
