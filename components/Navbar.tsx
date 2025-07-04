"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#edf1f7]/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="relative w-[200px] h-[36px] cursor-pointer">
              <Image
                onClick={() => router.push("/")}
                src="/images/logo.png"
                alt="Eco Voice Foundation Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-xs text-secondary hover:text-primary">
            <a
              href="/focus-areas"
              className={`transition-colors${
                pathname === "/focus-areas" ? " font-bold" : ""
              }`}
            >
              FOCUS AREAS
            </a>
            <a
              href="/centers"
              className={`transition-colors${
                pathname === "/centers" ? " font-bold" : ""
              }`}
            >
              CENTERS
            </a>
            <a
              href="/impact"
              className={`transition-colors${
                pathname === "/impact" ? " font-bold" : ""
              }`}
            >
              IMPACT
            </a>
            <a
              href="/about"
              className={`transition-colors${
                pathname === "/about" ? " font-bold" : ""
              }`}
            >
              ABOUT US
            </a>
            <Button className="border h-0 border-primary hover:bg-primary bg-transparent hover:text-white text-primary text-xs rounded-full py-3">
              DONATE NOW
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
