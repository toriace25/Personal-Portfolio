"use client";

import clsx from "clsx";
import Link from "next/link";

interface Props {
  showHome?: boolean;
}

const links = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = ({ showHome }: Props) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 md:gap-8">
      {links.map((link) => {
        if (showHome || (!showHome && link.name !== "Home")) {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                !showHome &&
                  "items-center justify-center gap-2 rounded-md bg-violet-500 p-1.5 hover:bg-violet-300 md:p-3",
                "md:text-md flex grow text-sm hover:text-gray-950 lg:text-lg",
              )}
            >
              <p>{link.name}</p>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default NavLinks;
