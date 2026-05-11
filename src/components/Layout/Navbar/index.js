"use client";

import { useState, useEffect } from "react";
import Logo from "./LogoComponent";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [openNavLink, setOpenNavLink] = useState(null);
  // const [openAction, setOpenAction] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    // setOpenNavLink((prev) => (prev === null ? prev : null));
    // setMenuOpen((prev) => (prev ? false : prev));
    setOpenDropdown((prev) => (prev ? false : prev));
  }, [pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
    // setOpenNavLink(null);
    // setOpenAction(null);
    setOpenDropdown(null);
  };
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (!navRef.current?.contains(e.target)) {
  //       closeMenu();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (!navRef.current?.contains(e.target)) {
      closeMenu();
    }
  };

  const handleScroll = () => {
    if (menuOpen) closeMenu();
  };

  document.addEventListener("mousedown", handleClickOutside);
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    window.removeEventListener("scroll", handleScroll);
  };
}, [closeMenu, menuOpen]);

  return (
    <nav
      ref={navRef}
      // className="relative sticky top-0 z-50 h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-20 border-b bg-white/40 backdrop-blur-[35px] border-white/20 shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]"
      className="relative sticky top-0 z-50 h-12 md:h-[60px] lg:h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 border-b bg-white/40 backdrop-blur-[35px] border-white/20 shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]"
    >
      <Logo />

      <div className="hidden lg:flex flex-1 justify-center">
        {/* <NavLinks openNavLink={openNavLink} setOpenNavLink={setOpenNavLink} /> */}
        <NavLinks openNavLink={openDropdown} setOpenNavLink={setOpenDropdown} />
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="hidden lg:flex">
          {/* <NavActions
            openAction={openAction}
            setOpenAction={setOpenAction}
            closeMenu={closeMenu}
          /> */}
          <NavActions
            openAction={openDropdown}
            setOpenAction={setOpenDropdown}
            closeMenu={closeMenu}
          />
        </div>

        {/* <button
          className="lg:hidden text-3xl leading-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button> */}
        <button
          className="lg:hidden w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              // X icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full z-40 flex flex-col p-4 lg:hidden border-b bg-white border-white/20 shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]">
          <NavLinks
            mobile
            openNavLink={openDropdown}
            setOpenNavLink={setOpenDropdown}
            closeMenu={closeMenu}
          />
          <NavActions
            mobile
            openAction={openDropdown}
            setOpenAction={setOpenDropdown}
            closeMenu={closeMenu}
          />
        </div>
      )}
      {/* {menuOpen && (
        <div className="absolute top-full left-0 w-full z-40 flex flex-col p-4 lg:hidden border-b bg-white border-white/20 shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]">
          <NavLinks
            mobile
            openNavLink={openNavLink}
            setOpenNavLink={setOpenNavLink}
            closeMenu={closeMenu}
          />

          <NavActions
            mobile
            openAction={openAction}
            setOpenAction={setOpenAction}
            closeMenu={closeMenu}
          />
        </div>
      )} */}
    </nav>
  );
}
