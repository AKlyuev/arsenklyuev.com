"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { josefin_sans } from "app/fonts";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/bookshelf": {
    name: "bookshelf",
  },
  "/about": {
    name: "about",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="mb-8 uppercase">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-center items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={`${josefin_sans.className} ftransition-all hover:text-neutral-500 flex align-middle relative py-1 px-2 m-1 ${pathname === path ? "text-neutral-500" : ""}`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
