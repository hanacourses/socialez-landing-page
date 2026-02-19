import { WHO_IT_FOR } from "@/constant/whoitfor";

const WhoItFor = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col bg-white py-12">
            <span className="text-sm text-slate-900 font-semibold bg-[#7CE1FF] text-center my-4 py-2 px-4 rounded-full w-fit mx-auto">Who It’s For</span>
            <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-4">
                <h2 className="text-5xl font-bold text-black">Built for creators, businesses, and teams</h2>
                <p className="text-md text-gray-500 max-w-2xl text-center">Whether you're building your brand or managing multiple accounts, SocialEZ keeps everything organized.</p>
                <div className="w-full flex justify-center items-center gap-8 py-4">
                    {WHO_IT_FOR.map((item) => {
                        return (
                            <div key={item.title} className="w-full h-full min-h-28 flex flex-col justify-start items-start gap-2 bg-[#E3EBFF] p-4 rounded-3xl">
                                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                                <p className="text-md text-gray-500">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default WhoItFor;