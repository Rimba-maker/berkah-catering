import { useState } from 'react';

const testimonials = [
  {
    quote:
      'Aqiqah anak pertama kami berjalan lancar. Gulai kambingnya enak, tidak bau prengus sama sekali. Tamu-tamu sampai minta resepnya. Amanah banget tim Berkah Catering.',
    nama: 'Ayah Farhan',
    label: 'Aqiqah Putra',
  },
  {
    quote:
      'Tahlil 40 hari almarhum ibu kami. Berkah Catering bantu segalanya — nasi bungkus 100 porsi, tepat waktu, dan yang bikin haru: tim-nya ikut berdoa bersama kami.',
    nama: 'Keluarga Harun',
    label: 'Tahlilan 40 Hari',
  },
  {
    quote:
      'Syukuran khitanan anak laki-laki saya, 150 tamu. Prasmanan tersaji rapi, tim masak sudah ada dari jam 6 pagi, beres sebelum tamu datang. Tidak ada yang keluh kelaparan.',
    nama: 'Ibu Yanti',
    label: 'Khitanan, Padang',
  },
  {
    quote:
      "Aqiqah bayi kembar kami — 4 kambing sekaligus. Berkah Catering handle semua tanpa ribet. Sertifikat penyembelihan diberikan, ustadz hadir, semua syar'i.",
    nama: 'Ayah Ibunda Zahra & Zara',
    label: 'Aqiqah Bayi Kembar',
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const t = testimonials[active]!;
  const n = testimonials.length;

  return (
    <section id="testimonial" className="section">
      <div className="container">
        <div className="sec-head">
          <h2>Cerita Dari Keluarga Yang Sudah Percaya Kami.</h2>
        </div>
        <div className="quote__layout">
          <figure className="quote rule-top" style={{ margin: 0 }} aria-live="polite">
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <strong>{t.nama}</strong>
              <span className="small">{t.label}</span>
            </figcaption>
          </figure>
          <nav aria-label="Pilih testimoni">
            <ol className="who">
              {testimonials.map(({ nama, label }, i) => (
                <li key={nama}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={active === i ? 'true' : undefined}
                    aria-label={`Tampilkan testimoni ${i + 1}: ${nama}, ${label}`}
                  >
                    <span>
                      <span style={{ display: 'block', fontWeight: 500 }}>{nama}</span>
                      <span className="small">{label}</span>
                    </span>
                    <span aria-hidden="true">{active === i ? '−' : '+'}</span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="pager">
              <button
                type="button"
                onClick={() => setActive((i) => (i - 1 + n) % n)}
                aria-label="Testimoni sebelumnya"
              >
                Sebelumnya
              </button>
              <button
                type="button"
                onClick={() => setActive((i) => (i + 1) % n)}
                aria-label="Testimoni berikutnya"
              >
                Berikutnya
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
