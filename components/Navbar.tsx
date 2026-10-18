"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#03152E]/95 backdrop-blur-md">

      <div className="mx-auto flex h-16 md:h-20 max-w-[1600px] items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Armstrong Surfacing Ltd"
            width={500}
            height={141}
            priority
            className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-sm font-semibold text-white xl:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/sectors">Sectors</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Desktop Contact Section */}
        <div className="hidden items-center gap-6 xl:flex">

          <div className="text-right text-white">
            <p className="text-sm font-semibold">
              <a
                href="tel:02892648270"
                className="font-bold text-white hover:text-blue-400"
                >
                028 9264 8270
              </a>
            </p>

            <p className="text-xs text-slate-300">
              <a
                href="mailto:enquiries@armstrong-surfacing.co.uk"
                className="hover:text-blue-400"
                >
                enquiries@armstrong-surfacing.co.uk
              </a>        
            </p>

            <p className="text-xs text-slate-300">
              Lisburn, BT28 3RG
            </p>
          </div>

          <Link
            href="/contact#enquiry-form"
            className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
            REQUEST A QUOTE
            </Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white xl:hidden"
        >
          {mobileMenuOpen ? (
            <X
                size={30}
                className="transition-all duration-300"
            />
          ) : (
            <Menu size={30} />
          )}
        </button>
        
      </div>

      {/* Mobile Navigation */}
      <div
        className={`xl:hidden overflow-hidden border-slate-700 bg-[#03152E]
            transition-all duration-300 ease-in-out
            ${
            mobileMenuOpen
                ? "max-h-screen border-t opacity-100"
                : "max-h-0 opacity-0"
            }`}
        >

            <nav className="flex flex-col px-6 py-6 text-white">

                <Link
                href="/"
                className="py-3 transition hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                Home
                </Link>

                <Link
                href="/about"
                className="py-3 transition hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                About Us
                </Link>

                <Link
                href="/services"
                className="py-3 transition hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                Services
                </Link>

                <Link
                href="/projects"
                className="py-3 transition hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                Projects
                </Link>

                <Link
                href="/sectors"
                className="py-3 transition hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                Sectors
                </Link>

                <Link
                href="/careers"
                className="py-3 transition hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                Careers
                </Link>

                <Link
                href="/news"
                className="py-3 transition hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                News
                </Link>

                <Link
                href="/contact"
                className="py-3 transition hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
                >
                Contact
                </Link>

                <Link
                href="/contact#enquiry-form"
                className="rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
                >
                REQUEST A QUOTE
                </Link>

            </nav>

        </div>

    </header>

  );
}