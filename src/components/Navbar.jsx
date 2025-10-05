"use client"; // Needed because of useState, useEffect, and framer-motion

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileSidebar from "./MobileSidebar";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"; 

const Navbar = () => { 
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("#");
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Track hash changes for in-page navigation (like #about)
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#");
      setIsOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonial", label: "Testimonial" },
    {
      href: "/Erhokhon_George_CV.pdf",
      label: "Resume",
      download: true,
      isButton: true,
    },
  ];

  return (
    <>
      {/* Dark/Light Mode Button */}
      <div className="md:fixed z-[500] top-[0%] py-7 right-[5%] hidden md:flex">
        <ThemeToggle />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-10 top-0 py-4 sm:py-0 backdrop-blur-s">
        <div className="py-4 relative">
          {/* Toggle Button for Mobile */}
          <div className="md:hidden flex justify-between item-center mx-3">
            <img src="/images/mobilehead.png" alt="" className="h-12" />
            <button
              className="text-black bg-[#C2DE3A] rounded-xl p-2 dark:text-black focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <MenuIcon size={30} />
            </button>
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar
            isOpen={isOpen}
            navLinks={navLinks}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            onClose={() => setIsOpen(false)}
          />

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="container xs:w-[85%] sm:w-[70%] md:w-[80%] lg:w-[80%] mx-auto grid place-items-center">
              <div className="bg-[#C2DE3A] rounded-full px-6 py-3">
                <ul className="flex items-center gap-1 relative">
                  {navLinks.map((link) => {
                    const isActive =
                      (link.label === "Home" &&
                        pathname === "/" &&
                        activeLink === "#") ||
                      activeLink === link.href;

                    return (
                      <li key={link.label} className="relative">
                        {link.label === "Home" ? (
                          pathname === "/" ? (
                            // ✅ On homepage → act as anchor
                            <a
                              href="#"
                              className="relative block px-3 py-1 text-base font-medium tracking-tight text-gray-900"
                              onClick={() => setActiveLink("#")}
                            >
                              {isActive && (
                                <motion.div
                                  layoutId="activeBubble"
                                  className="absolute inset-0 rounded-full bg-black/20"
                                  transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                  }}
                                />
                              )}
                              <span className="relative z-10">Home</span>
                            </a>
                          ) : (
                            // ✅ On another page → go back home
                            <Link
                              href="/"
                              className="relative block px-3 py-1 text-base font-medium tracking-tight text-gray-900"
                            >
                              Home
                            </Link>
                          )
                        ) : link.isButton ? (
                          <a
                            href={link.href}
                            download={link.download}
                            className="bg-white text-gray-900 rounded-full hover:bg-gray-100 px-6 py-2"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <a
                            href={link.href}
                            className="relative block px-3 py-1 text-base font-medium tracking-tight text-gray-900"
                            onClick={() => setActiveLink(link.href)}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="activeBubble"
                                className="absolute inset-0 rounded-full bg-black/20"
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                              />
                            )}
                            <span className="relative z-10">{link.label}</span>
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
