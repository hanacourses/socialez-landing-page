const CtaButton = () => {
    return (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
                href="#signup"
                className="inline-flex h-13 min-w-[140px] items-center justify-center rounded-xl bg-[#0172F4] px-6 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#0172F4]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
                Start free
            </a>
            <a
                href="#book-call"
                className="inline-flex h-13 min-w-[220px] items-center justify-center rounded-xl font-semibold bg-white px-6 text-base text-gray-900  transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
                Book a 15-minute setup call
            </a>
        </div>
    );
}

export default CtaButton;