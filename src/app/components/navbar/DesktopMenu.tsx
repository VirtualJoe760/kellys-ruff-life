"use client"; // Ensure client-side rendering

import { usePathname } from "next/navigation";
import siteConfig from "../../constants/siteConfig"; // Import the siteConfig

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DesktopMenu() {
  const pathname = usePathname(); // Get the current pathname
  const { colors, text } = siteConfig; // Destructure colors and text from siteConfig

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
              className={classNames(
                isActive
                  ? `bg-[${colors.activeBg}] text-[${colors.activeText}]`
                  : `text-[${colors.defaultText}] hover:text-[${colors.hoverText}]`,
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
