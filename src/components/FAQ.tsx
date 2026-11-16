import { useState } from 'react';
import Photo from './Photo';

const faqs = [
  {
    q: 'Berapa usia maksimal untuk aqiqah?',
    a: 'Idealnya di hari ke-7, 14, atau 21 setelah kelahiran. Namun boleh dilakukan kapan saja selama belum aqiqah, bahkan saat anak sudah besar.',
  },
  {
    q: 'Apakah bisa request menu selain yang tertera?',
    a: 'Bisa! Kami menerima request menu. Hubungi kami minimal H-5 untuk ketersediaan bahan.',
  },
  {
    q: 'Apakah bisa masak di rumah saya?',
    a: 'Bisa, dan ini yang kami rekomendasikan untuk aqiqah: masak di lokasi jadi lebih segar. Tim kami bawa peralatan lengkap.',
  },
  {
    q: 'Apakah ada ustadz yang mendampingi aqiqah?',
    a: 'Ada sebagai add-on. Ustadz kami memimpin doa, akad aqiqah, dan pembacaan nama bayi. Biaya terpisah Rp 350k.',
  },
  {
    q: 'Bagaimana jika jumlah tamu berubah mendadak?',
    a: 'Hubungi kami H-2, kami usahakan sesuaikan. Untuk pengurangan jumlah terlalu drastis, ada biaya minimal yang tetap berlaku.',
  },
  {
    q: 'Apakah bisa pesan hanya kambingnya saja (tanpa catering)?',
    a: 'Bisa. Kami jual kambing aqiqah siap sembelih saja. Hubungi untuk harga.',
  },
  { q: 'Pembayaran via apa?', a: 'Transfer bank, QRIS, cash. DP 30% saat konfirmasi.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section band-2">
      <div className="container faq__layout">
        <div className="faq__side">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <h2>Pertanyaan yang Sering Ditanyakan</h2>
          </div>
          <div>
            <Photo id="39931476" slot="faq" pos="60% 50%" sizes="(min-width: 60rem) 30vw, 100vw" />
            <span className="cap">Tangan ibu dan bayi, foto ilustrasi.</span>
          </div>
        </div>
        <div className="faq__list">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            const panelId = `faq-answer-${i}`;
            return (
              <article key={q}>
                <h3 style={{ font: 'inherit', maxWidth: 'none' }}>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{q}</span>
                    <span className="mark" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div id={panelId} role="region" aria-label={q} className="faq__a">
                    <p>{a}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
