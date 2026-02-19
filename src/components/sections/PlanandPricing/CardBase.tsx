"use client";
import Button from "@/components/UI/Button";

interface CardBaseProps {
    title: string;
    price: number;
    className?: string;
    buttonText?: string;
    buttonVariant?: "primary" | "outline";
    buttonLink?: () => void;
    isMostPopular?: boolean;
    description: string;
    features?: string[];
    subFeature?: string[];
    subFeatureTitle?: string;
}
const CardBase = (props: CardBaseProps) => {
    const { title, price, className, buttonText, buttonVariant, buttonLink, isMostPopular = false, description, features = [], subFeature = [], subFeatureTitle = "" } = props;
    const FeatureIcons = () => (
            <svg className="h-5 w-5 text-primary shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M6.98438 10.0011L8.9927 12.0177L13.0177 7.98438" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.95937 2.04063C9.53437 1.54896 10.4761 1.54896 11.0594 2.04063L12.3761 3.17396C12.6261 3.39063 13.0927 3.56563 13.4261 3.56563H14.8427C15.7261 3.56563 16.4511 4.29063 16.4511 5.17396V6.59063C16.4511 6.91563 16.6261 7.39063 16.8427 7.64063L17.9761 8.9573C18.4677 9.5323 18.4677 10.4739 17.9761 11.0573L16.8427 12.3739C16.6261 12.6239 16.4511 13.0906 16.4511 13.4239V14.8406C16.4511 15.7239 15.7261 16.4489 14.8427 16.4489H13.4261C13.1011 16.4489 12.6261 16.6239 12.3761 16.8406L11.0594 17.9739C10.4844 18.4656 9.5427 18.4656 8.95937 17.9739L7.6427 16.8406C7.3927 16.6239 6.92603 16.4489 6.5927 16.4489H5.15103C4.2677 16.4489 3.5427 15.7239 3.5427 14.8406V13.4156C3.5427 13.0906 3.3677 12.6239 3.15937 12.3739L2.03437 11.0489C1.55104 10.4739 1.55104 9.54063 2.03437 8.96563L3.15937 7.64063C3.3677 7.39063 3.5427 6.92397 3.5427 6.59897V5.16563C3.5427 4.2823 4.2677 3.5573 5.15103 3.5573H6.5927C6.9177 3.5573 7.3927 3.3823 7.6427 3.16563L8.95937 2.04063Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    const SubFeatureIcons = () => (
            <svg className="h-5 w-5 text-primary shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M8.425 8.43945L10 5.00195L11.5625 8.43945L15 10.002L11.5625 11.577L10 15.002L8.425 11.577L5 10.002L8.425 8.43945Z" fill="currentColor" />
            </svg>
        );
    return (
        <div className={`${className} w-full h-full min-h-[650px] bg-white p-8 rounded-2xl relative overflow-hidden ${isMostPopular ? "border-2 border-primary" : ""}`}>
            {isMostPopular && <span className="text-xs font-medium absolute top-0 right-0 bg-primary text-white px-4 py-2 rounded-bl-full">MOST POPULAR</span>}
            <div className="w-full flex justify-start items-start gap-2 flex-col">
                <span className="text-4xl font-normal text-slate-900">{title}</span>
                <h4 className="text-4xl font-bold text-slate-900">${price} <span className="text-sm font-normal text-slate-500">/ mo</span></h4>
                <p className="text-md font-normal text-slate-800">{description}</p>
            </div>
            <Button className="py-6 w-full flex justify-center items-center" btnClassName="w-full shadow-lg" variant={buttonVariant || "primary"} onClick={buttonLink}>
                {buttonText}
            </Button>
            <ul className="flex flex-col justify-start items-start gap-4 border-b border-slate-200 pt-4 pb-4">
                {features.map((item, idx) => {
                    return (
                        <li className="flex justify-start items-center gap-2 text-slate-800 " key={idx}>
                            <FeatureIcons /> {item}
                        </li>
                    )
                })}

            </ul>
            <div className="flex flex-col justify-start items-start gap-3 py-3">
                <h5 className="text-md font-bold text-slate-800">{subFeatureTitle}</h5>
                {subFeature?.map((item, idx) => {
                    return (
                        <li className="flex justify-start items-center gap-2 text-slate-800 " key={idx}>
                            <SubFeatureIcons /> {item}
                        </li>
                    )
                })}
            </div>
        </div>
    );
}

export default CardBase;