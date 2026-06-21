import { motion } from 'framer-motion';
import { Plant, Leaf, Tree, Cow, Check, Star } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const paket: { nama: string; icon: Icon; hargaPutri: string; hargaPutra: string; sublabel: string; terlaris: boolean; items: string[] }[] = [
  {
    nama: 'Paket Aqiqah Simpel',
    icon: Plant,
    hargaPutri: 'Rp 2.8 jt',
    hargaPutra: 'Rp 5.2 jt',
    sublabel: '1 kambing (putri) / 2 kambing (putra)',
    terlaris: false,
    items: [
      'Kambing sehat berat min. 23 kg',
      'Penyembelihan halal & syar\'i',
      'Masak: gulai kambing + sate + nasi',
      '50 porsi nasi kotak siap saji',
      'Pengiriman dalam kota',
      'Akad aqiqah (opsional, dibantu ustadz)',
    ],
  },
  {
    nama: 'Paket Aqiqah Lengkap',
    icon: Leaf,
    hargaPutri: 'Rp 3.8 jt',
    hargaPutra: 'Rp 7 jt',
    sublabel: '1/2 kambing + catering lebih lengkap',
    terlaris: true,
    items: [
      'Kambing premium berat min. 25 kg',
      'Penyembelihan halal & syar\'i + sertifikat',
      'Masak: gulai, sate, tongseng, nasi kebuli',
      '100 porsi nasi kotak dengan lauk lengkap',
      'Spanduk aqiqah nama bayi (1 buah)',
      'Dokumentasi prosesi (video pendek)',
      'Gratis delivery dalam kota',
    ],
  },
  {
    nama: 'Paket Aqiqah Premium',
    icon: Tree,
    hargaPutri: 'Rp 5.5 jt',
    hargaPutra: 'Rp 10 jt',
    sublabel: '1/2 kambing super + full catering',
    terlaris: false,
    items: [
      'Kambing super berat min. 28 kg',
      'Penyembelihan + sertifikat + ustadz mendampingi',
      'Menu lengkap: gulai, sate, tongseng, kroket, sop',
      '150 porsi nasi kotak premium',
      'Spanduk + souvenir botol custom (50 pcs)',
      'Dokumentasi lengkap (foto + video)',
      'Setup meja makan keluarga',
      'Gratis delivery + tim setup',
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function PaketAqiqah() {
  return (
    <section id="paket-aqiqah" className="section-pad" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">

        {/* Hukum Aqiqah notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '6px 8px',
            backgroundColor: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.35)',
            color: '#A07D2A',
            borderRadius: '12px',
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 600,
            maxWidth: '100%',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Cow size={14} weight="regular" /> Laki-laki: 2 kambing
            </span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Perempuan: 1 kambing</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            color: '#2D6A4F',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Paket Aqiqah Lengkap.
          </h2>
          <p className="max-w-md mx-auto" style={{
            fontSize: '18px',
            color: 'rgba(26,46,31,0.65)',
            lineHeight: 1.7,
          }}>
            Tidak perlu pusing urus ini-itu. Dari kambing sampai hidangan tersaji — kami yang handle.
          </p>
        </motion.div>

        {/* Cards — 1 col mobile, 3 col desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {paket.map(({ nama, icon: ItemIcon, hargaPutri, hargaPutra, sublabel, terlaris, items }) => (
            <motion.div
              key={nama}
              variants={cardAnim}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                position: 'relative',
                backgroundColor: terlaris ? '#1B3A2D' : '#ffffff',
                borderRadius: '16px',
                padding: 'clamp(24px, 3vw, 32px)',
                border: terlaris ? 'none' : '1px solid rgba(0,0,0,0.07)',
                boxShadow: terlaris
                  ? '0 8px 32px rgba(27,58,45,0.25)'
                  : '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              {/* Terlaris badge */}
              {terlaris && (
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#C9A84C',
                    color: '#1A2E1F',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 16px',
                    borderRadius: '50px',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Star size={12} weight="fill" /> Terlaris
                </motion.span>
              )}

              {/* Icon + name */}
              <div style={{ marginBottom: '20px' }}>
                <span style={{ color: terlaris ? '#C9A84C' : '#40916C' }}>
                  <ItemIcon size={28} weight="regular" />
                </span>
                <h3 style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: '22px',
                  color: terlaris ? '#ffffff' : '#1A2E1F',
                  margin: '8px 0 4px',
                }}>
                  {nama}
                </h3>
                <p style={{ fontSize: '13px', color: terlaris ? 'rgba(255,255,255,0.55)' : 'rgba(26,46,31,0.5)' }}>
                  {sublabel}
                </p>
              </div>

              {/* Harga */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: terlaris ? 'rgba(255,255,255,0.55)' : 'rgba(26,46,31,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                      Putri
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: terlaris ? '#C9A84C' : '#40916C' }}>
                      {hargaPutri}
                    </div>
                  </div>
                  <div style={{ width: '1px', backgroundColor: terlaris ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)' }} />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: terlaris ? 'rgba(255,255,255,0.55)' : 'rgba(26,46,31,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                      Putra
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: terlaris ? '#C9A84C' : '#40916C' }}>
                      {hargaPutra}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: terlaris ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.07)', marginBottom: '20px' }} />

              {/* Feature list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: terlaris ? 'rgba(255,255,255,0.80)' : 'rgba(26,46,31,0.70)', lineHeight: 1.5, alignItems: 'flex-start' }}>
                    <Check size={14} weight="bold" style={{ color: terlaris ? '#C9A84C' : '#40916C', flexShrink: 0, marginTop: '3px' }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#konsultasi"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '13px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  backgroundColor: terlaris ? '#40916C' : 'transparent',
                  color: terlaris ? '#ffffff' : '#40916C',
                  border: terlaris ? 'none' : '1.5px solid #40916C',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  minHeight: '44px',
                }}
                onMouseEnter={e => {
                  if (terlaris) {
                    e.currentTarget.style.backgroundColor = '#2D6A4F';
                  } else {
                    e.currentTarget.style.backgroundColor = '#40916C';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={e => {
                  if (terlaris) {
                    e.currentTarget.style.backgroundColor = '#40916C';
                  } else {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#40916C';
                  }
                }}
              >
                Konsultasi Paket Ini
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Catatan */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
          style={{ fontSize: '14px', color: 'rgba(26,46,31,0.55)' }}
        >
          Bisa disesuaikan: jumlah porsi, menu pilihan, add-on (ustadz, dekorasi, MC).{' '}
          <a href="#konsultasi" style={{ color: '#40916C', fontWeight: 600, textDecoration: 'none' }}>
            Hubungi kami untuk konsultasi →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
