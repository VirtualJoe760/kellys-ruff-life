"use client";

import siteConfig from "@/app/constants/siteConfig";

// Props for MobileMenu
type MobileMenuProps = {
  open: boolean;
};

export default function MobileMenu({ open }: MobileMenuProps) {
  return (
    <div className={`space-y-1 px-2 pt-2 pb-3 ${open ? "block" : "hidden"}`}>
      {siteConfig.text.navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`block px-3 py-2 rounded-md text-base font-medium transition duration-200 ease-in-out text-[var(--gold)] hover:text-[var(--light-gray)]`}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
