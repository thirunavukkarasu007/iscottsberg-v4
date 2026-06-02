"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="iScottsberg"
              width={190}
              height={65}
              priority
              className="hover:opacity-90 transition"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition duration-300 ${
                  pathname === item.href
                    ? "text-cyan-600"
                    : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                {item.name}

                {pathname === item.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-cyan-600 rounded-full" />
                )}
              </Link>
            ))}

          </div>

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden lg:block">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-cyan-500/30">
              Schedule Meeting
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-slate-700"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">

          <div className="px-6 py-6 flex flex-col gap-5">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`font-medium transition ${
                  pathname === item.href
                    ? "text-cyan-600"
                    : "text-slate-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold mt-2 transition">
                Schedule Meeting
              </button>
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}