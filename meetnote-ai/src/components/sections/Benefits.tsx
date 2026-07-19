import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Benefits() {
  const benefitsLeft = [
    "ZAMAN TASARRUFU",
    "ÖNEMLİ BİLGİLER KAÇMAZ",
    "EKİP İLETİŞİMİ"
  ];
  
  const benefitsRight = [
    "İŞ TAKİBİ",
    "KOLAY PAYLAŞIM",
    "YAPAY ZEKA GÜCÜ"
  ];

  return (
    <section id="benefits" className="flex flex-col md:flex-row min-h-[70vh]">
      
      {/* Left: Cream */}
      <div className="w-full md:w-1/2 bg-[#E4E0D8] p-12 md:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label block mb-6">AVANTAJLAR</span>
          <h2 className="display-lg leading-[0.9] mb-16">
            SAĞLADIĞI<br />FAYDALAR
          </h2>
          <ul className="space-y-6">
            {benefitsLeft.map((b, i) => (
              <li key={i} className="flex items-center gap-4 text-[#0A0A0A] font-heading font-bold text-2xl">
                <span className="bg-[#CCFF2A] text-[#0A0A0A] rounded-full p-1"><Check size={20} strokeWidth={3}/></span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Right: Purple */}
      <div className="w-full md:w-1/2 bg-[#7C6AF5] p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative z-10"
        >
          <ul className="space-y-6 mt-12 md:mt-[10rem]">
            {benefitsRight.map((b, i) => (
              <li key={i} className="flex items-center gap-4 text-white font-heading font-bold text-2xl">
                <span className="bg-[#CCFF2A] text-[#0A0A0A] rounded-full p-1"><Check size={20} strokeWidth={3}/></span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AI Image absolute right */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src={`${import.meta.env.BASE_URL}ai-benefits.jpg`}
          alt="Benefits Art"
          className="absolute top-0 right-0 w-1/2 h-full object-cover mix-blend-overlay opacity-60"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

    </section>
  );
}
