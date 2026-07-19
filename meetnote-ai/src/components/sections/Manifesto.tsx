import React from "react";
import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section className="bg-[#CCFF2A] py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-[#0A0A0A] font-heading font-black leading-[0.92] tracking-[-0.04em]"
             style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}>
            Toplantılar<br />
            bitmeli,<br />
            <span style={{ color: '#7C6AF5' }}>aksiyonlar</span><br />
            başlamalı.
          </p>
          <div className="mt-16 pt-8 border-t border-[rgba(0,0,0,0.15)] flex flex-col md:flex-row justify-between items-start gap-6">
            <p className="text-[#0A0A0A]/60 font-medium text-lg max-w-md leading-relaxed">
              MeetNote AI, toplantı sonrası kayıp zamanı ortadan kaldırmak için tasarlandı. Teknoloji Akademisi'nde doğdu, gerçek ekip ihtiyaçlarından büyüdü.
            </p>
            <a href="#demo" className="btn-dark-outline shrink-0 self-center">
              DEMOYU DENE →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}