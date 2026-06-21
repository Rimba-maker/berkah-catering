import { motion } from 'framer-motion';
import { Cow, Scissors, GraduationCap, Mosque, House, Heart, ArrowRight } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import { photos } from '../config/photos';

const layanan: { icon: Icon; label: string; desc: string; harga: string; href: string; img: string }[] = [
  {
    icon: Cow,
    label: 'Aqiqah',
    desc: 'Syukuran kelahiran buah hati. Kambing pilihan, disembelih syar\'i, dimasak fresh hari H.',
    harga: 'Mulai Rp 2.8 jt',
    href: '#paket-aqiqah',
    img: photos.layanan.aqiqah,
  },
  {
    icon: Scissors,
    label: 'Khitanan',
    desc: 'Syukuran khitan anak — momen penting yang harus berkesan. Catering lengkap, bisa tambah dekorasi.',
    harga: 'Mulai Rp 3.5 jt',
    href: '#paket-syukuran',
    img: photos.layanan.khitanan,
  },
  {
    icon: GraduationCap,
    label: 'Tasyakuran Wisuda',
    desc: 'Rayakan kelulusan dengan makan-makan bersama keluarga besar. Nasi kotak atau prasmanan.',
    harga: 'Mulai Rp 1.5 jt',
    href: '#paket-syukuran',
    img: photos.layanan.wisuda,
  },
  {
    icon: Mosque,
    label: 'Tahlilan & Yasinan',
    desc: 'Hidangan sederhana tapi penuh ketulusan untuk malam tahlil, 3 hari, 7 hari, 40 hari, atau 100 hari.',
    harga: 'Mulai Rp 850k',
    href: '#paket-syukuran',
    img: photos.layanan.tahlilan,
  },
  {
    icon: House,
    label: 'Tasyakuran Pindah Rumah',
    desc: 'Syukuran hunian baru — mengundang tetangga & kerabat, hidangan berlimpah, berkah berlipat.',
    harga: 'Mulai Rp 2 jt',
    href: '#paket-syukuran',
    img: photos.layanan.pindah,
  },
  {
    icon: Heart,
    label: 'Walimahan',
    desc: 'Resepsi pernikahan sederhana & intimate. Full catering atau parsial (masak bareng keluarga).',
    harga: 'Mulai Rp 5 jt',
    href: '#paket-syukuran',
    img: photos.layanan.walimahan,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function LayananUtama() {
  return (
    <section id="layanan" className="section-pad" style={{ backgroundColor: '#F5F3EC' }}>
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
            Kami Hadir di Momen Terpenting Keluargamu.
          </h2>
          <p className="max-w-lg mx-auto" style={{
            fontSize: '18px',
            color: 'rgba(26,46,31,0.65)',
            lineHeight: 1.7,
          }}>
            Dari kelahiran si kecil sampai tasyakuran pindah rumah — kami siap melayani dengan hati.
          </p>
        </motion.div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {layanan.map(({ icon: ItemIcon, label, desc, harga, href, img }) => (
            <motion.a
              key={label}
              href={href}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{
                display: 'block',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 0 0.5px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                textDecoration: 'none',
                border: '1px solid rgba(0,0,0,0.04)',
                cursor: 'pointer',
              }}
            >
              {/* Card image */}
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={img}
                  alt={label}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255,255,255,0.92)',
                  borderRadius: '50px',
                  padding: '6px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#2D6A4F',
                }}>
                  <ItemIcon size={18} weight="regular" />
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px 24px 24px' }}>
                <h3 style={{
                  fontFamily: '"DM Serif Display", Georgia, serif',
                  fontSize: '20px',
                  color: '#1A2E1F',
                  marginBottom: '8px',
                }}>
                  {label}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(26,46,31,0.65)',
                  lineHeight: 1.65,
                  marginBottom: '16px',
                }}>
                  {desc}
                </p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#40916C',
                }}>
                  {harga} <ArrowRight size={13} weight="bold" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
