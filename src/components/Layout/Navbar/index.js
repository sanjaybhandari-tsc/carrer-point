import Link from "next/link";
import Logo from "./LogoComponent";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import { useState } from "react";

// export default function Navbar() {
//    return (
//     // <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-md shadow">
//     <nav className="sticky top-0 z-50 flex items-center justify-between px-20 py-2 bg-white/50 backdrop-blur-lg border-b border-white/20">
//       <Logo />
//       <NavLinks />
//       <NavActions />
//     </nav>
//   );
// }


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-50 flex items-center justify-between px-6 md:px-20 py-2 bg-white/80 backdrop-blur-lg border-b border-white/20">
      <Logo />

      <div className="hidden md:flex">
        <NavLinks />
      </div>

      <div className="hidden sm:flex">
        <NavActions />
      </div>

      <button className="sm:hidden text-3xl leading-none" onClick={() => setOpen(!open)}>
        ☰
      </button>


      {open && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col gap-4 p-4 md:hidden">
          <NavLinks mobile />
          <NavActions />
        </div>
      )}
    </nav>
  );
}