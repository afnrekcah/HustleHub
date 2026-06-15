"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Array of items to easily extend or shrink the menu
  const menuItems = [
    { label: "Find Work", href: "/find-work" },
    { label: "Find Help", href: "/find-help" },
    { label: "Trust & Safety", href: "/trust-safety" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-(--color-background) border-b border-(--color-outline-variant)/30 py-4 px-5 md:px-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left container for logo and links */}
        <div className="flex items-center gap-10">
          {/* Brand Logo */}
          <Link href="/" className="text-2xl font-bold font-[family-name:--font-headline] text-(--color-primary) hover:opacity-90 transition-opacity">
            HustleHub
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-body-md font-medium text-(--color-on-background)">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className="hover:text-(--color-primary) transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-body-md font-medium text-(--color-on-background) hover:text-(--color-primary) transition-colors px-3 py-2">
            Log In
          </Link>
          <Link href="/signup" className="bg-(--color-primary) text-(--color-on-primary) px-5 py-2.5 rounded-(--radius-md) font-medium hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-level-1">
            Get Started
          </Link>
        </div>

        {/* Mobile Utility Controls */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Notification Bell */}
          <button className="text-(--color-on-background) p-1" aria-label="Notifications">
            <Bell className="w-6 h-6" strokeWidth={2} />
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-(--color-on-background) p-1 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-(--color-outline-variant)/20 flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="text-body-md py-2 font-medium border-b border-gray-100" 
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Link 
              href="/login" 
              className="w-full border border-(--color-outline-variant)/40 text-(--color-primary) py-3 rounded-(--radius-md) font-semibold text-center hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
            <Link 
              href="/signup" 
              className="w-full bg-(--color-primary) text-(--color-on-primary) py-3 rounded-(--radius-md) font-semibold text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}