interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "cyan" | "yellow" | "success" | "mint" | "yellow-subtle";
  className?: string;
  id?: string;
}

const VARIANT_CLASS = {
  primary: "bg-primary text-white",
  cyan: "bg-cyan text-gray-900",
  yellow: "bg-yellow text-slate-900",
  success: "bg-success text-white",
  mint: "bg-mint text-gray-900",
  "yellow-subtle": "bg-yellow/20 text-gray-900",
} as const;

const SectionBadge = (props: SectionBadgeProps) => {
  const { children, variant = "primary", className = "", id } = props;
  return (
    <span
      id={id}
      className={`inline-block rounded-full px-4 py-1.5 text-sm font-normal ${VARIANT_CLASS[variant]} ${className}`.trim()}
      aria-hidden={!id}
    >
      {children}
    </span>
  );
};

export default SectionBadge;
