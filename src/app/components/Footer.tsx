"use client";
import Link from "next/link";
import siteConfig from "@/app/constants/siteConfig";

export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer style={{ backgroundColor: "var(--beige)" }}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {footer.mainNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition duration-200 ease-in-out text-[var(--gold)] hover:text-[var(--light-gray)]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <p className="mt-14 text-center text-sm/6 text-[var(--gold)]">
          &copy;{footer.copyright}
        </p>
        <div className="mt-6 text-center">
          <Link
            href={footer.cta.href}
            className="transition duration-200 ease-in-out text-sm font-medium text-[var(--gold)] hover:text-[var(--light-gray)]"
          >
            {footer.cta.text}
          </Link>
        </div>
      </div>
    </footer>
  );
}
