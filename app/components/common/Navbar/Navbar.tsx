"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "#" },
    { label: "Services", link: "#" },
    { label: "Reports", link: "/reports" },
    { label: "Contact", link: "#" },
  ];

  return (
    <header className="bg-white lg:border-b md:border-b-gray-200 w-screen fixed left-0 right-0 top-0 z-[1000]">
      <nav
        className="custom-container lg:px-8 pl-4 pr-3 flex items-center justify-between py-[17.5px]"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="no-underline">
            <Image
              src="/assets/svgs/logo.svg"
              alt=""
              width={168}
              height={37}
              className="w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="flex flex-col gap-1 items-center justify-center size-10 p-2"
            onClick={handleToggle}
          >
            <span
              className={`h-[2px] w-full block bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full block bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0 !w-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full block bg-gray-700 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
        <ul
          className={`max-lg:absolute top-full left-0 right-0 max-lg:w-full bg-white lg:flex gap-2 lg:gap-1 list-none p-0 m-0 max-lg:shadow-md max-lg:overflow-y-hidden transition-all duration-300  ${
            mobileMenuOpen
              ? "opacity-100 visible max-lg:translate-y-0 max-lg:py-6"
              : "max-lg:opacity-0 max-lg:invisible max-lg:-translate-y-3"
          }`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0,0,0,0.2) rgba(255,255,255,0.05)",
          }}
        >
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`text-[14px] block font-[500] leading-[171%] text-gray-700 p-2 hover:bg-semi-transparent rounded-md max-lg:px-4 max-lg:py-3 ${
                  pathname === item.link ? "bg-semi-transparent" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
