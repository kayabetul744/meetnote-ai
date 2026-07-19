import React, { useState } from "react";
import { motion } from "framer-motion";

const defaultInput = `Ahmet: Login ekranındaki hata düzeltildi.
Ayşe: Ödeme sistemi hala test ortamında çalışıyor.
Mehmet: Mobil uygulamada bildirim problemi devam ediyor.
Ahmet: Bu hafta ödeme sistemi tamamlanacak.
Ayşe: Mobil bildirimi Mehmet üstlenecek.`;

interface AnalysisResult {
  summary: string;
  decisions: string[];
  actions: string[];
}

export function LiveDemo() {
  const [inputText, setInputText] = useState(defaultInput);
  const [isLoading, setIsLoading] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error ?? `Sunucu hatası (${res.status})`);
      }

      setResults({
        summary: data.summary || "Özet bulunamadı.",
        decisions: data.decisions?.length ? data.decisions : ["Karar bulunamadı."],
        actions: data.actions?.length ? data.actions : ["Aksiyon bulunamadı."],
      });
      setHasRun(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu.");
      setHasRun(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-32 bg-[#7C6AF5]">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="inline-block bg-[#CCFF2A] text-[#0A0A0A] font-bold text-xs tracking-widest px-3 py-1 rounded-full mb-6">
            CANLI DEMO
          </span>
          <h2 className="display-lg !text-white leading-[0.9]">
            KENDİNİZ<br />DENEYİN
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#E4E0D8] rounded-2xl p-6 md:p-8 flex flex-col"
          >
            <label className="font-heading font-black text-xl tracking-tight text-[#0A0A0A] mb-4">
              METİN GİRİŞİ
            </label>
            <textarea
              className="w-full bg-white/50 border border-[#0A0A0A]/10 rounded-xl p-4 text-[#0A0A0A] focus:outline-none focus:border-[#7C6AF5] resize-none h-[300px] font-sans text-base leading-relaxed mb-6"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              spellCheck={false}
            />
            <button
              className="btn-lime w-full py-4 text-lg"
              onClick={handleAnalyze}
              disabled={isLoading || !inputText.trim()}
            >
              {isLoading ? "ANALİZ EDİLİYOR..." : "ANALİZ ET"}
            </button>
          </motion.div>

          {/* Output Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 border-b border-[#0A0A0A]/10 pb-4">
              <h3 className="font-heading font-black text-xl tracking-tight text-[#0A0A0A]">
                AI ÇIKTISI
              </h3>
              {isLoading && <span className="text-xs font-bold text-[#7C6AF5] animate-pulse">İŞLENİYOR</span>}
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium leading-relaxed">
                {error}
              </div>
            )}

            {!hasRun && !error && !isLoading && (
              <div className="flex-1 flex items-center justify-center text-center text-[#0A0A0A]/40 font-medium py-12">
                Sonuçları görmek için soldaki metni analiz edin.
              </div>
            )}

            {results && (
              <div className={`space-y-8 flex-1 transition-opacity duration-300 ${isLoading ? 'opacity-30' : 'opacity-100'}`}>

                <div>
                  <h4 className="font-heading font-extrabold text-[#7C6AF5] tracking-wider mb-2">ÖZET</h4>
                  <p className="text-[#0A0A0A]/80 font-medium leading-relaxed border-l-4 border-[#7C6AF5] pl-4">
                    {results.summary}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-extrabold text-[#7C6AF5] tracking-wider mb-3">KARARLAR</h4>
                  <ul className="space-y-3">
                    {results.decisions.map((decision, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#0A0A0A] font-medium bg-[#E4E0D8]/50 p-4 rounded-lg">
                        <span className="text-[#7C6AF5] font-black shrink-0">✓</span>
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-extrabold text-[#7C6AF5] tracking-wider mb-3">AKSİYONLAR</h4>
                  <ul className="space-y-3">
                    {results.actions.map((action, idx) => {
                      const parts = action.split(':');
                      return (
                        <li key={idx} className="flex items-start gap-3 text-[#0A0A0A] font-medium bg-[#CCFF2A]/20 p-4 rounded-lg">
                          <span className="text-[#0A0A0A] font-black shrink-0">→</span>
                          <span>
                            {parts.length > 1 ? (
                              <>
                                <strong className="text-[#0A0A0A]">{parts[0]}</strong>: {parts.slice(1).join(':')}
                              </>
                            ) : action}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
