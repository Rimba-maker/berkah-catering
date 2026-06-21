import { motion } from 'framer-motion';
import { Leaf, Check } from '@phosphor-icons/react';
import { photos } from '../config/photos';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const TRUST_BADGES = [
  'Halal MUI Tersertifikasi',
  '500+ Aqiqah Sukses',
  'Kambing Sehat & Bersih',
  'Masak Hari H, Selalu Segar',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${photos.hero}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27,58,45,0.65)' }} />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-5 py-28 w-full max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              backgroundColor: 'rgba(201,168,76,0.18)',
              border: '1px solid rgba(201,168,76,0.40)',
              color: '#C9A84C',
            }}
          >
            <Leaf size={13} weight="bold" />
            Halal · Amanah · Terpercaya
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-white mb-5"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.15,
            maxWidth: '800px',
          }}
        >
          Untuk Momen Syukur Yang Paling Berharga.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="mb-10 max-w-lg"
          style={{
            color: 'rgba(255,255,255,0.80)',
            fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.75,
          }}
        >
          Katering aqiqah &amp; syukuran dengan kambing pilihan, masakan segar hari H,
          dan layanan yang amanah — agar Anda bisa fokus bersyukur, bukan repot di dapur.
        </motion.p>

        {/* CTA — stacked on mobile, row on sm+ */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center mb-12"
        >
          <a
            href="#konsultasi"
            className="flex items-center justify-center font-semibold text-white transition-colors duration-200 w-full sm:w-auto"
            style={{
              backgroundColor: '#40916C',
              borderRadius: '50px',
              padding: '15px 32px',
              fontSize: '16px',
              minHeight: '52px',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2D6A4F'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#40916C'; }}
          >
            Konsultasi Paket Aqiqah
          </a>
          <a
            href="#layanan"
            className="flex items-center justify-center font-semibold text-white transition-all duration-200 w-full sm:w-auto"
            style={{
              backgroundColor: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.60)',
              borderRadius: '50px',
              padding: '15px 32px',
              fontSize: '16px',
              minHeight: '52px',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            Lihat Semua Layanan
          </a>
        </motion.div>

        {/* Trust badges — 2×2 grid on mobile, flex row on sm+ */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-x-6 sm:gap-y-2 w-full sm:w-auto"
          style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px' }}
        >
          {TRUST_BADGES.map(badge => (
            <span
              key={badge}
              className="flex items-center gap-1.5"
              style={{ justifySelf: 'start' }}
            >
              <Check size={13} weight="bold" style={{ color: '#C9A84C', flexShrink: 0 }} />
              {badge}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
