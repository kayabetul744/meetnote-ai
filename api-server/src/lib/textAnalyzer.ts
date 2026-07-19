import type { MeetingAnalysis } from "./gemini.js";

// Frequency-based extractive summarization + rule-based decision/action
// tagging. No external API, no network call, no cost — runs entirely on
// this server so the demo works even without a configured LLM key.

const STOPWORDS = new Set([
  "ve", "ile", "bir", "bu", "şu", "o", "da", "de", "ki", "mi", "mı", "mu", "mü",
  "ama", "fakat", "ancak", "çünkü", "için", "gibi", "kadar", "daha", "en", "çok",
  "az", "her", "hiç", "ise", "ya", "veya", "yada", "ne", "nasıl", "neden", "niçin",
  "hangi", "kim", "kimin", "kime", "kimi", "biz", "siz", "ben", "sen", "onlar",
  "olarak", "olan", "oldu", "olur", "olacak", "var", "yok", "değil", "bile",
  "sonra", "önce", "şimdi", "hala", "hâlâ", "artık", "tüm", "bütün", "bazı",
  "diye", "göre", "üzere", "bunun", "şunun", "onun", "bunları", "şunları",
  "onları", "bana", "sana", "ona", "bize", "size", "onlara",
  "the", "a", "an", "and", "or", "to", "of", "in", "on", "at", "is", "are", "was", "were",
]);

const DECISION_PATTERNS = [
  /tamamlandı/i,
  /düzelt(ti|ildi|ildiği)/i,
  /onay(landı|landığı)/i,
  /kabul edildi/i,
  /karar (verildi|alındı)/i,
  /\bbitti\b/i,
  /sonuçlandı/i,
  /imzalandı/i,
  /yayınlandı/i,
  /teslim edildi/i,
  /kapatıldı/i,
  /iptal edildi/i,
  /çözüldü/i,
];

const ACTION_PATTERNS = [
  /üstlenecek/i,
  /yapacak\b/i,
  /yapılacak/i,
  /tamamlayacak/i,
  /tamamlanacak/i,
  /halledecek/i,
  /halledilecek/i,
  /ilgilenecek/i,
  /sorumlu olacak/i,
  /görevlendirildi/i,
  /bakacak/i,
  /çözecek\b/i,
  /çözülecek/i,
  /hazırlayacak/i,
  /hazırlanacak/i,
  /gönderecek/i,
  /gönderilecek/i,
  /inceleyecek/i,
  /incelenecek/i,
  /bitirecek/i,
  /bitirilecek/i,
  /kontrol ed(ecek|eceğim|ilecek)/i,
  /teslim ed(ecek|eceğim|ilecek)/i,
  /takip ed(ecek|eceğim|ilecek)/i,
  /rapor ed(ecek|eceğim|ilecek)/i,
  /devam ed(ecek|eceğim)/i,
];

function splitIntoSentences(text: string): string[] {
  const lines = text
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);

  // Meeting transcripts are usually one line per speaker turn — treat each
  // line as a unit so speaker attribution survives.
  if (lines.length > 1) {
    return lines;
  }

  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function stripSpeaker(sentence: string): string {
  return sentence.replace(/^[\p{L}\s]+:\s*/u, "");
}

function tokenize(sentence: string): string[] {
  return sentence
    .toLocaleLowerCase("tr-TR")
    .replace(/[^\p{L}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

function buildSummary(sentences: string[]): string {
  if (sentences.length === 0) return "";
  if (sentences.length <= 2) return sentences.map(stripSpeaker).join(" ");

  const freq = new Map<string, number>();
  for (const sentence of sentences) {
    for (const word of tokenize(sentence)) {
      freq.set(word, (freq.get(word) ?? 0) + 1);
    }
  }

  const scored = sentences.map((sentence, idx) => {
    const words = tokenize(sentence);
    const score = words.reduce((sum, w) => sum + (freq.get(w) ?? 0), 0) / (words.length || 1);
    return { sentence, idx, score };
  });

  const topCount = Math.min(3, Math.max(2, Math.ceil(sentences.length * 0.3)));
  const top = scored
    .slice()
    .sort((a, b) => b.score - a.score)
    .slice(0, topCount)
    .sort((a, b) => a.idx - b.idx);

  return top.map((s) => stripSpeaker(s.sentence)).join(" ");
}

export function analyzeMeetingTextLocally(text: string): MeetingAnalysis {
  const sentences = splitIntoSentences(text);

  const decisions: string[] = [];
  const actions: string[] = [];

  for (const sentence of sentences) {
    const isAction = ACTION_PATTERNS.some((re) => re.test(sentence));
    const isDecision = !isAction && DECISION_PATTERNS.some((re) => re.test(sentence));

    if (isAction) {
      actions.push(sentence);
    } else if (isDecision) {
      decisions.push(stripSpeaker(sentence));
    }
  }

  return {
    summary: buildSummary(sentences),
    decisions: decisions.slice(0, 6),
    actions: actions.slice(0, 6),
  };
}
