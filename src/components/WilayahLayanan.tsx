import { motion } from 'framer-motion';
import { CheckCircle, Phone } from '@phosphor-icons/react';

const areas = [
  { served: true, nama: 'Kota Padang & sekitarnya', note: 'Free ongkir' },
  { served: true, nama: 'Pariaman, Padang Panjang, Solok', note: 'Ongkir sesuai jarak' },
  { served: true, nama: 'Bukittinggi, Payakumbuh', note: 'Add-on biaya tim' },
  { served: false, nama: 'Luar area', note: 'Hubungi kami untuk kesepakatan' },
];

const booking = [
  { label: 'Aqiqah', min: 'H-7', desc: 'Agar kambing bisa dipersiapkan' },
  { label: 'Syukuran & Tahlil Standar', min: 'H-3', desc: 'Untuk persiapan optimal' },
  { label: 'Syukuran & Tahlil Premium', min: 'H-7', desc: 'Untuk persiapan lebih matang' },
];

export default function WilayahLayanan() {
  return (
    <section id="wilayah" className="section-pad" style={{ background: '#F5F3EC' }}>
      <div className="max-w-4xl mx-auto">

        {/* 1 col mobile → 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Wilayah */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(24px, 3.5vw, 40px)',
              color: '#2D6A4F',
              marginBottom: '32px',
              lineHeight: 1.25,
            }}>
              Kami Melayani Area:
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {areas.map(({ served, nama, note }) => (
                <div
                  key={nama}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    background: '#ffffff',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    gap: '4px 12px',
                    minHeight: '52px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#40916C', flexShrink: 0 }}>
                      {served
                        ? <CheckCircle size={16} weight="fill" />
                        : <Phone size={16} weight="regular" />
                      }
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A2E1F' }}>{nama}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(26,46,31,0.50)', paddingLeft: '26px' }}>{note}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Booking minimum */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 style={{
              fontFamily: '"DM Serif Display", Georgia, serif',
              fontSize: 'clamp(22px, 3vw, 32px)',
              color: '#2D6A4F',
              marginBottom: '32px',
              lineHeight: 1.25,
            }}>
              Booking Minimum:
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {booking.map(({ label, min, desc }) => (
                <div
                  key={label}
                  style={{
                    background: '#ffffff',
                    borderRadius: '12px',
                    padding: '18px 20px',
                    border: '1px solid rgba(0,0,0,0.05)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      background: '#40916C',
                      color: 'white',
                      padding: '3px 10px',
                      borderRadius: '50px',
                      whiteSpace: 'nowrap',
                    }}>
                      {min}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A2E1F' }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'rgba(26,46,31,0.55)', paddingLeft: '2px' }}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
