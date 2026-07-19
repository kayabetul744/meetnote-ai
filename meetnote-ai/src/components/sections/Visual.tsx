import React from "react";
import { motion } from "framer-motion";

export function Visual() {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <img
        src={`${base}visual-hero.jpg`}
        alt="AI Meeting Technology"
        className="w-full h-full object-cover"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/50 text-xs font-bold tracking-widest mb-4">YAPAY ZEKA VE TEKNOLOJİ AKADEMİSİ PROJESİ</p>
          <h2 className="font-heading font-black text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
            İnsan zekasını<br />
            <span className="text-[#CCFF2A]">destekleyen</span> teknoloji.
          </h2>
          <div className="flex gap-6 flex-wrap">
            <span className="text-white/60 text-sm font-medium border border-white/20 px-4 py-2 rounded-full">%87 Zaman Tasarrufu</span>
            <span className="text-white/60 text-sm font-medium border border-white/20 px-4 py-2 rounded-full">12.000+ Analiz</span>
            <span className="text-white/60 text-sm font-medium border border-white/20 px-4 py-2 rounded-full">4.9 ★ Puan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}