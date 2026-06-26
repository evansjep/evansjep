"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/execution", label: "Execution" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <nav className="site-nav">
      <Link href="/" className="site-nav__brand">
        {siteConfig.name}
      </Link>

      <div className="site-nav__links">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`site-nav__link ${
                isActive ? "site-nav__link--active" : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
