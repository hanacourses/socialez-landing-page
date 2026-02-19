import CtaButton from "@/components/UI/CtaButton";

export default function FooterCta() {
    return (
        <section
            className="px-4 py-12 sm:px-6 md:py-16 bg-white"
            aria-labelledby="footer-cta-heading"
        >
            <div className="mx-auto max-w-7xl rounded-4xl bg-surface">
                <div className="px-6 py-12 text-center sm:px-10 sm:py-14 md:px-14 md:py-16 flex flex-col items-center justify-center gap-2">
                    <h2
                        id="footer-cta-heading"
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
                    >
                        Start using SocialEZ today.
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
                        Create, schedule, track, and reply — all from one simple workspace.
                    </p>
                    <CtaButton />
                </div>
            </div>
        </section>
    );
}
