"use client";

import { useState } from "react";
import Link from "next/link";
import { asset, navLinks } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/" aria-label="Página inicial UaiLibras">
            <img src={asset("06.png")} alt="Logo UaiLibras" />
          </Link>
        </div>
        <nav className="menu" aria-label="Menu principal">
          <button
            className="hamburger"
            type="button"
            aria-expanded={isOpen}
            aria-controls="menu-list"
            aria-label="Abrir menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul id="menu-list" className={isOpen ? "active" : undefined}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
