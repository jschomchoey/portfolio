"use client";
import React, { useEffect, useState } from "react";

export default function TOC({ headings }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!headings?.length) return;
    function onScroll() {
      const scrollY = window.scrollY;
      let current = null;
      const offset = 250; // px from top
      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollY + offset >= top) {
            current = h.id;
          }
        }
      }
      setActiveId(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  if (!headings?.length) return null;
  return (
    <nav className="toc mb-4">
      <div className="font-bold mb-2">On this page</div>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${h.id}`}
              className={
                `hover:underline text-sm text-gray-700` +
                (activeId === h.id ? " font-bold text-primary" : "")
              }
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(h.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.replaceState(null, "", `#${h.id}`);
                }
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
