import Link from "next/link";
import React from "react";

const LanguageSwitcher = () => {
  return (
    <div className="flex gap-3 items-center text-xl">
      <Link href="/en">🇬🇧</Link>
      <div className="h-4 w-0.5 bg-secondary/50 rounded-sm" />
      <Link href="/it">🇮🇹</Link>
    </div>
  );
};

export default LanguageSwitcher;
