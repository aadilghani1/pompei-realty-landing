import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {};

const LIKS = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Apartments",
    href: "/apartments",
  },
  {
    name: "For Sale",
    href: "/for-sale",
  },
  {
    name: "For Landlords",
    href: "/for-landlords",
  },
];

const Navigation = (props: Props) => {
  return (
    <nav className="max-w-screen-xl mx-auto flex items-center justify-between lg:px-14 lg:py-11 p-5">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      <div className="flex items-center gap-16">
        {LIKS.map((link) => (
          <Link
            className="font-medium hidden lg:block text-secondary hover:underline tracking-wider uppercase"
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;
