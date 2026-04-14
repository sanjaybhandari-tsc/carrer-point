"use client";

import { useState } from "react";
import Link from "next/link";
import ChevronDown from "./ChevronDown";

export default function NavItem({ item, mobile }) {
  const [open, setOpen] = useState(false);
  const hasDropdown = item.dropdown && item.children?.length > 0;

   if (mobile) {
    return (
      <div className="flex flex-col py-2">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => hasDropdown && setOpen(!open)}
        >
         {hasDropdown ? (
            <span className="text-[color:var(--foreground)]">
              {item.label}
            </span>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}

          {hasDropdown && (
            <ChevronDown
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          )}
        </div>

        {/* Nested dropdown (accordion style) */}
        {hasDropdown && open && (
          <div className="pl-4 mt-2 flex flex-col gap-2">
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="text-sm text-gray-600"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative group py-2"
    >
  
      <div className="flex items-center gap-1 cursor-pointer">
        {hasDropdown ? (
          <span className="text-[color:var(--foreground)]">
            {item.label}
          </span>
        ) : (
          <Link
            href={item.href}
            className="hover:text-blue-600 transition-colors"
          >
            {item.label}
          </Link>
        )}

        {hasDropdown && (
          <span className={`transition-transform duration-200 group-hover:rotate-180`}>
            <ChevronDown />
          </span>
        )}
      </div>

      {/* Dropdown */}
      {hasDropdown &&  (
        <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible
transition-all duration-200">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="no-underline  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}