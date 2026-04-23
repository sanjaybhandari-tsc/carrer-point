import ChevronDown from "./ChevronDown";
import Link from "next/link";

export default function NavActions({
  mobile = false,
  openAction,
  setOpenAction,
  closeMenu,
}) {
  const isOpen = openAction === "jobs";
  if (mobile) {
    return (
      <div className="flex flex-col w-full border-t border-gray-200 pt-3">
        <div
          className="flex items-center justify-between py-3 px-2 cursor-pointer text-blue-600"
          onClick={() => setOpenAction(isOpen ? null : "jobs")}
        >
          <span className="cursor-pointer">See Jobs</span>
          <ChevronDown className={isOpen ? "rotate-180" : ""} />
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-4 flex flex-col gap-2">
            <Link href="/jobs/browse-jobs" onClick={closeMenu}>
              Browse Jobs
            </Link>
            <Link href="/jobs/submit-your-cv" onClick={closeMenu}>
              Submit your CV
            </Link>
          </div>
        </div>

        <button
          onClick={closeMenu}
          className="mt-4 px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-md cursor-pointer"
        >
          Get in touch
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div
          className="flex items-center gap-1 cursor-pointer font-medium text-sm text-[var(--color-primary)]"
          onClick={(e) => {
            e.stopPropagation();

            if (isOpen) {
              setOpenAction(null);
            } else {
              setOpenAction("jobs");
            }
          }}
        >
          See Jobs
          <span
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ChevronDown />
          </span>
        </div>

        {isOpen && (
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-48 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/jobs/browse-jobs"
              onClick={closeMenu}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--color-primary)]"
            >
              Browse Jobs
            </Link>

            <Link
              href="/jobs/submit-your-cv"
              onClick={closeMenu}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--color-primary)]"
            >
              Submit your CV
            </Link>
          </div>
        )}
      </div>

      <button
        onClick={closeMenu}
        className="px-4 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-md whitespace-nowrap cursor-pointer"
      >
        Get in touch
      </button>
    </div>
  );
}
