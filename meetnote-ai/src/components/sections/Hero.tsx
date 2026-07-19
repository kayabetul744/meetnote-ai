import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100vh] w-full overflow-hidden flex flex-col justify-between pt-24 pb-8"
      style={{ background: 'linear-gradient(135deg, #E4E0D8 0%, #E4E0D8 42%, #7C6AF5 42%, #7C6AF5 100%)' }}
    >

      {/* Top Half */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="w-full">
          <span className="section-label block mb-4">
            YAPAY ZEKA TOPLANTI ASİSTANI
          </span>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="display-lg">
                TOPLANTILARINI<br />
                AKILLICA YÖNET
              </h1>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="w-full md:w-[280px] lg:w-[320px] md:pt-2 shrink-0 text-white/90 text-sm md:text-base font-medium leading-relaxed"
            >
              MeetNote AI, toplantı metinlerini saniyeler içinde analiz eder, özetler, kararları ve aksiyon maddelerini çıkarır.
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Half */}
      <div className="container mx-auto px-6 pb-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex-1"
          >
            <h2 className="display-xl text-[#5A4FD6] tracking-tighter leading-[0.8] mb-8 md:mb-0 relative">
              MEETNOTE
              <span className="hidden md:inline-block text-[#E4E0D8]/40 ml-4 translate-y-[-10px]">AI</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col md:items-end gap-6"
          >
            <div className="border-t border-[#0A0A0A]/20 pt-4 flex flex-wrap gap-4 text-[#0A0A0A] font-bold text-xs tracking-wider">
              <span>%87 ZAMAN TASARRUFU</span>
              <span>|</span>
              <span>12K+ ANALİZ</span>
              <span>|</span>
              <span>4.9 ★</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#demo" className="btn-lime">
                DEMOYU DENE
              </a>
              <a href="#about" className="btn-dark-outline">
                KEŞFET →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
