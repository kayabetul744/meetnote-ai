const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models";

export interface MeetingAnalysis {
  summary: string;
  decisions: string[];
  actions: string[];
}

const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    summary: { type: "STRING" },
    decisions: { type: "ARRAY", items: { type: "STRING" } },
    actions: { type: "ARRAY", items: { type: "STRING" } },
  },
  required: ["summary", "decisions", "actions"],
};

function buildPrompt(text: string): string {
  return `Aşağıda bir toplantı metni / konuşma dökümü verilmiştir. Bu metni analiz et ve şu üç bilgiyi çıkar:

1. "summary": Toplantının 2-3 cümlelik net ve akıcı bir özeti (Türkçe).
2. "decisions": Toplantıda alınan somut kararların listesi, kısa ve net cümleler halinde (Türkçe).
3. "actions": Kime hangi görevin verildiğini belirten aksiyon maddeleri, mümkün olduğunca "İsim: görev" formatında (Türkçe).

Metinde karar veya aksiyon yoksa ilgili alanı boş dizi ([]) olarak döndür. Sadece istenen JSON'u döndür, ekstra açıklama, markdown ya da kod bloğu ekleme.

Toplantı metni:
"""
${text}
"""`;
}

export async function analyzeMeetingText(text: string): Promise<MeetingAnalysis> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY tanımlı değil. Ücretsiz bir anahtarı https://aistudio.google.com/apikey adresinden alıp .env dosyasına ekleyin.",
    );
  }

  const model = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";

  const res = await fetch(`${GEMINI_API_URL}/${model}:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: buildPrompt(text) }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: RESPONSE_SCHEMA,
        temperature: 0.3,
      },
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Gemini API hatası (${res.status}): ${errBody.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!raw) {
    throw new Error("Gemini API boş bir yanıt döndürdü.");
  }

  const parsed = JSON.parse(raw) as Partial<MeetingAnalysis>;
  return {
    summary: typeof parsed.summary === "string" ? parsed.summary : "",
    decisions: Array.isArray(parsed.decisions) ? parsed.decisions.map(String) : [],
    actions: Array.isArray(parsed.actions) ? parsed.actions.map(String) : [],
  };
}
