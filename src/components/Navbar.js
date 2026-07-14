"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MaterialIcon from "./MaterialIcon";

const LINKS = [
  { key: "home", label: "HOME", href: "/" },
  { key: "about", label: "ABOUT", href: "/about" },
  { key: "brands", label: "BRANDS", href: "/brands" },
  { key: "wholesale", label: "WHOLESALE", href: "/wholesale" },
  { key: "services", label: "SERVICES", href: "/services" },
];

function getActiveKey(pathname) {
  if (pathname === "/") return "home";
  const key = pathname.replace("/", "").split("/")[0];
  return key || "home";
}

function DesktopHeader() {
  const pathname = usePathname();
  const active = getActiveKey(pathname);
  return (
    <header className="hidden md:flex bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-50 h-20">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto">
        <Link
          href="/"
          className="flex items-center gap-3 font-headline-md text-headline-md font-bold tracking-tighter text-on-surface dark:text-inverse-on-surface"
        >
          <img
            src="/logo.png"
            alt="Zia Wholesale Logo"
            className="h-20 w-auto"
          />
        </Link>
        <nav className="flex gap-8 items-center">
          {LINKS.map((l) => {
            const isActive = l.key === active;
            return (
              <Link
                key={l.key}
                href={l.href}
                className={`font-label-bold text-label-bold uppercase transition-colors ${
                  isActive
                    ? "text-primary dark:text-primary-fixed border-b-2 border-primary pb-1"
                    : "text-on-surface-variant dark:text-outline-variant hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="sharp-gradient-btn px-6 py-3 text-white font-label-bold text-label-bold uppercase tracking-wider shadow-lg"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

function MobileBar({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="md:hidden bg-surface dark:bg-inverse-surface sticky top-0 z-50 border-b border-outline-variant h-16 flex items-center px-4">
        <div className="flex justify-between items-center w-full max-w-max-width mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline-sm text-headline-sm font-bold tracking-tighter text-on-surface"
          >
            <img
              src="/logo.png"
              alt="Zia Wholesale Logo"
              className="h-15 w-auto"
            />
          </Link>
          <button
            className="text-primary"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MaterialIcon name="menu" className="text-3xl" />
          </button>
        </div>
      </header>

      {/* Slide-in Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity ${menuOpen ? "" : "hidden"}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="absolute right-0 top-0 bottom-0 w-4/5 bg-surface-container-lowest p-6 flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="font-headline-sm text-headline-sm font-bold text-primary">
              MENU
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <MaterialIcon name="close" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {LINKS.map((l) => {
              const isActive = l.key === active;
              return (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-label-bold text-label-bold uppercase ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1 self-start"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-auto">
            <Link
              href="/wholesale"
              onClick={() => setMenuOpen(false)}
              className="sharp-gradient-btn w-full py-4 text-white font-label-bold tracking-widest text-sm uppercase block text-center shadow-lg"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileBottomNav() {
  const pathname = usePathname();
  const active = getActiveKey(pathname);
  const items = [
    { key: "home", label: "HOME", icon: "home", href: "/" },
    {
      key: "wholesale",
      label: "WHOLESALE",
      icon: "domain",
      href: "/wholesale",
    },
    { key: "services", label: "SERVICES", icon: "support", href: "/services" },
    { key: "contact", label: "CONTACT", icon: "call", href: "/contact" },
    { key: "about", label: "ABOUT", icon: "info", href: "/about" },
  ];
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-outline-variant h-20 flex items-center justify-around px-2">
      {items.map((it) => {
        const isActive = it.key === active;
        return (
          <Link
            key={it.key}
            href={it.href}
            className={`flex flex-col items-center gap-1 ${
              isActive ? "text-primary" : "text-on-surface-variant opacity-70"
            }`}
          >
            <MaterialIcon name={it.icon} fill={isActive ? 1 : 0} />
            <span className="font-label-bold text-[10px] uppercase">
              {it.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export default function Navbar() {
  return (
    <>
      <DesktopHeader />
      <MobileBar />
      <MobileBottomNav />
    </>
  );
}
