import { motion } from 'framer-motion';
import {
  Cow, Knife, CookingPot, Wrench, Package, Truck, Broom,
  Microphone, PaintBrush, Camera, Gift, Armchair, CheckCircle,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const checklist: { icon: Icon; label: string; desc: string }[] = [
  { icon: Cow, label: 'Kambing pilihan', desc: 'Dicek kondisi kesehatan, bersih, layak kurban' },
  { icon: Knife, label: 'Penyembelihan syar\'i', desc: 'Oleh tenaga ahli berpengalaman, sesuai syariah' },
  { icon: CookingPot, label: 'Memasak fresh hari H', desc: 'Tidak ada makanan yang dimasak kemarin' },
  { icon: Wrench, label: 'Peralatan memasak', desc: 'Kami bawa sendiri, Anda tidak perlu sediakan' },
  { icon: Package, label: 'Wadah saji & packaging', desc: 'Nasi kotak, mika, kresek, sendok, tisu' },
  { icon: Truck, label: 'Tim masak & delivery', desc: 'Datang pagi, beres sebelum acara dimulai' },
  { icon: Broom, label: 'Bersih-bersih area masak', desc: 'Kami rapikan kembali setelah selesai' },
];

const addons: { icon: Icon; label: string; harga: string }[] = [
  { icon: Microphone, label: 'Ustadz doa aqiqah & akad', harga: '+Rp 350k' },
  { icon: PaintBrush, label: 'Dekorasi meja makan', harga: '+Rp 500k' },
  { icon: Camera, label: 'Dokumentasi foto acara', harga: '+Rp 750k' },
  { icon: Gift, label: 'Souvenir custom (nama bayi)', harga: 'mulai +Rp 3.500/pcs' },
  { icon: Armchair, label: 'Sewa kursi & meja', harga: 'Sesuai kebutuhan' },
];

export default function KelengkapanLayanan() {
  return (
    <section id="kelengkapan" className="section-pad" style={{ backgroundColor: '#F5F3EC' }}>
      <div className="max-w-6xl mx-auto">

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
            Yang Kami Siapkan, Bukan Cuma Makanan.
          </h2>
          <p className="max-w-md mx-auto" style={{ fontSize: '18px', color: 'rgba(26,46,31,0.65)', lineHeight: 1.7 }}>
            Supaya Anda tidak perlu pusing urus detailnya.
          </p>
        </motion.div>

        {/* Main grid — stacked on mobile, 2-col on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: '22px',
              color: '#1A2E1F',
              marginBottom: '24px',
            }}>
              Sudah Termasuk:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {checklist.map(({ icon: ItemIcon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                  style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
                >
                  <span style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(64,145,108,0.10)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#40916C',
                  }}>
                    <ItemIcon size={18} weight="regular" />
                  </span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px', fontWeight: 600, color: '#1A2E1F', marginBottom: '2px' }}>
                      <CheckCircle size={14} weight="fill" color="#40916C" />
                      {label}
                    </div>
                    <div style={{ fontSize: '13px', color: 'rgba(26,46,31,0.60)', lineHeight: 1.5 }}>
                      {desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: '22px',
              color: '#1A2E1F',
              marginBottom: '24px',
            }}>
              Add-on Tersedia:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {addons.map(({ icon: AddonIcon, label, harga }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '6px 12px',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    minHeight: '52px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D6A4F', flex: '1 1 auto', minWidth: 0 }}>
                    <AddonIcon size={18} weight="regular" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#1A2E1F', fontWeight: 500 }}>{label}</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#40916C', flexShrink: 0 }}>
                    {harga}
                  </span>
                </div>
              ))}
            </div>

            <motion.a
              href="#konsultasi"
              whileHover={{ y: -2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '28px',
                padding: '14px 32px',
                borderRadius: '50px',
                backgroundColor: '#40916C',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
                minHeight: '44px',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2D6A4F'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#40916C'; }}
            >
              Tanya Add-on yang Tersedia
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
