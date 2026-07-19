import React from "react";
import { motion } from "framer-motion";
import { Code, Settings, Building2, Rocket, Video, Briefcase, Handshake, TrendingUp } from "lucide-react";

const useCases = [
  { icon: <Code size={20} />, title: "YAZILIM EKİPLERİ", desc: "Sprint & Daily" },
  { icon: <Settings size={20} />, title: "AGILE / SCRUM", desc: "Retrospective" },
  { icon: <Building2 size={20} />, title: "ÜNİVERSİTELER", desc: "Tez toplantıları" },
  { icon: <Rocket size={20} />, title: "STARTUP'LAR", desc: "Hızlı kararlar" },
  { icon: <Video size={20} />, title: "ONLİNE", desc: "Zoom / Teams" },
  { icon: <Briefcase size={20} />, title: "YÖNETİM", desc: "Strateji" },
  { icon: <Handshake size={20} />, title: "MÜŞTERİ", desc: "İhtiyaç analizi" },
  { icon: <TrendingUp size={20} />, title: "PROJE YÖN.", desc: "İlerleme takibi" },
];

export function UseCases() {
  return (
    <section id="use" className="py-32 bg-[#E4E0D8] overflow-hidden border-t border-[rgba(0,0,0,0.12)]">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="section-label block mb-6">KİMLER KULLANIR?</span>
          <h2 className="display-lg leading-[0.9]">
            KULLANIM<br />
            <span className="text-[#7C6AF5]">ALANLARI</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full flex overflow-x-hidden">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...useCases, ...useCases, ...useCases].map((uc, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[280px] p-6 border border-[#0A0A0A] rounded-xl bg-[#E4E0D8] hover:bg-[#7C6AF5] hover:text-white hover:border-[#7C6AF5] transition-all group cursor-pointer"
            >
              <div className="text-[#7C6AF5] group-hover:text-[#CCFF2A] mb-4">
                {uc.icon}
              </div>
              <h3 className="font-heading font-extrabold text-xl mb-2">{uc.title}</h3>
              <p className="text-sm font-medium opacity-70">{uc.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
