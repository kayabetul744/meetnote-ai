# MeetNote AI — API Server

Toplantı metnini gerçek yapay zeka ile (Google Gemini, ücretsiz katman) analiz eden küçük bir Express servisi.

## Kurulum

```bash
npm install
cp .env.example .env
```

`.env` dosyasını açıp `GEMINI_API_KEY` alanını doldurun:

1. https://aistudio.google.com/apikey adresine gidin (Google hesabınızla giriş yapın).
2. "Create API key" deyin — kredi kartı istemez.
3. Anahtarı `.env` dosyasındaki `GEMINI_API_KEY=` satırına yapıştırın.
4. **Faturalandırmayı (billing) etkinleştirmeyin.** Böylece ücretsiz kotanın üzerine asla ücret yansımaz; kota dolduğunda istekler sadece hata döner, kimseye fatura kesilmez.

## Çalıştırma

```bash
npm run dev
```

Sunucu `http://localhost:8080` üzerinde ayağa kalkar.

- `GET /api/healthz` — sağlık kontrolü
- `POST /api/analyze` — `{ "text": "..." }` gönderin, `{ summary, decisions, actions }` döner

`meetnote-ai` frontend'i (Vite dev proxy ile) `/api/*` isteklerini otomatik olarak bu sunucuya yönlendirir — ayrıca bir yapılandırma gerekmez.

## Kötüye kullanım koruması

`/api/analyze` uç noktası IP başına 10 dakikada 20 istekle sınırlıdır (`express-rate-limit`). Bu, herkese açık bir demo linkinin paylaşılan ücretsiz Gemini kotasını tek bir kötü niyetli kullanıcı tarafından tüketilmesini engeller.

## Üretime (production) ücretsiz dağıtım

Bu servis herhangi bir Node.js barındırma platformunda ücretsiz katmanla çalışır, örneğin:

- **Render.com** — "Web Service", ücretsiz katman, `npm run build` / `npm start`, ortam değişkeni olarak `GEMINI_API_KEY` ekleyin.
- **Railway.app** — benzer şekilde ücretsiz katman mevcuttur.
- **Fly.io** — ücretsiz katman mevcuttur.

Frontend'i (meetnote-ai) statik olarak Vercel/Netlify/GitHub Pages'te barındırıp, bu API'nin URL'sini frontend'e `API_SERVER_URL` build-time değişkeni ile ya da reverse-proxy kuralıyla bağlayabilirsiniz.
