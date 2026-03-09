"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, MouseEvent } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "./constants";
import Button from "@/components/UI/Button";

const useActiveNavLink = () => {
  // Use "/" for initial state so server and client match (avoids hydration mismatch)
  const [activeHref, setActiveHref] = useState("/");

  useEffect(() => {
    setActiveHref("/");
    const updateActiveFromScroll = () => {
      // Check if we're at the top of the page (within 150px from top)
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY < 150) {
        setActiveHref("/");
        return;
      }

      const headerOffset = 120;
      const sections = NAV_LINKS.filter((l) => l.sectionId).map((l) => ({
        link: l,
        el: document.getElementById(l.sectionId!),
      }));

      // Check if hero section is visible at the top
      const heroSection = sections.find((s) => s.link.href === "/");
      if (heroSection?.el) {
        const heroTop = heroSection.el.getBoundingClientRect().top - headerOffset;
        // If hero section is still in the upper portion of viewport, prioritize it
        if (heroTop >= -100 && heroTop <= window.innerHeight * 0.3) {
          setActiveHref("/");
          return;
        }
      }

      const visible = sections
        .filter(({ el }) => el)
        .map(({ link, el }) => ({
          link,
          top: el!.getBoundingClientRect().top - headerOffset,
        }))
        .filter((v) => v.top <= window.innerHeight * 0.3)
        .sort((a, b) => b.top - a.top);

      if (visible.length > 0) {
        setActiveHref(visible[0].link.href);
      } else if (sections[0]?.link) {
        setActiveHref(sections[0].link.href);
      }
    };

    const observer = new IntersectionObserver(
      () => updateActiveFromScroll(),
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const timer = setTimeout(() => {
      NAV_LINKS.forEach(({ sectionId }) => {
        const el = sectionId ? document.getElementById(sectionId) : null;
        if (el) observer.observe(el);
      });
      updateActiveFromScroll();
    }, 100);

    // Add scroll event listener for more responsive updates (throttled)
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        updateActiveFromScroll();
        scrollTimeout = null;
      }, 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeHref;
};

const NavLink = ({
  label,
  href,
  sectionId,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive?: boolean;
  sectionId?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <li role="none">
    <Link
      href={href === "/" ? "/" : "#"}
      onClick={onClick}
      className={`text-md font-semibold transition-colors rounded px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${isActive
        ? "text-blue-600"
        : "text-gray-800 hover:text-blue-600"
        }`}
      role="menuitem"
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  </li>
);

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeHref = useActiveNavLink();

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (!el) return;

    const headerOffset = 120;
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const targetPosition = elementTop - headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavItemClick = useCallback(
    (href: string, sectionId?: string, closeMenu?: boolean) =>
      (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        if (closeMenu) {
          handleCloseMobileMenu();
        }

        if (href === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        scrollToSection(sectionId);
      },
    [handleCloseMobileMenu],
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseMobileMenu();
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, handleCloseMobileMenu]);

  return (
    <>
      <nav
        className="relative mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-6 rounded-2xl bg-white px-4 py-4.5 shadow-md ring-1 ring-black/5 sm:px-6"
        role="navigation"
        aria-label="Main navigation"
      >
        <Logo height={12} />

        {/* Desktop nav links - hidden on mobile */}
        <ul className="hidden items-center gap-8 lg:flex" role="menubar">
          {NAV_LINKS.map(({ label, href, sectionId }) => (
            <NavLink
              key={label}
              label={label}
              href={href}
              sectionId={sectionId}
              isActive={activeHref === href}
              onClick={handleNavItemClick(href, sectionId)}
            />
          ))}
        </ul>

        {/* Desktop Signup - hidden on mobile */}
        <Button
          href="https://app.socialez.com/register"
          className="hidden lg:inline-flex"
          btnClassName="font-semibold!"
          variant="primary"
        >
          Signup
        </Button>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={handleToggleMobileMenu}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 left-0 top-0 z-40 lg:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          onClick={handleCloseMobileMenu}
          className={`absolute inset-0 bg-black/50 transition-opacity ${isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          aria-label="Close menu"
          tabIndex={-1}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-xs flex-col gap-6 bg-white px-6 py-6 shadow-xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleCloseMobileMenu}
              className="flex size-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close menu"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-4" role="menubar">
            {NAV_LINKS.map(({ label, href, sectionId }) => (
              <NavLink
                key={label}
                label={label}
                href={href}
                isActive={activeHref === href}
                sectionId={sectionId}
                onClick={handleNavItemClick(href, sectionId, true)}
              />
            ))}
          </ul>
          <Link
            href="https://app.socialez.com/register"
            onClick={handleCloseMobileMenu}
            className="mt-4 shrink-0 rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Sign up"
          >
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};
