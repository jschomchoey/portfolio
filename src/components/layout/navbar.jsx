"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  ["/", "Home"],
  ["/projects", "Experience"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ scale: 0, y: -75 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      }}
      className="navbar fixed z-1000"
      style={{ translateX: "-50%" }}
    >
      <ul className="flex nav-list relative">
        {navItems.map(([path, label]) => {
          const active = pathname === path;

          return (
            <li
              key={path}
              className={`relative px-4 py-2 ${active ? "active" : ""}`}
            >
              {active && (
                <motion.div
                  layoutId="nav-bg"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                />
              )}

              <Link href={path} className="relative z-10">
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
