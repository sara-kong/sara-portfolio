"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/writings", label: "writings" },
  { href: "/work", label: "work" },
  { href: "/play", label: "play" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white h-[82px] flex items-center justify-between px-6 md:px-20">
        <Link
          href="/"
          className="text-black text-xl font-medium tracking-[0.05em] hover:opacity-60 transition-opacity"
        >
          SARA KONG
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-12">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-black text-xl font-medium hover:opacity-60 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[6px]"
        >
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 origin-center ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 origin-center ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col px-6 pt-[82px] pb-12 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8 mt-12">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-black text-3xl font-medium hover:opacity-60 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
