import { motion } from 'framer-motion';
import { Medal, Cow, Drop, Certificate } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const trustCards: { icon: Icon; label: string; desc: string }[] = [
  { icon: Medal, label: 'Halal MUI Tersertifikasi', desc: 'Dapur & bahan baku tersertifikasi oleh MUI.' },
  { icon: Cow, label: 'Kambing Sehat & Layak', desc: 'Dicek veteriner, bukan kambing sakit atau cacat.' },
  { icon: Drop, label: 'Standar Kebersihan Dapur', desc: 'HACCP compliant, dicek berkala, higienitas terjaga.' },
  { icon: Certificate, label: 'Sertifikat Penyembelihan', desc: 'Diberikan ke keluarga sebagai bukti syar\'i.' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SertifikasiHalal() {
  return (
    <section id="halal" className="section-pad" style={{ background: '#1B3A2D' }}>
      <div className="max-w-6xl mx-auto">

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
            color: '#ffffff',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Halal. Bersih. Amanah.
          </h2>
          <p className="max-w-xl mx-auto" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.70)', lineHeight: 1.75 }}>
            Kami memahami bahwa aqiqah dan syukuran adalah ibadah — bukan sekadar makan-makan.
            Karena itu, kami pastikan setiap proses memenuhi standar syariah dan kebersihan.
          </p>
        </motion.div>

        {/* 1 col mobile → 2 col tablet → 4 col desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {trustCards.map(({ icon: ItemIcon, label, desc }) => (
            <motion.div
              key={label}
              variants={card}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '16px',
                padding: '28px 24px',
              }}
            >
              <span style={{ color: '#C9A84C', display: 'block', marginBottom: '16px' }}>
                <ItemIcon size={32} weight="regular" />
              </span>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#C9A84C', marginBottom: '8px', lineHeight: 1.4 }}>
                {label}
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
