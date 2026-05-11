"use client";

import Link from "next/link";
import ChevronDown from "./ChevronDown";
import { useState, useEffect } from "react";

export default function NavItem({ item, mobile, isOpen, onToggle, closeAll }) {
  const hasDropdown = item.dropdown && item.children?.length > 0;
  useEffect(() => {
    // close dropdown when route changes OR menu closes
    if (!isOpen) return;
  }, [isOpen]);

  if (mobile) {
    return (
      <div className="w-full border-b border-gray-200">
        {hasDropdown ? (
          <div
            className="flex items-center justify-between py-3 px-2 cursor-pointer"
            onClick={onToggle}
          >
            {/* <span className="content  font-montserrat">{item.label}</span> */}
            <span className="nav-item font-montserrat">{item.label}</span>
            {/* <span className="font-montserrat font-medium text-base">
            {item.label}
          </span> */}

            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        ) : (
          <Link
            href={item.href}
            onClick={closeAll}
            // className="block py-3 px-2 font-montserrat font-medium text-base text-gray-800"
            // className="content block py-3 px-2"
            className="nav-item block py-3 px-2"
            >
            {item.label}
          </Link>
        )}

        {hasDropdown && (
          <div
            className={`pl-4 overflow-hidden border-l-4 border-[var(--color-primary)]  transition-all duration-300 relative z-10  ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={closeAll}
                // className="block py-2 text-sm text-gray-700 hover:text-[var(--color-primary)]"
                // className="content block py-2  hover:text-[var(--color-primary)]"
                className="nav-item block py-2  hover:text-[var(--color-primary)]"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  // DESKTOP
  return (
    <div className="relative py-2">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => hasDropdown && onToggle()}
      >
        {hasDropdown ? (
          // <span className="content hover:text-[var(--color-primary)] transition-colors">
          <span className="nav-item hover:text-[var(--color-primary)] transition-colors">
            {item.label}
          </span>
        ) : (
          // <span className="hover:text-[var(--color-primary)] transition-colors">
          //   {item.label}
          // </span>
          <Link
            href={item.href}
            // className="content hover:text-[var(--color-primary)] transition-colors"
            className="nav-item hover:text-[var(--color-primary)] transition-colors"
          >
            {item.label}
          </Link>
          // <Link href={item.href} className="hover:text-[var(--color-primary)] transition-colors">
          //   {item.label}
          // </Link>
        )}

        {hasDropdown && (
          <span
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <ChevronDown />
          </span>
        )}
      </div>

      {hasDropdown && isOpen && (
        <div
          className="border-l-4 border-[var(--color-primary)] absolute left-0 top-full mt-1 z-50 w-56 bg-white shadow-lg rounded-md "
          onClick={(e) => e.stopPropagation()}
        >
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={closeAll}
              // className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--color-primary)]"
              // className="block px-4 py-2 hover:bg-gray-100 hover:text-[var(--color-primary)] content"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[var(--color-primary)] nav-item"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
