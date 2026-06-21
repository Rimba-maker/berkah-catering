import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';

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
    a: 'Bisa, dan ini yang kami rekomendasikan untuk aqiqah — masak di lokasi jadi lebih segar. Tim kami bawa peralatan lengkap.',
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
  {
    q: 'Pembayaran via apa?',
    a: 'Transfer bank, QRIS, cash. DP 30% saat konfirmasi.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad" style={{ backgroundColor: '#F5F3EC' }}>
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            color: '#2D6A4F',
            lineHeight: 1.25,
          }}>
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.05)',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 22px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#1A2E1F', lineHeight: 1.4 }}>
                  {q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ flexShrink: 0, color: '#40916C', display: 'flex' }}
                >
                  <CaretDown size={18} weight="bold" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{
                      padding: '0 22px 20px',
                      fontSize: '14px',
                      color: 'rgba(26,46,31,0.70)',
                      lineHeight: 1.7,
                    }}>
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
