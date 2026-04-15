import Link from "next/link";
import Logo from "./LogoComponent";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  return (
    <nav className="relative sticky top-0 z-50 h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-20 bg-white/80 backdrop-blur-lg border-b border-white/20">
      <Logo />
      <div className="hidden lg:flex flex-1 justify-center">
        <NavLinks />
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 ">
        <div className="hidden lg:flex">
          <NavActions />
        </div>

        <button
          className=" lg:hidden text-3xl leading-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col p-4 lg:hidden">
          <NavLinks mobile openItem={openItem} setOpenItem={setOpenItem} />
          <NavActions
            mobile
            openItem={openItem}
            setOpenItem={setOpenItem}
            closeMenu={() => {
              setMenuOpen(false);
              setOpenItem(null);
            }}
          />
        </div>
      )}
    </nav>
  );
}
