import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Scissors, Mosque, House, GraduationCap } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const tabs: { id: string; icon: Icon; label: string; heading: string; desc: string; menu: string; tiers: { nama: string; harga: string; min: string }[] }[] = [
  {
    id: 'khitanan',
    icon: Scissors,
    label: 'Khitanan',
    heading: 'Syukuran Khitanan',
    desc: 'Format nasi kotak atau prasmanan, untuk tamu 50–500 orang.',
    menu: 'Menu andalan: Nasi kuning tumpeng + ayam ingkung + lauk pauk komplit',
    tiers: [
      { nama: 'Nasi Kotak Standar', harga: 'Rp 28k/porsi', min: 'Min 50 porsi' },
      { nama: 'Nasi Kotak Premium', harga: 'Rp 45k/porsi', min: 'Min 50 porsi' },
      { nama: 'Prasmanan Standar', harga: 'Rp 55k/pax', min: 'Min 100 pax' },
      { nama: 'Prasmanan Premium', harga: 'Rp 85k/pax', min: 'Min 100 pax' },
    ],
  },
  {
    id: 'tahlilan',
    icon: Mosque,
    label: 'Tahlilan',
    heading: 'Tahlilan & Yasinan',
    desc: 'Menu sederhana & khusyuk untuk acara keluarga. 3 hari, 7 hari, 40 hari, atau 100 hari.',
    menu: 'Tersedia nasi bungkus daun pisang, nasi kotak tahlil, kolak, bubur sumsum, takjil.',
    tiers: [
      { nama: 'Nasi Bungkus Daun Pisang', harga: 'Rp 15k–20k/bungkus', min: 'Min 30 porsi' },
      { nama: 'Nasi Kotak Tahlil', harga: 'Rp 22k–28k/kotak', min: 'Min 30 kotak' },
      { nama: 'Kolak + Bubur Sumsum', harga: 'Rp 8k–15k/porsi', min: 'Min 30 porsi' },
    ],
  },
  {
    id: 'pindah',
    icon: House,
    label: 'Pindah Rumah',
    heading: 'Tasyakuran Pindah Rumah',
    desc: 'Casual & hangat — tetangga baru datang, disambut dengan makan-makan berkah.',
    menu: 'Bonus tumpeng syukuran untuk order min. 50 porsi.',
    tiers: [
      { nama: 'Nasi Kotak', harga: 'Rp 28k–42k/kotak', min: 'Min 30 kotak' },
      { nama: 'Prasmanan', harga: 'Rp 55k–75k/pax', min: 'Min 50 pax' },
    ],
  },
  {
    id: 'wisuda',
    icon: GraduationCap,
    label: 'Wisuda',
    heading: 'Tasyakuran Wisuda & Kelulusan',
    desc: 'Proud moment — rayakan bersama keluarga dan orang-orang tersayang!',
    menu: 'Tersedia paket family gathering, nasi kotak, hingga catering ke venue.',
    tiers: [
      { nama: 'Paket Family Gathering', harga: 'Rp 1.5 jt – 2.5 jt', min: '20–40 orang' },
      { nama: 'Nasi Kotak', harga: 'Rp 30k–48k/kotak', min: 'Min 20 kotak' },
      { nama: 'Catering ke Venue', harga: 'Hubungi kami', min: 'Sesuai kebutuhan' },
    ],
  },
];

export default function PaketSyukuran() {
  const [active, setActive] = useState(0);
  const tab = tabs[active]!;

  return (
    <section id="paket-syukuran" className="section-pad" style={{ backgroundColor: '#F5F3EC' }}>
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
            Paket Syukuran Sesuai Momenmu.
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(26,46,31,0.65)', lineHeight: 1.7 }}>
            Setiap momen punya keistimewaannya. Kami sesuaikan hidangan dengan acara.
          </p>
        </motion.div>

        {/* Tabs — scrollable on mobile */}
        <div className="flex justify-center gap-2 flex-wrap mb-12">
          {tabs.map((t, i) => {
            const TabIcon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 600,
                  backgroundColor: active === i ? '#1B3A2D' : 'rgba(255,255,255,0.80)',
                  color: active === i ? '#ffffff' : 'rgba(26,46,31,0.70)',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                  minHeight: '44px',
                }}
              >
                <TabIcon size={16} weight="regular" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 48px)',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            {/* Tab heading */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                {(() => { const TabIcon = tab.icon; return <TabIcon size={32} weight="regular" color="#2D6A4F" />; })()}
                <h3 style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: 'clamp(22px, 3vw, 32px)',
                  color: '#2D6A4F',
                }}>
                  {tab.heading}
                </h3>
              </div>
              <p style={{ fontSize: '16px', color: 'rgba(26,46,31,0.65)', lineHeight: 1.65 }}>
                {tab.desc}
              </p>
            </div>

            {/* Tiers grid — 1 col mobile, 2 col tablet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {tab.tiers.map(({ nama, harga, min }) => (
                <div
                  key={nama}
                  style={{
                    backgroundColor: '#F5F3EC',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(0,0,0,0.05)',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(26,46,31,0.55)', marginBottom: '6px' }}>
                    {nama}
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#40916C', marginBottom: '4px' }}>
                    {harga}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(26,46,31,0.45)' }}>
                    {min}
                  </div>
                </div>
              ))}
            </div>

            {/* Menu note + CTA */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(0,0,0,0.06)',
            }}>
              <p style={{ fontSize: '14px', color: 'rgba(26,46,31,0.60)', lineHeight: 1.6 }}>
                {tab.menu}
              </p>
              <a
                href="#konsultasi"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '13px 28px',
                  borderRadius: '50px',
                  backgroundColor: '#40916C',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                  minHeight: '44px',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2D6A4F'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#40916C'; }}
              >
                Konsultasi Paket Ini
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
