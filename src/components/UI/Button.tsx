"use client";

interface ButtonProps {
  children?: React.ReactNode;
  content?: string;
  btnClassName?: string;
  className?: string;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
}

const BASE_CLASS =
  "inline-flex h-13 min-w-[140px] items-center justify-center rounded-xl px-6 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const VARIANT_CLASS = {
  primary: "bg-primary text-white shadow-sm hover:bg-primary/80",
  outline:
    "bg-white text-primary border-2 border-primary hover:bg-gray-50",
} as const;

const Button = (props: ButtonProps) => {
  const {
    children,
    content,
    btnClassName = "",
    className = "",
    variant = "primary",
    href,
    onClick = () => {},
  } = props;

  const combinedBtnClass = `${BASE_CLASS} ${VARIANT_CLASS[variant]} ${btnClassName}`.trim();

  if (href) {
    return (
      <div className={className}>
        <a
          href={href}
          className={combinedBtnClass}
          onClick={onClick}
          aria-label={typeof children === "string" ? children : content}
        >
          {children ?? content}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <button
        type="button"
        className={combinedBtnClass}
        onClick={onClick}
        aria-label={typeof children === "string" ? children : content}
      >
        {children ?? content}
      </button>
    </div>
  );
};

export default Button;
