"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/restaurants", label: "맛집찾기" },
  { href: "/recipes", label: "레시피" },
  { href: "/favorites", label: "즐겨찾기" },
];

export default function TapNavigation() {
  const pathname = usePathname();

  return (
    <nav className="h-full flex justify-between items-center gap-10 px-4">
      <LayoutGroup>
        {navItems.map(({ href, label }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link key={href} href={href} className="relative h-full">
              <motion.button className="h-full text-text-xl font-semibold px-4">
                {label}
              </motion.button>

              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-1 bg-black"
                />
              )}
            </Link>
          );
        })}
      </LayoutGroup>
    </nav>
  );
}
