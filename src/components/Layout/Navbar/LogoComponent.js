import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center h-10 md:h-12">
      <div className="relative h-full w-28 sm:w-32 md:w-36 lg:w-40">
        <Image
          src="/images/navbar/navbarLogoPCOld.png"
          title="Career Point - Go to homepage"
          alt="Career Point"
          fill
          className="object-contain md:scale-125 lg:scale-150"
          priority
        />
        <span className="sr-only">Go to homepage</span>
      </div>
    </Link>
  );
}