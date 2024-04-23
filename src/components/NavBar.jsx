"use client";

import { navLinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twJoin } from "tailwind-merge";

const NavBar = () => {
  const path = usePathname();
  return (
    <header>
      <nav className="p-6 flex justify-center">
        <ul className="flex gap-6">
          {navLinks.map((data) => (
            <li key={data.link}>
              <Link
                href={data.link}
                className={twJoin(
                  "font-medium px-4 py-2 rounded",
                  path === data.link ? "bg-zinc-800 text-white" : ""
                )}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
