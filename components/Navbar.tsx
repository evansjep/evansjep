import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-6 border-b">
      <Link href="/" className="font-semibold">
        Evans Jep
      </Link>

      <div className="flex gap-6 text-sm text-gray-600">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/writing">Writing</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
