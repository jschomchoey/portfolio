"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <motion.nav
      initial={{
        scale: 0,
        y: -75,
      }}
      animate={{
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      }}
      className="navbar fixed z-1000"
      style={{ translateX: "-50%" }}
    >
      <ul className="flex nav-list">
        {[
          ["/", "Home"],
          ["/projects", "Experience"],
          ["/about", "About"],
          ["/blog", "Blog"],
          ["/contact", "Contact"],
        ].map(([path, label]) => (
          <li
            key={path}
            className={`nav-item ${isActive(path) ? "active" : ""}`}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
