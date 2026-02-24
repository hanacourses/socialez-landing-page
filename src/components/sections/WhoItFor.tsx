import SectionBadge from "@/components/UI/SectionBadge";
import { WHO_IT_FOR } from "@/constant/whoitfor";

const WhoItFor = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col bg-white py-12 px-4">
            <SectionBadge variant="cyan" className="my-4 mx-auto">Who It’s For</SectionBadge>
            <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-4">
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">Built for creators, businesses, and teams</h2>
                <p className="text-base text-gray-500 max-w-2xl text-center">Whether you're building your brand or managing multiple accounts, SocialEZ keeps everything organized.</p>
                <div className="w-full flex justify-center items-center gap-8 py-4 lg:flex-row flex-col">
                    {WHO_IT_FOR.map((item) => {
                        return (
                            <div key={item.title} className="w-full h-full min-h-28 flex flex-col justify-start items-start gap-2 bg-card p-4 rounded-3xl">
                                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                                <p className="text-sm leading-snug text-gray-500">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default WhoItFor;