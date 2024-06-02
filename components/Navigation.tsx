import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Container from "./Container";

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
    <nav>
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </Link>
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
      </Container>
    </nav>
  );
};

export default Navigation;
