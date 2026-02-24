"use client";

import React, { useState } from "react";
import SectionBadge from "@/components/UI/SectionBadge";

const FAQ_ITEMS = [
    {
        id: "what-is-socialez",
        question: "What is SocialEZ?",
        answer:
            "SocialEZ is an AI-powered social media management platform that helps you create, schedule, publish, analyze, and reply to social media content from one dashboard.",
    },
    {
        id: "ai-assist",
        question: "How does AI Assist work?",
        answer:
            "AI Assist works from the brand details you provide.You add your brand name, industry, tone of voice, and audience.Zee then helps generate captions, creatives, and hashtags aligned with your brand voice.",
    },
    {
        id: "technical-skills",
        question: "Do I need technical skills to use SocialEZ?",
        answer:
            "No. SocialEZ is designed to be simple and intuitive. You can connect your accounts, set up your brand, and start posting in minutes.",
    },
    {
        id: "platforms",
        question: "What platforms does SocialEZ support?",
        answer:
            "You can connect:Instagram, Facebook, LinkedIn, X (Twitter), Pinterest, and Google My Business. All managed from one dashboard.",
    },
    {
        id: "ai-credits",
        question: "What are AI credits?",
        answer:
            "AI credits are used when generating or improving content with AI Assist. Each plan includes a set number of credits. You can upgrade your plan anytime if you need more.",
    },
    {
        id: "multiple-accounts",
        question: "Can I manage multiple clients?",
        answer:
            "Yes. The Standard and Enterprise plans allow multiple accounts and users. Enterprise includes white-label and advanced controls for agencies.",
    },
    {
        id: "setup-time",
        question: "How long does setup take?",
        answer:
            "Most users connect their accounts and set up their brand in under 10 minutes. If you prefer assistance, you can book a 15-minute setup call and we’ll guide you.",
    },
    {
        id: "data-security",
        question: " Is my data secure?",
        answer:
            "Yes. SocialEZ uses secure authentication and encrypted connections to protect your data and connected accounts.",
    },

] as const;

function ChevronDown({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

export default function Faq() {
    const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

    return (
        <section
            id="faq"
            className="w-full  mx-auto bg-white flex justify-center items-center py-2 lg:py-16 p-4"
            aria-labelledby="faq-heading"
        >
            <div className="bg-linear-to-b from-faq via-faq to-white px-4 sm:px-18 md:py-24 max-w-7xl rounded-[50px]"
            >
                <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:gap-12 md:grid md:grid-cols-2 md:items-star py-4">
                    {/* Left column: heading and copy */}
                    <div className="max-w-xl">
                        <SectionBadge variant="primary" className="shadow-sm" id="faq-heading">
                            FAQs
                        </SectionBadge>
                        <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Questions?
                            <br />
                            We&apos;re Glad You Asked.
                        </h2>
                        <p className="mt-4 text-base text-slate-700 sm:text-base">
                            Simplify social planning, streamline collaboration, and boost
                            productivity for your team with SocialEZ.
                        </p>
                    </div>

                    {/* Right column: accordion */}
                    <div className="rounded-2xl bg-transparent p-2 ">
                        <ul role="list" className="divide-y divide-slate-200">
                            {FAQ_ITEMS.map(({ id, question, answer }, index) => {
                                const isOpen = openId === id;
                                const isFirst = index === 0;

                                return (
                                    <li key={id} className={isFirst ? "rounded-t-2xl" : ""}>
                                        <button
                                            type="button"
                                            onClick={() => setOpenId(isOpen ? null : id)}
                                            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors duration-150 cursor-pointer"
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-answer-${id}`}
                                            id={`faq-question-${id}`}
                                        >
                                            <span className="text-sm font-semibold text-slate-900 sm:text-base">
                                                {question}
                                            </span>
                                            <span
                                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${isOpen
                                                    ? "bg-accent-dark text-white"
                                                    : "bg-primary text-white"
                                                    } ${isOpen ? "rotate-180" : ""}`}
                                                aria-hidden
                                            >
                                                <ChevronDown className="h-5 w-5" />
                                            </span>
                                        </button>

                                        <div
                                            id={`faq-answer-${id}`}
                                            role="region"
                                            aria-labelledby={`faq-question-${id}`}
                                            aria-hidden={!isOpen}
                                            className={`border-b border-slate-300 overflow-hidden text-sm text-slate-600 transition-[max-height] duration-200 ease-out sm:text-base ${isOpen ? "max-h-40 sm:max-h-48" : "max-h-0"
                                                }`}
                                        >
                                            <p className="px-6 pb-4 pt-1 text-sm">{answer}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
