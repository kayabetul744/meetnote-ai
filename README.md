# Yapay Zeka Destekli Toplantı Notları Uygulaması

## Takım İsmi
Takım 55

## Ürün İle İlgili Bilgiler

### Takım Elemanları
- Yusuf Kirman: Scrum Master
- Yalın Ege Dalcan: Product Owner
- Tunahan Ebrar Çelik: Developer
- Yağmur Deveci: Developer
- Betül Kaya: Developer

![Takım — Projeyi Yapanlar](docs/images/screenshot-team.png)

## Ürün İsmi
-- MeetNote AI --

## Ürün Açıklaması
MeetNote AI, toplantı notlarını yapay zeka desteğiyle özetleyen web tabanlı bir uygulamadır. Kullanıcılar toplantı metinlerini veya notlarını sisteme girerek toplantı özeti, alınan kararlar ve aksiyon maddelerini hızlı bir şekilde görüntüleyebilir. Bu sayede toplantı sonrası not çıkarma süreci daha düzenli, hızlı ve verimli hale getirilir.

## Canlı Site
🔗 **[meetnote.site](https://meetnote.site)**

![MeetNote AI canlı demo ekranı](docs/images/screenshot-demo.png)

## Ürün Özellikleri
- Toplantı notu veya transkript girişi yapabilme
- Yapay zeka destekli toplantı özeti oluşturma
- Toplantıda alınan kararları listeleme
- Aksiyon maddelerini çıkarma
- Görev ve sorumlu kişi takibi yapabilme
- Kullanıcı dostu web arayüzü
- Toplantı çıktısını kopyalama veya düzenleme

## Farkımız
Piyasadaki toplantı asistanlarının büyük çoğunluğu **tek seferlik özetleyicidir**: bir toplantıyı özetler ve unutur. MeetNote AI'ı farklı kılan dört temel nokta:

| | Klasik Araçlar | MeetNote AI |
|---|---|---|
| **Toplantı Hafızası** | Her toplantı sıfırdan değerlendirilir, geçmiş unutulur. | Geçmiş kararları hatırlar; yeni toplantıda çelişki ve tekrarları otomatik yakalar. |
| **Gizlilik** | Toplantıya bot olarak katılır, ses/görüntü kaydeder. | Yalnızca metni analiz eder — ses ve görüntü hiç işlenmez, hiç saklanmaz. |
| **Hesap Verebilirlik** | Görev listesi çıkarır, takibi kullanıcıya bırakır. | Aksiyonların zamanında tamamlanma oranını izler, ekip güvenilirlik skoru üretir. |
| **Platform Bağımsızlığı** | Belirli bir video konferans aracına entegrasyon şartı. | Zoom, Teams, Meet, hatta kağıda alınmış notlar — hangi kaynaktan gelirse gelsin metinle çalışır. |

![MeetNote AI Farkımız karşılaştırması](docs/images/screenshot-difference.png)

Bu farkların en somut sonucu **gizlilik ve maliyet** tarafında: MeetNote AI hiçbir ses/görüntü kaydı almadığı ve kendi sunucumuzda çalışan ücretsiz bir NLP motoru kullandığı için, üçüncü parti bir yapay zeka servisine bağımlı olmadan, KVKK/GDPR dostu ve sürdürülebilir şekilde çalışır (bkz. [Kullanılan Teknolojiler ve Mimari](#kullanılan-teknolojiler-ve-mimari)).

## Hedef Kitle
- Öğrenci proje ekipleri
- Yazılım geliştirme ekipleri
- Scrum / Agile takımları
- Start-up ekipleri
- Online toplantı yapan kullanıcılar
- Toplantı sonrası hızlı rapor almak isteyen ekipler

## Product Backlog URL
Notion Backlog Board:  
https://www.notion.so/Yapay-Zeka-ve-Teknoloji-Akademisi-BOOTCAMP-c6f1b456849c8217a86f01f787907c5e?source=copy_link

---

# Sprint 1

## Sprint Notları
Sprint 1 kapsamında ürün fikrinin netleştirilmesi, proje yönetim sürecinin oluşturulması ve geliştirme için gerekli temel hazırlıkların yapılması hedeflenmiştir. Bu sprintte ana amaç, ürünün kapsamını belirlemek, takım içi iletişim düzenini oluşturmak, backlog yapısını hazırlamak ve geliştirme sürecine başlamadan önce gerekli planlamaları tamamlamaktır.

## Sprint 1 Goal
Sprint 1’in hedefi; projenin kapsamını belirlemek, user story’leri oluşturmak, backlog düzenini hazırlamak, kullanılacak teknoloji stack’ine karar vermek ve GitHub proje yapısını oluşturmaktır.

## Backlog Düzeni ve Story Seçimleri
Backlog’umuz, projenin ilk aşamada ihtiyaç duyduğu temel işlere göre düzenlenmiştir. Sprint 1 için seçilen işler daha çok planlama, proje hazırlığı, takım organizasyonu ve teknik altyapı kurulumuna yöneliktir.

Story’ler yapılacak işlere yani task’lere bölünmüştür. Board üzerinde görevler “To-do”, “In progress” ve “Complete” kolonlarıyla takip edilmektedir. Böylece ekip üyeleri hangi görevin beklediğini, hangisinin devam ettiğini ve hangisinin tamamlandığını rahatça görebilmektedir.

## Sprint 1 İçin Seçilen Görevler

### To-do
- Teknoloji Stack’inin Belirlenmesi
- Wireframe Tasarımı
- Product Backlog Oluşturulması

### In Progress
- Sprint Review için Demo Planı Hazırlanması
- GitHub Düzenlenmesi
- User Story’lerin Yazılması
- Proje Kapsamının Belirlenmesi

### Complete
- GitHub Repository Açılması
- Aktarım için toplantı
- İletişim kanalı seçilmesi

---

## Daily Scrum
Daily Scrum toplantılarının ekip üyelerinin uygunluk durumuna göre çevrim içi iletişim kanalı üzerinden yapılmasına karar verilmiştir. Bu toplantılarda ekip üyeleri yaptıkları işleri, o gün üzerinde çalışacakları görevleri ve karşılaştıkları engelleri paylaşmaktadır.

Daily Scrum sürecinde aşağıdaki sorular üzerinden ilerlenmiştir:

- Dün ne yaptım?
- Bugün ne yapacağım?
- Önümde bir engel var mı?

### Daily Scrum Ekran Görüntüleri

Aşağıda Sprint 1 sürecinde yapılan Daily Scrum konuşmalarına ait ekran görüntüsü yer almaktadır.


<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/ee091912-fad8-4da3-9cd7-1066752afb97" />
<img width="995" height="965" alt="image" src="https://github.com/user-attachments/assets/05e259a4-4adb-4b65-b8bd-6807dce9bd77" />

---

## Sprint Board Update
Sprint board düzenli olarak güncellenmiştir. Görevlerin durumları aşağıdaki kolonlarda takip edilmiştir:

- To-do
- In progress
- Complete

Sprint board üzerinde görevler ekip üyelerine atanmış ve her görevin kategorisi belirlenmiştir. Agile, backend, frontend, yapay zeka ve diğer kategoriler kullanılarak işler daha düzenli hale getirilmiştir.

### Sprint Board Screenshot

Aşağıda Sprint 1’e ait güncel sprint board ekran görüntüsü yer almaktadır.

<img width="1205" height="1025" alt="Sprint 1 Board Screenshot" src="https://github.com/user-attachments/assets/782c8be3-9890-4165-a0eb-30b72ad2c0dd" />

---

## Ürün Durumu
Sprint 1 sonunda ürünün temel fikri, hedef kitlesi ve geliştirme süreci netleştirilmeye başlanmıştır. Bu sprintte henüz tam çalışan bir ürün hedeflenmemiştir. Asıl amaç, Sprint 2’de geliştirilecek web tabanlı uygulama için gerekli planlama ve teknik hazırlıkları tamamlamaktır.

Bu nedenle Sprint 1 ürün durumu kapsamında ürünün ilk taslak arayüzü / wireframe çalışması paylaşılmıştır.

### Ürün Görselleri



<img width="1558" height="968" alt="image" src="https://github.com/user-attachments/assets/2ba200b1-b191-48e1-962a-603bfd2b3e77" />
<img width="1568" height="897" alt="image" src="https://github.com/user-attachments/assets/c12b0e2e-19a9-438a-a14a-2cc2284a0ae7" />

<img width="1738" height="999" alt="image" src="https://github.com/user-attachments/assets/c2f5cae5-6fa5-4c0c-8d09-3f9b53fb81a3" />

*Yukarıdaki görseller Sprint 1'deki ilk taslak/wireframe çalışmasına aittir. Sprint 2'de geliştirilen güncel ürünün ekran görüntüleri için bkz. [Güncel Ürün Görselleri](#güncel-ürün-görselleri-sprint-2).*

---

## Sprint Review
Sprint Review toplantısında Sprint 1 boyunca yapılan işler değerlendirilmiştir. GitHub repository’nin açılması, iletişim kanalının belirlenmesi ve proje aktarım toplantısının tamamlanması olumlu bulunmuştur. Devam eden görevlerin Sprint 1 sonunda tamamlanması ve Sprint 2’ye daha hazır bir şekilde geçilmesi hedeflenmiştir.

Alınan kararlar:

- Projenin web tabanlı geliştirilmesine karar verilmiştir.
- İlk aşamada toplantı notlarının metin olarak sisteme girilmesine karar verilmiştir.
- Yapay zeka çıktısı olarak toplantı özeti, kararlar ve aksiyon maddelerinin gösterilmesi planlanmıştır.
- Ses kaydı yükleme özelliğinin sonraki sprintlerde değerlendirilmesine karar verilmiştir.
- Sprint 2’de temel frontend ekranlarının ve yapay zeka entegrasyonunun geliştirilmesine karar verilmiştir.
- GitHub düzeninin tamamlanması ve görev takibinin board üzerinden yapılması kararlaştırılmıştır.

Sprint Review katılımcıları:

- Yusuf Kirman
- Tunahan Ebrar Çelik
- Yalın Ege Dalcan
- Yağmur Deveci
- Betül Kaya

---

## Sprint Retrospective
Sprint sonunda ekip içi çalışma süreci değerlendirilmiştir. İlk sprintte görev dağılımının genel olarak yapıldığı, fakat bazı görevlerin hâlâ devam ettiği görülmüştür. Bu nedenle bir sonraki sprintte görevlerin daha erken tamamlanması ve board güncellemelerinin daha düzenli yapılması gerektiğine karar verilmiştir.

Alınan kararlar:

- Görev dağılımı daha net yapılmalıdır.
- Her görev için sorumlu kişi board üzerinde belirtilmelidir.
- Sprint içindeki görev durumları düzenli olarak güncellenmelidir.
- Daily Scrum notları daha düzenli tutulmalıdır.
- Sprint 2’de geliştirme ve ürün çıktısına daha fazla odaklanılmalıdır.
- Frontend, backend ve yapay zeka görevleri daha net ayrılmalıdır.

---

# Güncel Ürün Görselleri (Sprint 2)

Sprint 1'deki wireframe'lerden geliştirilen, [meetnote.site](https://meetnote.site) adresinde canlı yayında olan güncel ürünün ekran görüntüleri.

![Hakkında bölümü](docs/images/screenshot-about.png)

![Özellikler bölümü](docs/images/screenshot-features.png)

![Nasıl çalışır bölümü](docs/images/screenshot-howitworks.png)

---

# Kullanılan Teknolojiler ve Mimari

## Klasörler
- `meetnote-ai/` — React + Vite frontend (site arayüzü)
- `api-server/` — Express backend (`/api/analyze` uç noktası, toplantı metnini analiz eder)

## Mimari Genel Bakış

```
┌────────────────────┐        /api/*        ┌──────────────────────┐
│   meetnote-ai       │  ───────────────────▶ │     api-server        │
│   (React + Vite)    │   Vercel rewrite /    │   (Node + Express)     │
│   Vercel — Statik   │   Vite dev proxy       │   Render — Web Service │
└────────────────────┘                        └───────────┬───────────┘
        ▲                                                  │
        │ https://meetnote.site                            ▼
   Kullanıcı                                    ┌───────────────────────┐
                                                 │  Yapay Zeka Katmanı    │
                                                 │  ─────────────────    │
                                                 │  GEMINI_API_KEY varsa: │
                                                 │  Google Gemini (ücr.)  │
                                                 │  Yoksa / başarısızsa:  │
                                                 │  Yerel NLP motoru      │
                                                 │  (textAnalyzer.ts)     │
                                                 └───────────────────────┘
```

İstek akışı: Kullanıcı `meetnote.site`'a girer → frontend statik olarak Vercel'den servis edilir → "Analiz Et" tıklandığında tarayıcı `/api/analyze`'a istek atar → Vercel bu isteği `vercel.json` içindeki rewrite kuralıyla Render'daki `api-server`'a yönlendirir → sunucu metni analiz edip `{ summary, decisions, actions }` JSON'unu döner.

## Frontend — `meetnote-ai/`
- **React 19** + **TypeScript** — bileşen tabanlı arayüz
- **Vite 7** — geliştirme sunucusu ve production build aracı
- **Tailwind CSS 4** — utility-first stil sistemi
- **Framer Motion** — scroll-tetiklemeli animasyonlar
- **Radix UI tabanlı bileşen kütüphanesi** (shadcn tarzı) — erişilebilir UI primitifleri (dialog, tabs, tooltip vb.)
- Barındırma: **Vercel** (statik site + `/api/*` rewrite ile backend'e proxy)

## Backend — `api-server/`
- **Node.js** + **Express 5** — HTTP sunucusu ve `/api` router'ı
- **TypeScript** — tip güvenliği
- **Zod** — istek gövdesi doğrulama (`POST /api/analyze` için `text` alanı zorunlu, maksimum 20.000 karakter)
- **Pino** — yapılandırılmış (structured) loglama
- **express-rate-limit** — `/api/analyze` uç noktasını IP başına 10 dakikada 20 istekle sınırlar, paylaşılan ücretsiz AI kotasının kötüye kullanımını engeller
- Barındırma: **Render.com** (ücretsiz Web Service katmanı)

## Yapay Zeka Katmanı
İki motorlu, otomatik geçişli bir tasarım:

1. **Google Gemini (isteğe bağlı, ücretsiz katman)** — `GEMINI_API_KEY` ortam değişkeni tanımlıysa kullanılır, en yüksek kaliteli sonucu verir.
2. **Yerel NLP motoru** (`api-server/src/lib/textAnalyzer.ts`) — anahtar tanımlı değilse veya Gemini isteği herhangi bir sebeple başarısız olursa **otomatik olarak** devreye girer. Frekans tabanlı çıkarımsal özetleme (extractive summarization) ve Türkçe karar/aksiyon kalıp eşleştirmesi kullanır; hiçbir dış servise, API anahtarına veya internet bağlantısına ihtiyaç duymadan sunucu içinde çalışır.

Bu tasarımın sonucu: proje **hiçbir zaman "AI çalışmıyor" hatası vermez** ve hiç kimseye asla ücret yansımaz — ne bizim altyapımıza ne de kullanıcıya.

## Kurulum (Yerel Geliştirme)

```bash
# Frontend
cd meetnote-ai
npm install
npm run dev   # http://localhost:5173

# Backend (ayrı bir terminalde)
cd api-server
npm install
cp .env.example .env
npm run dev   # http://localhost:8080
```

Frontend, Vite dev proxy ile `/api/*` isteklerini otomatik olarak backend'e yönlendirir; production'da bu işi `meetnote-ai/vercel.json` içindeki rewrite kuralı yapar. Ücretsiz bir Gemini anahtarı almak isterseniz `api-server/README.md` dosyasına bakın (tamamen isteğe bağlıdır).
