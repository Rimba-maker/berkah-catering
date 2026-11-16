const steps: { no: string; label: string; desc: string }[] = [
  {
    no: '01',
    label: 'Konsultasi (Gratis)',
    desc: 'Ceritakan acara, tanggal, jumlah tamu, dan budget. Kami bantu tentukan paket yang pas.',
  },
  {
    no: '02',
    label: 'Konfirmasi & DP',
    desc: 'Setelah sepakat, DP 30% untuk booking tanggal. Sisa dilunasi H-3.',
  },
  {
    no: '03',
    label: 'Persiapan H-1',
    desc: 'Kami belanja bahan segar, persiapkan bumbu, dan cek kambing pilihan.',
  },
  {
    no: '04',
    label: 'Hari H',
    desc: 'Tim datang pagi, masak fresh di lokasi Anda, hidangan tersaji tepat waktu.',
  },
];

export default function ProsesPemesanan() {
  return (
    <section id="proses" className="section">
      <div className="container">
        <div className="sec-head">
          <h2>Pesan Mudah, Acara Berkah.</h2>
        </div>
        <ol className="line">
          {steps.map(({ no, label, desc }) => (
            <li key={no}>
              <span className="no">{no}</span>
              <h3>{label}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </ol>
        <div className="actions" style={{ marginTop: 'var(--space-2xl)' }}>
          <a href="#konsultasi" className="btn">
            Mulai Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
