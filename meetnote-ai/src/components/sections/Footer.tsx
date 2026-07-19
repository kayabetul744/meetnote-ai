import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-8">
      <div className="container mx-auto px-6">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <h2 className="display-lg !text-white !text-[clamp(2rem,5vw,4rem)] leading-none mb-2">MEETNOTE AI</h2>
            <span className="bg-[#CCFF2A] text-[#0A0A0A] font-bold text-xs tracking-widest px-3 py-1 rounded-full">
              2026
            </span>
          </div>
          <div className="text-white/50 max-w-sm text-sm font-medium leading-relaxed">
            Yapay zeka destekli toplantı asistanı. Ekiplerinizin iletişim verimliliğini maksimuma çıkarın.
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-white font-heading font-bold tracking-wider mb-6">ÜRÜN</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><a href="#features" className="hover:text-[#CCFF2A] transition-colors">Özellikler</a></li>
              <li><a href="#how" className="hover:text-[#CCFF2A] transition-colors">Nasıl Çalışır?</a></li>
              <li><a href="#demo" className="hover:text-[#CCFF2A] transition-colors">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-heading font-bold tracking-wider mb-6">ŞİRKET</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><a href="#about" className="hover:text-[#CCFF2A] transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-[#CCFF2A] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#CCFF2A] transition-colors">Kariyer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-heading font-bold tracking-wider mb-6">DESTEK</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><a href="#" className="hover:text-[#CCFF2A] transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-[#CCFF2A] transition-colors">Dokümanlar</a></li>
              <li><a href="#" className="hover:text-[#CCFF2A] transition-colors">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-heading font-bold tracking-wider mb-6">SOSYAL</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><a href="#" className="hover:text-[#CCFF2A] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#CCFF2A] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#CCFF2A] transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40 tracking-widest">
          <p>© 2026 MEETNOTE AI · YAPAY ZEKA VE TEKNOLOJİ AKADEMİSİ PROJESİ</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">GİZLİLİK</a>
            <a href="#" className="hover:text-white transition-colors">ŞARTLAR</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
