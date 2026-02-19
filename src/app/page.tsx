import { Footer } from "@/components/layout";
import { Hero, OneDashboard, FeaturesTabs, Scheduling, Performance, Faq, FooterCta, StartedInMins, Conversations, PlanAndPricing, WhoItFor } from "@/components/sections";

export default function Home() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <Hero />
      <OneDashboard />
      <FeaturesTabs />
      <Scheduling />
      <Performance />
      <Conversations />
      <WhoItFor />
      <PlanAndPricing />
      <StartedInMins />
      <Faq />
      <FooterCta />
      <Footer />
    </main>
  );
}
