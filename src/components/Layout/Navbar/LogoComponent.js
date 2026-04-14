import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/navbar/navbarLogoPC.png"
        alt="Career Point"
        width={100}
        height={60}
        className="cursor-pointer"
      />
    </Link>
  );
}