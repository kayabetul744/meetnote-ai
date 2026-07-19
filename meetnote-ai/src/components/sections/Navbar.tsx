import React from "react";
import { X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "ÖZELLİKLER", href: "#features" },
    { name: "NASIL ÇALIŞIR?", href: "#how" },
    { name: "FARKIMIZ", href: "#difference" },
    { name: "KULLANIM", href: "#use" },
    { name: "FAYDALAR", href: "#benefits" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(228,224,216,0.92)] backdrop-blur py-4 border-b border-[rgba(0,0,0,0.08)]">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Menu Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="bg-[#CCFF2A] text-[#0A0A0A] font-heading font-bold text-sm px-4 py-2 rounded-full tracking-wider hover:bg-[#D8FF45] transition-colors"
          >
            ≡ MENÜ
          </button>
        </div>

        {/* Center: Logo */}
        <a href="#" className="font-heading font-black text-2xl tracking-[-0.04em] text-[#0A0A0A]">
          MEETNOTE AI
        </a>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <a href="#demo" className="bg-[#0A0A0A] text-white font-heading font-bold text-sm px-5 py-2 rounded-full tracking-wider hover:bg-[#222222] transition-colors inline-block">
            ÜCRETSİZ DENE
          </a>
        </div>

        {/* Mobile menu toggle (visible on mobile if menu is closed) */}
        {!isMobileMenuOpen && (
          <button className="md:hidden bg-[#CCFF2A] text-[#0A0A0A] font-heading font-bold text-xs px-3 py-1.5 rounded-full" onClick={() => setIsMobileMenuOpen(true)}>
            MENÜ
          </button>
        )}
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#E4E0D8] z-[100] flex flex-col p-6">
          <div className="flex justify-between items-center border-b border-[rgba(0,0,0,0.08)] pb-4 mb-8">
            <span className="font-heading font-black text-xl tracking-tight text-[#0A0A0A]">MENÜ</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-[#0A0A0A] text-white rounded-full">
              <X size={20} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 items-start">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading font-black text-4xl text-[#0A0A0A] hover:text-[#7C6AF5] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#demo"
              className="mt-8 bg-[#CCFF2A] text-[#0A0A0A] font-heading font-bold text-lg px-8 py-4 rounded-full tracking-wider w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ÜCRETSİZ DENE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
