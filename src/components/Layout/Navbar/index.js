"use client";

import { useState } from "react";
import Logo from "./LogoComponent";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNavLink, setOpenNavLink] = useState(null);
  const [openAction, setOpenAction] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenNavLink(null);
    setOpenAction(null);
  };

  return (
    <nav className="relative sticky top-0 z-50 h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-20 border-b bg-white/40 backdrop-blur-[35px] border-white/20 shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]">

      <Logo />

      <div className="hidden lg:flex flex-1 justify-center">
        <NavLinks
          openNavLink={openNavLink}
          setOpenNavLink={setOpenNavLink}
        />
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="hidden lg:flex">
          <NavActions
            openAction={openAction}
            setOpenAction={setOpenAction}
          />
        </div>

        <button
          className="lg:hidden text-3xl leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
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
      )}
    </nav>
  );
}