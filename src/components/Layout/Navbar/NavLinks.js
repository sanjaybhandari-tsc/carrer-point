import Link from "next/link";
import NavItem from "./NavItem";
import { useState } from "react";

const links = [
  { label: "Hiring Solution", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },

  {
    label: "Services",
    href: "/services",
    dropdown: true,
    children: [
      { label: "Permanent Hiring", href: "/services/permanent-hiring" },
      { label: "Contract Hiring", href: "/services/contract-hiring" },
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "RPO", href: "/services/rpo" },
    ],
  },

  
];

export default function NavLinks({ mobile = false }) {

  return (
    <div className={mobile ? "flex flex-col gap-4" : "hidden md:flex gap-6"}>
      {links.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </div>
  );
}