import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Cow, ForkKnife, Star, Cookie, CookingPot, Leaf } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import { photos } from '../config/photos';

const kategori: {
  id: string;
  label: string;
  icon: Icon;
  items: { nama: string; desc: string; icon: Icon; img: string }[];
}[] = [
  {
    id: 'aqiqah',
    label: 'Andalan Aqiqah',
    icon: Cow,
    items: [
      { nama: 'Gulai Kambing', desc: 'Bumbu rempah lengkap, daging empuk', icon: CookingPot, img: photos.menu.gulaiKambing },
      { nama: 'Sate Kambing', desc: 'Arang batok, tidak bau prengus', icon: ForkKnife, img: photos.menu.sateKambing },
      { nama: 'Tongseng Kambing', desc: 'Kuah kental, pedas gurih', icon: CookingPot, img: photos.paket.gulai },
      { nama: 'Nasi Kebuli', desc: 'Nasi rempah khas Timur Tengah', icon: ForkKnife, img: photos.paket.nasiKotak },
      { nama: 'Sop Tulang Kambing', desc: 'Kaldu bening, menyegarkan', icon: CookingPot, img: photos.menu.gulaiKambing },
    ],
  },
  {
    id: 'umum',
    label: 'Menu Umum',
    icon: ForkKnife,
    items: [
      { nama: 'Ayam Bakar / Goreng Kampung', desc: 'Ayam kampung pilihan, empuk & gurih', icon: ForkKnife, img: photos.layanan.khitanan },
      { nama: 'Rendang Sapi Minang', desc: 'Slow cook 4 jam, cita rasa autentik', icon: ForkKnife, img: photos.menu.rendang },
      { nama: 'Sayur Lodeh / Asem', desc: 'Segar & menyeimbangkan hidangan', icon: CookingPot, img: photos.layanan.tahlilan },
      { nama: 'Soto Ayam / Betawi', desc: 'Kuah kaldu hangat, pelengkap sempurna', icon: CookingPot, img: photos.layanan.wisuda },
      { nama: 'Urap / Lalapan + Sambal', desc: 'Sayuran segar, sambal terasi', icon: Leaf, img: photos.layanan.aqiqah },
    ],
  },
  {
    id: 'nasi',
    label: 'Nasi & Tumpeng',
    icon: Star,
    items: [
      { nama: 'Nasi Putih / Uduk / Kuning', desc: 'Nasi berkualitas, dimasak segar hari H', icon: ForkKnife, img: photos.menu.nasiKotak },
      { nama: 'Tumpeng Mini', desc: 'Mulai Rp 350k — untuk syukuran kecil', icon: Star, img: photos.paket.tumpeng },
      { nama: 'Tumpeng Besar', desc: 'Mulai Rp 650k — untuk acara besar', icon: Star, img: photos.menu.tumpeng },
      { nama: 'Nasi Bakar Daun Pisang', desc: 'Aroma daun pisang, khas & unik', icon: Leaf, img: photos.layanan.pindah },
    ],
  },
  {
    id: 'dessert',
    label: 'Dessert & Penutup',
    icon: Cookie,
    items: [
      { nama: 'Kolak Pisang / Ubi', desc: 'Manis hangat, cocok untuk tahlilan', icon: Cookie, img: photos.menu.kolak },
      { nama: 'Bubur Sumsum', desc: 'Lembut gurih, tradisi turun-temurun', icon: Cookie, img: photos.paket.gulai },
      { nama: 'Es Buah / Cincau', desc: 'Segar, cocok untuk acara siang hari', icon: Cookie, img: photos.layanan.wisuda },
    ],
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.07 },
  }),
};

export default function MenuMasakan() {
  const [active, setActive] = useState(0);
  const kat = kategori[active]!;

  return (
    <section id="menu" className="section-pad" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            color: '#2D6A4F',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Menu Yang Sudah Teruji Puluhan Tahun.
          </h2>
          <p className="max-w-lg mx-auto" style={{ fontSize: '18px', color: 'rgba(26,46,31,0.65)', lineHeight: 1.7 }}>
            Resep turun-temurun, dimasak fresh oleh tim juru masak berpengalaman.
            Tanpa MSG berlebihan. Tanpa bahan pengawet.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {kategori.map((k, i) => {
            const KatIcon = k.icon;
            return (
              <button
                key={k.id}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 18px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 600,
                  backgroundColor: active === i ? '#2D6A4F' : '#F5F3EC',
                  color: active === i ? '#ffffff' : 'rgba(26,46,31,0.70)',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                  minHeight: '44px',
                }}
              >
                <KatIcon size={16} weight="regular" />
                {k.label}
              </button>
            );
          })}
        </div>

        {/* Menu grid — 2 col mobile, 3 col tablet, 5 col desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={kat.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {kat.items.map(({ nama, desc, icon: ItemIcon, img }, i) => (
              <motion.div
                key={nama}
                custom={i}
                variants={cardAnim}
                initial="hidden"
                animate="visible"
                style={{
                  backgroundColor: '#F5F3EC',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ height: '120px', overflow: 'hidden', position: 'relative' }}>
                  <motion.img
                    src={img}
                    alt={nama}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: '8px',
                    padding: '4px 6px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#2D6A4F',
                  }}>
                    <ItemIcon size={14} weight="regular" />
                  </span>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A2E1F', marginBottom: '3px', lineHeight: 1.3 }}>
                    {nama}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(26,46,31,0.55)', lineHeight: 1.5 }}>
                    {desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
