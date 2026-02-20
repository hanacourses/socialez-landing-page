import { PLAN_AND_PRICING } from "@/constant/planAndPricing";
import CardBase from "./CardBase";
import Link from "next/link";

const PlanAndPricing = () => {
    const ProcessIcon = () => (
        <svg className="h-6 w-6 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M8.25159 12H15.7516M15.7516 12L12.7516 9M15.7516 12L12.7516 15M3.00159 12C3.00159 7.029 7.03059 3 12.0016 3C16.9726 3 21.0016 7.029 21.0016 12C21.0016 16.971 16.9726 21 12.0016 21C7.03059 21 3.00159 16.971 3.00159 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    return (
        <div className="w-full bg-white py-12 flex flex-col justify-center items-center gap-2">
            <span className="text-sm text-slate-900 font-medium bg-yellow text-center p-2 px-4 rounded-full w-fit mx-auto">Pricing</span>
            <h2 className="text-5xl font-bold text-black text-center py-2.5">Start small. Grow easily.</h2>
            <div className="w-full max-w-7xl mx-auto flex justify-center items-center gap-2 flex-col bg-surface p-8 rounded-3xl">
                <div className="flex justify-center items-center gap-8 w-full">
                    {PLAN_AND_PRICING.map((item, idx) => {
                        return (
                            <CardBase key={idx} buttonText={item.buttonText} buttonVariant={item.buttonVariant as "primary" | "outline"} title={item.title} price={item.price} description={item.description} features={item.features} subFeature={item.subFeature} subFeatureTitle={item.subFeatureTitle} isMostPopular={item.isMostPopular} />
                        )
                    })}
                </div>
                <Link href="/pricing" className="text-md font-medium text-primary flex justify-center items-center gap-2 pt-6 group">Book a 15-minute setup call <span className="group-hover:translate-x-1 transition-all duration-300"><ProcessIcon /></span></Link>
            </div>
        </div>
    );
}

export default PlanAndPricing;