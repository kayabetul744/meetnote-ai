import { Router, type IRouter } from "express";
import { z } from "zod";
import { analyzeMeetingText as analyzeWithGemini } from "../lib/gemini.js";
import { analyzeMeetingTextLocally } from "../lib/textAnalyzer.js";

const router: IRouter = Router();

const AnalyzeRequestSchema = z.object({
  text: z
    .string()
    .min(1, "text alanı boş olamaz.")
    .max(20000, "text alanı çok uzun (maksimum 20.000 karakter)."),
});

router.post("/analyze", async (req, res) => {
  const parsed = AnalyzeRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues[0]?.message ?? "Geçersiz istek." });
    return;
  }

  // If a Gemini key is configured, prefer it for higher-quality output.
  // Otherwise — or if the call fails for any reason (quota, network,
  // provider-side blocking, etc.) — fall back to the local, dependency-free
  // NLP engine so the demo never breaks for the end user.
  if (process.env.GEMINI_API_KEY) {
    try {
      const result = await analyzeWithGemini(parsed.data.text);
      res.json({ ...result, engine: "gemini" });
      return;
    } catch (err) {
      req.log?.warn({ err }, "Gemini analizi başarısız oldu, yerel motora geçiliyor");
    }
  }

  try {
    const result = analyzeMeetingTextLocally(parsed.data.text);
    res.json({ ...result, engine: "local" });
  } catch (err) {
    req.log?.error({ err }, "Toplantı metni analiz edilemedi");
    res.status(500).json({ error: "Metin analiz edilirken beklenmeyen bir hata oluştu." });
  }
});

export default router;
