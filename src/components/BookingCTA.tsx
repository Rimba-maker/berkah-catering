import { motion } from 'framer-motion';
import { useState } from 'react';
import { WhatsappLogo, CheckCircle, Leaf } from '@phosphor-icons/react';

const jenis = ['Aqiqah', 'Khitanan', 'Wisuda / Kelulusan', 'Tahlilan & Yasinan', 'Pindah Rumah', 'Walimahan', 'Lainnya'];

export default function BookingCTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const wa = `https://wa.me/6281234567890?text=${encodeURIComponent(
      `Halo Berkah Catering 🌿\n\nNama: ${data.get('nama')}\nJenis Acara: ${data.get('jenis')}\nTanggal: ${data.get('tanggal')}\nEstimasi Tamu: ${data.get('tamu')}\nCatatan: ${data.get('pesan')}`
    )}`;
    window.open(wa, '_blank');
    setSent(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1.5px solid rgba(0,0,0,0.10)',
    fontSize: '15px',
    fontFamily: 'inherit',
    color: '#1A2E1F',
    backgroundColor: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="konsultasi" className="section-pad" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: '#2D6A4F',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}>
            Yuk, Rencanakan Momen Syukur Anda.
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(26,46,31,0.65)', lineHeight: 1.7 }}>
            Konsultasi gratis, tanpa pressure. Ceritakan momen Anda dan kami bantu
            carikan paket yang pas.
          </p>
        </motion.div>

        {/* WhatsApp direct */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '15px 24px',
              borderRadius: '50px',
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              width: '100%',
              maxWidth: '360px',
              margin: '0 auto',
              minHeight: '52px',
            }}
          >
            <WhatsappLogo size={20} weight="fill" />
            Chat via WhatsApp
          </a>
          <p style={{ marginTop: '12px', fontSize: '13px', color: 'rgba(26,46,31,0.45)' }}>
            atau isi form di bawah ini
          </p>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.08)' }} />
          <span style={{ fontSize: '13px', color: 'rgba(26,46,31,0.40)', fontWeight: 600 }}>Form Konsultasi</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.08)' }} />
        </div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ textAlign: 'center', padding: '48px 24px', backgroundColor: '#F5F3EC', borderRadius: '16px' }}
          >
            <div style={{ color: '#40916C', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
              <CheckCircle size={48} weight="fill" />
            </div>
            <h3 style={{ fontFamily: '"DM Serif Display", Georgia, serif', fontSize: '24px', color: '#2D6A4F', marginBottom: '8px' }}>
              WhatsApp sudah terbuka!
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(26,46,31,0.65)' }}>
              Kirimkan pesan ke kami dan kami akan segera merespons.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(26,46,31,0.65)', marginBottom: '6px' }}>
                  Nama Lengkap *
                </label>
                <input name="nama" required placeholder="Nama Anda" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(26,46,31,0.65)', marginBottom: '6px' }}>
                  Nomor WhatsApp *
                </label>
                <input name="wa" required type="tel" placeholder="08xxxxxxxx" style={inputStyle} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(26,46,31,0.65)', marginBottom: '6px' }}>
                  Jenis Acara *
                </label>
                <select name="jenis" required style={{ ...inputStyle, appearance: 'none' }}>
                  <option value="">Pilih acara...</option>
                  {jenis.map(j => <option key={j} value={j}>{j}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(26,46,31,0.65)', marginBottom: '6px' }}>
                  Tanggal Acara *
                </label>
                <input name="tanggal" required type="date" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(26,46,31,0.65)', marginBottom: '6px' }}>
                Estimasi Jumlah Tamu
              </label>
              <input name="tamu" placeholder="Contoh: 100 orang" style={inputStyle} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(26,46,31,0.65)', marginBottom: '6px' }}>
                Pesan / Catatan
              </label>
              <textarea
                name="pesan"
                rows={3}
                placeholder="Budget, menu yang diinginkan, atau pertanyaan lain..."
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: '#40916C',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2D6A4F'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#40916C'; }}
            >
              Konsultasi Sekarang via WhatsApp <Leaf size={16} weight="bold" style={{ display: 'inline', verticalAlign: 'middle' }} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
