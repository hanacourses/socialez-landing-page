"use client";

interface ButtonProps {
  children?: React.ReactNode;
  content?: string;
  btnClassName?: string;
  className?: string;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  /** Cal.com: link slug (e.g. "username/event-type") */
  dataCalLink?: string;
  /** Cal.com: namespace matching init namespace */
  dataCalNamespace?: string;
  /** Cal.com: JSON config for layout etc. */
  dataCalConfig?: string;
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
    dataCalLink,
    dataCalNamespace,
    dataCalConfig,
  } = props;

  const combinedBtnClass = `${BASE_CLASS} ${VARIANT_CLASS[variant]} ${btnClassName}`.trim();
  const ariaLabel = typeof children === "string" ? children : content;

  if (dataCalLink != null && dataCalNamespace != null) {
    return (
      <div className={className}>
        <button
          type="button"
          className={combinedBtnClass}
          onClick={onClick}
          aria-label={ariaLabel}
          data-cal-link={dataCalLink}
          data-cal-namespace={dataCalNamespace}
          data-cal-config={dataCalConfig}
        >
          {children ?? content}
        </button>
      </div>
    );
  }

  if (href) {
    return (
      <div className={className}>
        <a
          href={href}
          className={combinedBtnClass}
          onClick={onClick}
          aria-label={ariaLabel}
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
        aria-label={ariaLabel}
      >
        {children ?? content}
      </button>
    </div>
  );
};

export default Button;
