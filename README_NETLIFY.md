# Uçmakdere Paraşüt - Netlify2 Sürümü

## Özellikler
- Sadece HTML, CSS ve JS
- Galeri ve About bölümlerinde **ikonlu placeholder** (görsel sorunu yok)
- Responsive ve modern tasarım
- Netlify ile anında yayına hazır

## Kurulum
1. Bu klasördeki tüm dosyaları GitHub'a yükleyin (index.html, styles.css, README_NETLIFY.md).
2. Netlify'da yeni bir site oluşturun veya mevcut siteyi bu klasöre yönlendirin.
3. **Publish directory** olarak `netlify2` seçin.
4. Build command boş bırakılmalı.

## Galeri Hakkında
- Galeri kısmında **hiçbir görsel dosyası yoktur**.
- Tüm görseller yerine Font Awesome ikonları kullanılmıştır.
- Kırık resim veya şeffaflık sorunu yaşanmaz.

## Hızlı Test
- GitHub'a push ettikten sonra Netlify otomatik olarak günceller.
- Sitenizi açın, galeri ve about bölümlerinde ikonlar düzgün görünüyorsa her şey tamam!

## Sorun mu var?
- index.html ve styles.css dosyalarını tekrar kontrol edin.
- Galeri kısmında `<img ...>` etiketi olmamalı, sadece `<div class="gallery-placeholder">...</div>` olmalı.
- Takıldığınızda bu dosyayı referans alın veya bana tekrar ulaşın. 