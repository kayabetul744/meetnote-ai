import React from "react";
import { motion } from "framer-motion";
import { Bot, FileText, Gavel, Edit, Download, Users } from "lucide-react";

const features = [
  {
    icon: <Bot size={20} />,
    title: "AKILLI METİN ANALİZİ",
    desc: "Doğal dil işleme ile konuşma metnini otomatik olarak analiz eder, konuları ve kararları çıkarır.",
    image: `${import.meta.env.BASE_URL}feat-1.jpg`
  },
  {
    icon: <FileText size={20} />,
    title: "ANLIK ÖZET ÇIKARIMI",
    desc: "Uzun metinleri saniyeler içinde özetler, toplantının ana başlıklarını net bir şekilde sunar.",
    image: `${import.meta.env.BASE_URL}feat-2.jpg`
  },
  {
    icon: <Gavel size={20} />,
    title: "KARAR VE AKSİYON ÇIKARMA",
    desc: "Alınan kararları ve kime hangi görevin verildiğini otomatik olarak listeler.",
    image: `${import.meta.env.BASE_URL}feat-3.jpg`
  },
  {
    icon: <Edit size={20} />,
    title: "KOLAY DÜZENLEME",
    desc: "AI çıktılarını düzenleyebilir, yeni görev ekleyebilir veya silebilirsiniz. Tam kontrol sizde.",
    image: `${import.meta.env.BASE_URL}feat-4.jpg`
  },
  {
    icon: <Download size={20} />,
    title: "ÇOKLU DIŞA AKTARIM",
    desc: "Sonuçları PDF, Word veya TXT olarak indirin. Tek tıkla kopyalayıp paylaşın.",
    image: `${import.meta.env.BASE_URL}feat-5.jpg`
  },
  {
    icon: <Users size={20} />,
    title: "EKİP İŞBİRLİĞİ",
    desc: "Toplantı çıktılarını ekip arkadaşlarınızla paylaşın, herkes aynı sayfada olsun.",
    image: `${import.meta.env.BASE_URL}feat-6.jpg`
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-[#E4E0D8]">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[rgba(0,0,0,0.12)] pt-8"
        >
          <div>
            <span className="section-label block mb-6">ÖZELLİKLER</span>
            <h2 className="display-lg leading-[0.9]">
              NELER<br />
              <span className="text-[#7C6AF5]">SUNUYORUZ?</span>
            </h2>
          </div>
          <div className="md:w-1/3 text-lg font-medium text-[#0A0A0A]/70 leading-relaxed">
            MeetNote AI, toplantı notlarınızı anlamlandırmak için altı güçlü özellik sunar. Gereksiz detayları ayıklar, aksiyonları ön plana çıkarır.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.12 }}
              className="group"
            >
              <div className="w-full h-[240px] rounded-xl overflow-hidden mb-6 border border-[rgba(0,0,0,0.08)] bg-black/5">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="ivent-card flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="icon-box text-[#7C6AF5] p-2 bg-white/50 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl tracking-tight text-[#0A0A0A]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#0A0A0A]/70 font-medium leading-relaxed pl-[3.25rem]">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
