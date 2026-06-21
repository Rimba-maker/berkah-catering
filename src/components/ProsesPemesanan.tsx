import { motion } from 'framer-motion';
import { ChatCircle, ClipboardText, ShoppingBag, ForkKnife } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const steps: { no: string; icon: Icon; label: string; desc: string }[] = [
  {
    no: '01',
    icon: ChatCircle,
    label: 'Konsultasi (Gratis)',
    desc: 'Ceritakan acara, tanggal, jumlah tamu, dan budget. Kami bantu tentukan paket yang pas.',
  },
  {
    no: '02',
    icon: ClipboardText,
    label: 'Konfirmasi & DP',
    desc: 'Setelah sepakat, DP 30% untuk booking tanggal. Sisa dilunasi H-3.',
  },
  {
    no: '03',
    icon: ShoppingBag,
    label: 'Persiapan H-1',
    desc: 'Kami belanja bahan segar, persiapkan bumbu, dan cek kambing pilihan.',
  },
  {
    no: '04',
    icon: ForkKnife,
    label: 'Hari H',
    desc: 'Tim datang pagi, masak fresh di lokasi Anda, hidangan tersaji tepat waktu.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const step = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProsesPemesanan() {
  return (
    <section id="proses" className="section-pad" style={{ background: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            color: '#2D6A4F',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Pesan Mudah, Acara Berkah.
          </h2>
        </motion.div>

        {/* 2 col mobile → 4 col desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {steps.map(({ no, icon: StepIcon, label, desc }) => (
            <motion.div key={no} variants={step} className="text-center">
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(64,145,108,0.10)',
                border: '2px solid rgba(64,145,108,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                position: 'relative',
                color: '#40916C',
              }}>
                <StepIcon size={24} weight="regular" />
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#40916C',
                  color: 'white',
                  fontSize: '11px',
                  fontWeight: 700,
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {no.slice(1)}
                </span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1A2E1F', marginBottom: '8px', lineHeight: 1.3 }}>
                {label}
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(26,46,31,0.60)', lineHeight: 1.65 }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#konsultasi"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#40916C',
              color: 'white',
              fontWeight: 600,
              fontSize: '16px',
              padding: '14px 36px',
              borderRadius: '50px',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
              minHeight: '44px',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2D6A4F'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#40916C'; }}
          >
            Mulai Konsultasi Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
