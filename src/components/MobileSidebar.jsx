import React, { useEffect } from "react";
import { X } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; 

const MobileSidebar = ({
  isOpen,
  navLinks,
  activeLink,
  setActiveLink,
  onClose,
}) => {

     // ✅ Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Background overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar container (top dropdown style) */}
      <div
        className={`absolute pt-4  top-0 left-0 w-full bg-[#F5F8E9] shadow-xl flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between px-4 py-4  border-b border-gray-200">
          {/* <h2 className="text-lg font-semibold tracking-tight text-gray-800">Menu</h2> */}
          <img src="/images/profilepic.png" alt="" className="h-12" />
          <button
            onClick={onClose}
            className="p-2 rounded-full transition"
          >
            <X size={40} className="text-gray-800 bg-[#C2DE3A] rounded-full p-2" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-3 py-6 px-3 flex-grow overflow-y-auto">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.download ? { download: true } : {})}
                className={`block px-4 py-2 text-base font-medium rounded-xl transition border-b border-gray-200 ${
                  link.isButton
                    ? ""
                    : activeLink === link.href
                    ? " text-gray-900 "
                    : "text-gray-700   hover:text-gray-900 "
                }`}
                onClick={() => {
                  if (!link.download) {
                    setActiveLink(link.href);
                  }
                  onClose();
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Footer with theme toggle */}
        <div className="p-6 border-gray-200">
          <div className="flex items-center gap-2">
            <h1 className="tracking-tight">Switch Themes</h1>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
