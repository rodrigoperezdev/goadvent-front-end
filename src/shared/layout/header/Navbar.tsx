"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SearchContainer } from "@/features/search/components";

const navItems = [
  { href: "/destination", label: "Destination" },
  { href: "/activities", label: "Activities" },
  { href: "/specials", label: "Specials" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActiveRoute = (href: string) => pathname === href;

  return (
    <div className="fixed left-0 right-0 z-[12323] mx-auto flex w-[calc(100%-4rem)] items-center justify-between rounded-3xl bg-white/70 p-4 backdrop-blur-md xl:w-[calc(100%-12rem)] lg:w-[calc(100%-8rem)] md:w-[calc(100%-6rem)]">
      <Link
        href="/"
        className="relative z-[12324] shrink-0"
        onClick={closeMenu}
      >
        <Image
          src="/images/logo/emprise.svg"
          alt="Logo"
          className="h-auto w-32 md:w-[10.3125rem]"
          width={0}
          height={0}
          priority
        />
      </Link>

      <div
        className={[
          "fixed right-0 top-0 z-10 flex min-h-[89vh] w-full flex-col bg-white shadow-lg transition-transform duration-300 md:static md:min-h-0 md:w-auto md:flex-1 md:flex-row md.items-center md:bg-transparent md:shadow-none",
          isOpen ? "translate-y-0" : "-translate-y-[202%]",
          "md:translate-y-0",
        ].join(" ")}
      >
        <nav className="relative w-full md:flex md:flex-1 md:items-center">
          <div className="flex w-full flex-col pt-32 pl-8 md:flex-row md:items-center md:justify-between md:pt-0 md:pl-0">
            <ul className="flex flex-col gap-8 md:flex-row md:items-center md:gap-0 md:pl-[6.69rem]">
              {navItems.map((item) => {
                const active = isActiveRoute(item.href);

                return (
                  <li key={item.href} className="md:mb-0">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={[
                        "relative inline-block text-base transition-colors",
                        "md:pr-16",
                        active
                          ? "font-medium after:absolute after:bottom-[3px] after:left-0 after:-z-10 after:h-[7px] after:w-[70px] after:bg-yellow-300"
                          : "",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 md:mt-0">
              <SearchContainer />
            </div>
          </div>
        </nav>

        <div className="block pl-8 pb-8 md:flex md:items-center md:gap-10 md:pl-0 md:pb-0">
          <Link
            href="/login"
            onClick={closeMenu}
            className="mr-5 inline-block md:mr-0"
          >
            Login
          </Link>

          <Link
            href="/signup"
            onClick={closeMenu}
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Sign up
          </Link>
        </div>
      </div>

      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={toggleMenu}
        className="relative z-[2423432324] ml-4 block h-10 w-10 lg:hidden"
      >
        <span className="absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-black transition-transform duration-300">
          <span
            className={[
              "absolute left-0 top-[-8px] block h-0.5 w-6 bg-black transition-all duration-300",
              isOpen ? "top-0 rotate-90" : "",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-0 top-[8px] block h-0.5 w-6 bg-black transition-all duration-300",
              isOpen ? "top-0 opacity-0" : "",
            ].join(" ")}
          />
        </span>

        <span
          className={[
            "absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-black transition-transform duration-300",
            isOpen ? "-rotate-45" : "",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
