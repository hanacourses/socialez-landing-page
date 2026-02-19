import Button from "../UI/Button";

const StartedInMins = () => {
    return (
        <div className="px-4 sm:px-6 md:py-2 bg-white">
            <div className="flex flex-col justify-center items-start gap-2 max-w-7xl mx-auto  pb-16">
                <h2 className="text-5xl font-bold text-black">Get started in minutes</h2>
                <div className="flex flex-col justify-start items-start gap-6 mt-4">
                    {['Connect Your Accounts', 'Add Your Brand Details', 'Start Creating and Scheduling'].map((item, idx) => {
                        return (
                            <div key={item} className="flex justify-start items-center gap-3">
                                <span className="text-sm w-8 h-8 p-2 rounded-full bg-primary text-white font-bold flex justify-center items-center">0{idx + 1}</span>
                                <h3 className="text-md text-slate-500">{item}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full bg-white rounded-2xl p-4 mt-4 flex justify-between items-start gap-2 shadow-sm border border-slate-100">
                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                        <h5 className="text-md font-bold text-slate-900">Need help?</h5>
                        <p className="text-sm text-slate-500">Book a 15-minute setup call and we'll talk you through it.</p>
                    </div>
                    <Button variant="primary" btnClassName="py-4 px-8" className="w-full flex justify-end items-center" content="Book Now" />
                </div>
            </div>
        </div>
    );
}

export default StartedInMins;