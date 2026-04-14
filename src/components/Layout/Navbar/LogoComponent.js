import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/navbar/navbarLogoPC.png"
        alt="Career Point"
        width={100}
        height={60}
      />
    </div>
  );
}