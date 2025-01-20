"use client";

import { Disclosure, DisclosurePanel } from "@headlessui/react";
import MobileMenuButton from "./MobileMenuButton";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {


  return (
    <Disclosure as="nav" className="sticky top-0 z-50" style={{ backgroundColor: "var(--background)" }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <MobileMenuButton open={open} />
              <Logo />
              <DesktopMenu />
            </div>
          </div>
          <DisclosurePanel className="sm:hidden transition duration-300 ease-in-out">
            <MobileMenu
              open={open}
            />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
