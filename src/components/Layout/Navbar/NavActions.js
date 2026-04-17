import ChevronDown from "./ChevronDown";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavActions({
  mobile = false,
  openItem,
  setOpenItem,
  closeMenu,
}) {
  const isOpen = openItem === "jobs";

  if (mobile) {
    return (
      <div className="flex flex-col w-full border-t border-gray-200 pt-3">
        <div className="flex flex-col">
          <div
            className="flex items-center justify-between py-3 px-2 cursor-pointer text-blue-600"
            onClick={() => setOpenItem(isOpen ? null : "jobs")}
          >
            <span>See Jobs</span>
            <ChevronDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/jobs/browseJobs" onClick={closeMenu}>
                Browse Jobs
              </Link>
              <Link href="/jobs/submitYourCV" onClick={closeMenu}>
                Submit your CV
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={closeMenu}
          className="mt-4 px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-md"
        >
          Get in touch
        </button>
      </div>
    );
  }

  // Desktop (unchanged)
  return (
    <div className="flex items-center gap-3 flex-row">
      <div className="relative group">
        <button className="font-montserrat font-medium text-sm sm:text-base leading-none text-[var(--color-primary)] flex items-center gap-1">
          See Jobs
          <ChevronDown className="transition-transform group-hover:rotate-180" />
        </button>

        <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <Link
            href="/jobs/browseJobs"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Browse Jobs
          </Link>
          <Link
            href="/jobs/submitYourCV"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Submit your CV
          </Link>
        </div>
      </div>

      <button className="font-montserrat font-medium text-sm sm:text-base leading-none px-4 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-md whitespace-nowrap">
        Get in touch
      </button>
    </div>
  );
}
