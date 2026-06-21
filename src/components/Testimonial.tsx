import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { photos } from '../config/photos';

const testimonials = [
  {
    quote: 'Aqiqah anak pertama kami berjalan lancar. Gulai kambingnya enak, tidak bau prengus sama sekali. Tamu-tamu sampai minta resepnya. Amanah banget tim Berkah Catering.',
    nama: 'Ayah Farhan',
    label: 'Aqiqah Putra',
    img: photos.testimonial.t1,
  },
  {
    quote: 'Tahlil 40 hari almarhum ibu kami. Berkah Catering bantu segalanya — nasi bungkus 100 porsi, tepat waktu, dan yang bikin haru: tim-nya ikut berdoa bersama kami.',
    nama: 'Keluarga Harun',
    label: 'Tahlilan 40 Hari',
    img: photos.testimonial.t2,
  },
  {
    quote: 'Syukuran khitanan anak laki-laki saya, 150 tamu. Prasmanan tersaji rapi, tim masak sudah ada dari jam 6 pagi, beres sebelum tamu datang. Tidak ada yang keluh kelaparan.',
    nama: 'Ibu Yanti',
    label: 'Khitanan, Padang',
    img: photos.testimonial.t3,
  },
  {
    quote: 'Aqiqah bayi kembar kami — 4 kambing sekaligus. Berkah Catering handle semua tanpa ribet. Sertifikat penyembelihan diberikan, ustadz hadir, semua syar\'i.',
    nama: 'Ayah Ibunda Zahra & Zara',
    label: 'Aqiqah Bayi Kembar',
    img: photos.testimonial.t4,
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(i => (i + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active]!;

  return (
    <section id="testimonial" className="section-pad" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            color: '#2D6A4F',
            lineHeight: 1.25,
          }}>
            Cerita Dari Keluarga Yang Sudah Percaya Kami.
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div style={{ position: 'relative', minHeight: '260px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{
                backgroundColor: '#F5F3EC',
                borderRadius: '20px',
                padding: 'clamp(28px, 4vw, 48px)',
                border: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {/* Quote mark */}
              <div style={{
                fontSize: '56px',
                lineHeight: 1,
                color: '#40916C',
                opacity: 0.25,
                fontFamily: 'Georgia, serif',
                marginBottom: '8px',
              }}>
                "
              </div>

              <p style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: '#1A2E1F',
                lineHeight: 1.75,
                marginBottom: '28px',
                fontStyle: 'italic',
              }}>
                {t.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src={t.img}
                  alt={t.nama}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1A2E1F' }}>{t.nama}</div>
                  <div style={{ fontSize: '13px', color: '#40916C', fontWeight: 600 }}>{t.label}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginTop: '28px' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: active === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '50px',
                  backgroundColor: active === i ? '#40916C' : 'rgba(26,46,31,0.20)',
                  transition: 'all 0.3s ease',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
