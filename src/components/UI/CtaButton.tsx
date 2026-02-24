"use client";

import Button from "@/components/UI/Button";

interface CtaButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  children?: React.ReactNode;
}

const DEFAULT_PRIMARY = { href: "#signup", label: "Start free" };
const DEFAULT_SECONDARY = { href: "#book-call", label: "Book a 15-minute setup call" };

const CtaButton = (props: CtaButtonProps) => {
  const { href, variant = "primary", children } = props;

  const fullWidthMobile = "w-full sm:w-auto";
  const containerClass = "flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4";

  if (href != null) {
    return (
      <div className={containerClass}>
        <Button href={href} variant={variant} btnClassName={fullWidthMobile}>
          {children}
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <Button
        href={DEFAULT_PRIMARY.href}
        className="w-full lg:w-auto"
        btnClassName="w-full lg:w-auto max-w-[250px]! font-semibold!"
        variant="primary"
      >
        {DEFAULT_PRIMARY.label}
      </Button>
      <Button
        variant="outline"
        dataCalLink="bhaskar-socialez/setup-call"
        dataCalNamespace="setup-call"
        dataCalConfig='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        btnClassName={`${fullWidthMobile} border-none! font-semibold! text-black! cursor-pointer!`}
      >
        {DEFAULT_SECONDARY.label}
      </Button>
    </div>
  );
};

export default CtaButton;
