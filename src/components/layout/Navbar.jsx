"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  ["/", "Home"],
  ["/projects", "Experience"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Navbar ===== */}
      <motion.nav
        initial={{ scale: 0.9, y: -40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="navbar fixed top-4 right-4 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 z-50"
      >
        {/* Desktop Menu */}
        <ul className="nav-list hidden sm:flex relative">
          {navItems.map(([path, label]) => {
            const active = pathname === path;

            return (
              <li key={path} className={`relative ${active ? "active" : ""}`}>
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
                <Link href={path} className="relative z-10 px-4 py-2">
                  {label}
                </Link>
              </li>
            );
          })}
          {/* <ThemeToggle /> */}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden px-3 py-2 text-white relative z-50"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="block"
              >
                <X />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="block"
              >
                <Menu />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* ===== Mobile Menu Overlay ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm"
          >
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full gap-10"
            >
              {navItems.map(([path, label]) => {
                const active = pathname === path;

                return (
                  <li key={path}>
                    <Link
                      href={path}
                      onClick={() => setOpen(false)}
                      className={`text-h5 ${
                        active ? "text-white font-semibold" : "text-white/70"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
