"use client";

import { usePathname } from "next/navigation";
import siteConfig from "@/app/constants/siteConfig";

export default function DesktopMenu() {
  const pathname = usePathname();
  const { text } = siteConfig;

  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {text.navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <a
              key={item.name}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-md px-3 py-2 font-medium transition duration-200 ease-in-out ${
                isActive ? "text-[var(--gold)]" : "text-[var(--gold)] hover:text-[var(--light-gray)]"
              }`}
              style={{ fontSize: siteConfig.text.navLinkTextSize }}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
