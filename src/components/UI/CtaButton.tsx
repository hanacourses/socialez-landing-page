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

  if (href != null) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button href={href} variant={variant} className="">
          {children}
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
      <Button href={DEFAULT_PRIMARY.href} className="w-full lg:w-auto" btnClassName="w-full lg:w-auto max-w-[250px]!" variant="primary">
        {DEFAULT_PRIMARY.label}
      </Button>
      <Button
        variant="outline"
        btnClassName="border-none! font-semibold! text-black! cursor-pointer!"
        dataCalLink="bhaskar-socialez/setup-call"
        dataCalNamespace="setup-call"
        dataCalConfig='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      >
        {DEFAULT_SECONDARY.label}
      </Button>
    </div>
  );
};

export default CtaButton;
