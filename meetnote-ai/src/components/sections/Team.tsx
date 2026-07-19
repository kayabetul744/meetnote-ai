import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Betül Kaya", photo: "team-betul.jpg" },
  { name: "Tunahan Ebrar Çelik", photo: "team-tunahan.jpg" },
  { name: "Yağmur Deveci", photo: "team-yagmur.jpg" },
  { name: "Yusuf Kırman", photo: "team-yusuf.jpg" },
  { name: "Yalın Ege Dalcan", photo: "team-ege.jpg" },
];

export function Team() {
  const base = import.meta.env.BASE_URL;
  return (
    <section id="team" className="py-32 bg-[#E4E0D8] border-t border-[rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 border-t border-[rgba(0,0,0,0.12)] pt-8"
        >
          <span className="section-label block mb-6">EKİBİMİZ</span>
          <h2 className="display-lg leading-[0.9]">
            PROJEYİ<br />
            <span className="text-[#7C6AF5]">YAPANLAR</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              {/* Photo */}
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-[#7C6AF5]/10 border border-[rgba(0,0,0,0.08)] relative">
                {member.photo ? (
                  <img
                    src={`${base}${member.photo}`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl text-[#7C6AF5]/40 font-heading font-black">?</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#7C6AF5]/0 group-hover:bg-[#7C6AF5]/20 transition-colors duration-300" />
              </div>
              {/* Info */}
              <h3 className="font-heading font-extrabold text-base text-[#0A0A0A] leading-tight">{member.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Academy note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 p-8 bg-[#7C6AF5] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white/50 text-xs tracking-widest mb-2">PROJE</p>
            <p className="text-white font-heading font-extrabold text-xl leading-tight">
              Yapay Zeka ve Teknoloji Akademisi<br />
              <span className="text-[#CCFF2A]">Mezuniyet Projesi · 2026</span>
            </p>
          </div>
          <a href="#demo" className="btn-lime shrink-0">
            DEMOYU DENE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}