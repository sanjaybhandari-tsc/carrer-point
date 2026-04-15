import Link from "next/link";
import NavItem from "./NavItem";
import { useState } from "react";

const links = [
  { label: "Hiring Solution", href: "/hiring" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },

  {
    label: "Services",
    dropdown: true,
    children: [
      { label: "Permanent Hiring", href: "/services/permanent-hiring" },
      { label: "Contract Hiring", href: "/services/contract-hiring" },
      { label: "Executive Search", href: "/services/executivesearch" },
      { label: "RPO", href: "/services/rpo" },
    ],
  },
];

export default function NavLinks({
  mobile = false,
  openItem,
  setOpenItem,
}) {
  return (
    <div className={mobile ? "flex flex-col w-full" : "hidden md:flex gap-3 lg:gap-6"}>
      {links.map((item, index) => (
        <NavItem
          key={item.label}
          item={item}
          mobile={mobile}
          isOpen={openItem === `link-${index}`}
          onToggle={() =>
            setOpenItem(openItem === `link-${index}` ? null : `link-${index}`)
          }
          closeAll={() => setOpenItem(null)}
        />
      ))}
    </div>
  );
}