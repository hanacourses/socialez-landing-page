import Link from "next/link";

const LOGO_SRC = "/socialez_logo.png";

export const Logo = (props: { height?: number }) => {
  const { height = 10 } = props;
  return (
    <Link
      href="/"
      className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
      aria-label="SocialEZ home"
    >
      <img
        src={LOGO_SRC}
        alt="SocialEZ"

        className={`h-${height} w-auto object-contain`}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}
