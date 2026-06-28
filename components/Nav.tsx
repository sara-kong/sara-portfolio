"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/writings", label: "writings" },
  { href: "/work", label: "work" },
  { href: "/play", label: "play" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white h-[82px] flex items-center justify-between px-20">
      <Link
        href="/"
        className="text-black text-xl font-medium tracking-[0.05em] hover:opacity-60 transition-opacity"
      >
        SARA KONG
      </Link>
      <div className="flex items-center gap-12">
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
    </nav>
  );
}
