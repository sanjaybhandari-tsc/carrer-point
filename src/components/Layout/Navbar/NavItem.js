"use client";

import { useState } from "react";
import Link from "next/link";
import ChevronDown from "./ChevronDown";


export default function NavItem({ item, mobile, isOpen, onToggle, closeAll }) {
  const hasDropdown = item.dropdown && item.children?.length > 0;

  if (mobile) {
    return (
      <div className="w-full border-b border-gray-200">
      
        <div
          className="flex items-center justify-between py-3 px-2 cursor-pointer"
          onClick={() => hasDropdown && onToggle()}
        >
          {hasDropdown ? (
            <span className="text-base font-medium text-gray-800">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              onClick={closeAll}
              className="w-full text-base font-medium text-gray-800"
            >
              {item.label}
            </Link>
          )}

          {hasDropdown && (
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {hasDropdown && (
            <div className="flex flex-col bg-gray-50 pl-4 pb-2">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={closeAll} // ✅ closes menu after click
                  className="py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group py-2">
      <div className="flex items-center gap-1 cursor-pointer">
        {hasDropdown ? (
          <span className="text-[color:var(--foreground)]">{item.label}</span>
        ) : (
          <Link
            href={item.href}
            className="hover:text-blue-600 transition-colors"
          >
            {item.label}
          </Link>
        )}

        {hasDropdown && (
          <span className="transition-transform duration-200 group-hover:rotate-180">
            <ChevronDown />
          </span>
        )}
      </div>

      {hasDropdown && (
        <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
