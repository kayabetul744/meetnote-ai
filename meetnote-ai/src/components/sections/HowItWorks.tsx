import React from "react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "METNİ YÜKLE",
      desc: "Toplantı metnini alana yapıştırın veya dosya olarak yükleyin."
    },
    {
      num: "02",
      title: "ANALİZ ET",
      desc: "Yapay zeka metni tarar, kararları ve aksiyonları çıkarır."
    },
    {
      num: "03",
      title: "DIŞA AKTAR",
      desc: "Çıktıları inceleyin, düzenleyin ve belge olarak indirin."
    }
  ];

  return (
    <section id="how" className="py-32 bg-[#7C6AF5] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="section-label !text-white/50 block mb-6">NASIL ÇALIŞIR?</span>
          <h2 className="display-lg !text-white">3 BASİT ADIM</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative p-8 border border-white/20 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-start"
            >
              <div className="text-[6rem] font-heading font-black text-white/15 leading-none mb-6">
                {step.num}
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/70 font-medium leading-relaxed mb-8">
                {step.desc}
              </p>
              
              <div className="mt-auto w-full h-1 bg-[#CCFF2A] scale-x-0 origin-left transition-transform duration-300 parent-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Floating Image */}
      <motion.img
        initial={{ opacity: 0, x: -40, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        src={`${import.meta.env.BASE_URL}ai-how.jpg`}
        alt="AI Analysis"
        className="absolute bottom-10 left-10 w-[240px] h-[240px] object-cover rounded-full mix-blend-overlay opacity-50 hidden lg:block"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </section>
  );
}
