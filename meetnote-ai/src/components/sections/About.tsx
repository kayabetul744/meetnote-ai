import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-[#E4E0D8]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: AI Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[55%] blob-purple overflow-hidden aspect-square lg:aspect-[4/3] relative flex items-center justify-center"
          >
            <img 
              src={`${import.meta.env.BASE_URL}ai-about.jpg`}
              alt="AI Abstract Brain"
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
              onError={(e) => {
                // Fallback style if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[45%]"
          >
            <span className="section-label mb-6 block">PROJE HAKKINDA</span>
            <h2 className="display-lg !text-[clamp(2rem,5vw,3rem)] leading-tight mb-8">
              TEKNOLOJİ AKADEMİSİ'NDEN<br />DOĞAN BİR FİKİR
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-[#0A0A0A] text-xl md:text-2xl font-extrabold leading-snug border-l-4 border-[#7C6AF5] pl-5">
                MeetNote AI, Yapay Zeka ve Teknoloji Akademisi kapsamında geliştirilen bir mezuniyet projesidir. Ekipler arası iletişim verimliliğini artırmak amacıyla, en güncel doğal dil işleme teknolojileri kullanılarak hayata geçirilmiştir.
              </p>
              <p className="text-[#0A0A0A]/70 text-lg font-medium leading-relaxed">
                Proje, toplantı kültürünü dönüştürmeyi ve zaman kayıplarını minimize etmeyi hedeflemektedir.
              </p>
            </div>
            <a href="#features" className="btn-lime">
              DAHA FAZLA →
            </a>
          </motion.div>

        </div>

        {/* Intro Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="mt-16"
        >
          <span className="section-label mb-6 block">TANITIM VİDEOSU</span>
          <video
            src={`${import.meta.env.BASE_URL}yzta-tanitim.mp4`}
            controls
            playsInline
            className="w-full rounded-2xl border border-[rgba(0,0,0,0.1)] bg-black"
          />
        </motion.div>
      </div>
    </section>
  );
}
