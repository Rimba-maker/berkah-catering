import { useState } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import Photo from './Photo';

const jenis = [
  'Aqiqah',
  'Khitanan',
  'Wisuda / Kelulusan',
  'Tahlilan & Yasinan',
  'Pindah Rumah',
  'Walimahan',
  'Lainnya',
];

export default function BookingCTA() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const wa = `https://wa.me/6281234567890?text=${encodeURIComponent(
      `Halo Berkah Catering 🌿\n\nNama: ${data.get('nama')}\nNomor WhatsApp: ${data.get('wa')}\nJenis Acara: ${data.get('jenis')}\nTanggal: ${data.get('tanggal')}\nEstimasi Tamu: ${data.get('tamu')}\nCatatan: ${data.get('pesan')}`,
    )}`;
    window.open(wa, '_blank');
    setSent(true);
  }

  return (
    <section id="konsultasi" className="section">
      <div className="container book__layout">
        <div>
          <div className="sec-head" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2>Yuk, Rencanakan Momen Syukur Anda.</h2>
            <p className="lead">
              Konsultasi gratis, tanpa pressure. Ceritakan momen Anda dan kami bantu carikan paket
              yang pas.
            </p>
          </div>
          <div className="actions">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
              Chat via WhatsApp
            </a>
            <span className="label">atau isi form di samping</span>
          </div>
          <Photo
            id="38487728"
            slot="booking"
            pos="50% 35%"
            sizes="(min-width: 60rem) 40vw, 100vw"
          />
          <span className="cap">Keluarga bersama anak, foto ilustrasi.</span>
        </div>
        <div className="well">
          <h3 style={{ marginBottom: 'var(--space-lg)', fontSize: 'var(--text-xl)' }}>
            Form Konsultasi
          </h3>
          {sent ? (
            <div role="status" className="sent">
              <h3>WhatsApp sudah terbuka!</h3>
              <p
                className="lead"
                style={{ marginTop: 'var(--space-sm)', fontSize: 'var(--text-md)' }}
              >
                Kirimkan pesan ke kami dan kami akan segera merespons.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="two">
                <div>
                  <label htmlFor="booking-nama">Nama Lengkap *</label>
                  <input
                    id="booking-nama"
                    name="nama"
                    required
                    placeholder="Nama Anda"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="booking-wa">Nomor WhatsApp *</label>
                  <input
                    id="booking-wa"
                    name="wa"
                    required
                    type="tel"
                    placeholder="08xxxxxxxx"
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div className="two">
                <div>
                  <label htmlFor="booking-jenis">Jenis Acara *</label>
                  <select id="booking-jenis" name="jenis" required>
                    <option value="">Pilih acara…</option>
                    {jenis.map((j) => (
                      <option key={j} value={j}>
                        {j}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="booking-tanggal">Tanggal Acara *</label>
                  <input id="booking-tanggal" name="tanggal" required type="date" />
                </div>
              </div>
              <div>
                <label htmlFor="booking-tamu">Estimasi Jumlah Tamu</label>
                <input id="booking-tamu" name="tamu" placeholder="Contoh: 100 orang" />
              </div>
              <div>
                <label htmlFor="booking-pesan">Pesan / Catatan</label>
                <textarea
                  id="booking-pesan"
                  name="pesan"
                  rows={3}
                  placeholder="Budget, menu yang diinginkan, atau pertanyaan lain…"
                />
              </div>
              <button type="submit" className="btn">
                Konsultasi Sekarang via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
