import React from "react";
import { motion } from "framer-motion";
import { X, Check, Brain, ShieldCheck, Gauge, Globe2 } from "lucide-react";

const rows = [
  {
    icon: <Brain size={22} />,
    title: "TOPLANTI HAFIZASI",
    them: "Her toplantı sıfırdan değerlendirilir, geçmiş unutulur.",
    us: "Geçmiş kararları hatırlar, yeni toplantıda çelişki ve tekrarları otomatik yakalar.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "GİZLİLİK",
    them: "Toplantıya bot olarak katılır, ses/görüntü kaydeder.",
    us: "Yalnızca metni analiz eder. Ses ve görüntü hiç işlenmez, hiç saklanmaz.",
  },
  {
    icon: <Gauge size={22} />,
    title: "HESAP VEREBİLİRLİK",
    them: "Görev listesi çıkarır, takibi tamamen size bırakır.",
    us: "Aksiyonların zamanında tamamlanma oranını izler, ekip güvenilirlik skoru üretir.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "PLATFORM BAĞIMSIZLIĞI",
    them: "Belirli bir video konferans aracına entegrasyon şartı.",
    us: "Zoom, Teams, Meet, hatta kağıda alınmış notlar — hepsiyle çalışır.",
  },
];

export function Difference() {
  return (
    <section id="difference" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="section-label !text-white/40 block mb-6">NEDEN MEETNOTE AI?</span>
            <h2 className="display-lg !text-white leading-[0.9]">
              FARKIMIZ<br />
              <span className="text-[#CCFF2A]">NET.</span>
            </h2>
          </div>
          <div className="md:w-1/3 text-lg font-medium text-white/60 leading-relaxed">
            Piyasadaki toplantı asistanlarının çoğu tek seferlik özetleyicidir. MeetNote AI, toplantılar arasında hafızası olan ve sonucun takibini de üstlenen tek çözüm.
          </div>
        </motion.div>

        {/* Comparison header */}
        <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-6 mb-6 px-6">
          <div />
          <p className="text-white/40 font-heading font-bold text-sm tracking-widest">KLASİK ARAÇLAR</p>
          <p className="text-[#CCFF2A] font-heading font-bold text-sm tracking-widest">MEETNOTE AI</p>
        </div>

        <div className="flex flex-col gap-4">
          {rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-6 items-stretch border border-white/10 rounded-2xl p-6 md:p-8 bg-white/[0.03]"
            >
              <div className="flex items-center gap-3 text-white">
                <span className="text-[#CCFF2A] shrink-0">{row.icon}</span>
                <h3 className="font-heading font-extrabold text-lg tracking-tight">{row.title}</h3>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-white/30 shrink-0 mt-0.5"><X size={18} strokeWidth={3} /></span>
                <p className="text-white/40 font-medium leading-relaxed">{row.them}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-[#CCFF2A] text-[#0A0A0A] rounded-full p-1 shrink-0 mt-0.5"><Check size={14} strokeWidth={3.5} /></span>
                <p className="text-white font-medium leading-relaxed">{row.us}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#7C6AF5]/20 blur-[120px]" />
    </section>
  );
}
