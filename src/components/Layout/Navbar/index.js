import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black text-white">
      <div className="text-xl font-bold">CareerPoint</div>

      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <button className="px-3 py-1 bg-white text-black">Login</button>
    </nav>
  );
}