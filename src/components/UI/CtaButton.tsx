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
      <Button href={DEFAULT_PRIMARY.href} variant="primary">
        {DEFAULT_PRIMARY.label}
      </Button>
      <Button href={DEFAULT_SECONDARY.href} variant="outline">
        {DEFAULT_SECONDARY.label}
      </Button>
    </div>
  );
};

export default CtaButton;
