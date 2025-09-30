'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { title: 'Why it matters', href: '#why' },
    { title: 'Plugin', href: '#plugin' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Sign in', href: '#signin' },
  ];

  type NavLink = {
    title: string;
    href: string;
  };
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 px-5 py-3 z-50 bg-primary`}>
        <div className={`max-width flex justify-between`}>
          <Link href="/" className={`text-4xl din-black`}>
            Help Bob
          </Link>
        </div>
      </header>
      <div className={`nav-bg fixed inset-0 opacity-0 bg-primary pointer-events-none z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? "show" : ""}`}>

      </div>
    </>
  );
};