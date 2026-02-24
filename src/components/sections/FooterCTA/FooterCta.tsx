import CtaButton from "@/components/UI/CtaButton";

export default function FooterCta() {
    return (
        <section
            className="px-4 py-2 sm:px-4 md:py-4 bg-white"
            aria-labelledby="footer-cta-heading"
        >
            <div className="mx-auto max-w-7xl rounded-4xl bg-surface">
                <div className="md:px-6 px-4 md:py-12 py-8 text-center sm:px-10 sm:py-14 flex flex-col items-center justify-center gap-2">
                    <h2
                        id="footer-cta-heading"
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
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
