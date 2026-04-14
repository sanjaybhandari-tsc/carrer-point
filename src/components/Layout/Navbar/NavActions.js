import ChevronDown from "./ChevronDown";
import { useState } from "react";
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

export default function NavActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row sm:flex-row justify-end items-center gap-3 relative">
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="text-blue-600 flex items-center gap-1"
          onClick={() => setOpen((prev) => !prev)}
        >
          See Jobs
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
            <Link
              href="/jobs/full-time"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Submit CV
            </Link>

            <Link
              href="/jobs/remote"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Upload your CV
            </Link>
          </div>
        )}
      </div>


      <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Get in touch
      </button>
    </div>
  );
}
