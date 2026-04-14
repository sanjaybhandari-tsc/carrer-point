import ChevronDown from "./ChevronDown";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// export default function NavActions() {

//    const [open, setOpen] = useState(false);

//   return (
//     <div className="flex flex-row sm:flex-row justify-end  gap-3 relative">

//       <button className="text-blue-600 flex items-center gap-1">
//         See Jobs <ChevronDown size={16} />
//       </button>

//       <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
//         Get in touch
//       </button>
//     </div>
//   );
// }
export default function NavActions({ mobile = false }) {
  const [open, setOpen] = useState(false);

  if (mobile) {
  return (
    <div className="flex flex-col gap-4">
      
      {/* See Jobs (accordion like Services) */}
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between cursor-pointer text-blue-600"
          onClick={() => setOpen(!open)}
        >
          <span>See Jobs</span>
          <ChevronDown
            className={`transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* ✅ Nested like Services */}
        {open && (
          <div className="pl-4 mt-2 flex flex-col gap-2">
            <Link href="/jobs/full-time">Submit CV</Link>
            <Link href="/jobs/remote">Upload your CV</Link>
          </div>
        )}
      </div>

      {/* CTA */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Get in touch
      </button>
    </div>
  );
}

  return (
    <div className="flex items-center gap-3 flex-row">
      {/* Dropdown */}
      <div className="relative group">
        <button className="text-blue-600 flex items-center gap-1">
          See Jobs
          <ChevronDown className="transition-transform group-hover:rotate-180" />
        </button>

        <div
          className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-md z-50 
                        opacity-0 invisible 
                        group-hover:opacity-100 group-hover:visible 
                        transition-all duration-200"
        >
          <Link
            href="/jobs/full-time"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Submit CV
          </Link>

          <Link
            href="/jobs/remote"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Upload your CV
          </Link>
        </div>
      </div>

      {/* CTA */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md whitespace-nowrap">
        Get in touch
      </button>
    </div>
  );
}
