import Link from "next/link";
export default function Common() {
  return (
    <div className="px-6 py-16 md:py-20 lg:p-20">
      <div className="relative overflow-hidden bg-[var(--color-deep-blue)] text-white rounded-[2rem] flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-14 py-12 md:py-16 px-6 w-full">
        <img
          className="hidden lg:block absolute top-0 left-0"
          alt="top-right-arc"
          src="/images/homepage/rightFirst1.svg"
        />
        <img
          alt="top-right-arc"
          className="hidden lg:block absolute top-0 left-0"
          src="/images/homepage/rightfirst.svg"
        />
        <img
          alt="top-left-arc"
          className="hidden lg:block absolute top-0 right-0"
          src="/images/homepage/lefftsecond.svg"
        />
        <img
          alt="top-left-arc"
          className="hidden lg:block absolute top-0 right-0"
          src="/images/homepage/leftfirst.svg"
        />

        <div className="text-center max-w-3xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">
            Ready to take your next step?
          </h3>
          <p className="text-sm sm:text-base md:text-lg opacity-90">
            Connect with highly skilled professionals or discover your next
            career opportunity
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 md:gap-8 w-full justify-center items-center">
          <Link
            href="/jobs/browse-jobs"
            className="w-full sm:w-auto sm:min-w-[220px] lg:min-w-[250px] flex flex-col justify-center items-center rounded-2xl border-2 border-white py-6 md:py-8 gap-2 text-base md:text-lg lg:text-xl hover:bg-[var(--color-primary)] hover:border-transparent transition cursor-pointer"
          >
            <img
              src="/images/homepage/chair.svg"
              className="w-8 h-8 md:w-10 md:h-10"
              alt="View job opportunities"
            />
            <p>View Jobs</p>
          </Link>
          <Link
            href="/hiring-solutions"
            className="w-full sm:w-auto sm:min-w-[220px] lg:min-w-[250px] flex flex-col justify-center items-center rounded-2xl border-2 border-white py-6 md:py-8 gap-2 text-base md:text-lg lg:text-xl hover:bg-[var(--color-primary)] hover:border-transparent transition cursor-pointer"
          >
            <img
              src="/images/homepage/students.svg"
              className="w-8 h-8 md:w-10 md:h-10"
              alt="Hire skilled professionals"
            />
            <p>Hire Talent</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
