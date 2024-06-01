import Link from "next/link";
import React from "react";

const LanguageSwitcher = () => {
  return (
    <div className="flex gap-3">
      <Link href="/en">🇬🇧</Link>
      <div className="h-[20px] w-[1px] bg-secondary" />
      <Link href="/it">🇮🇹</Link>
    </div>
  );
};

export default LanguageSwitcher;
