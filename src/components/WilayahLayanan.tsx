const areas = [
  { nama: 'Kota Padang & sekitarnya', note: 'Free ongkir' },
  { nama: 'Pariaman, Padang Panjang, Solok', note: 'Ongkir sesuai jarak' },
  { nama: 'Bukittinggi, Payakumbuh', note: 'Add-on biaya tim' },
  { nama: 'Luar area', note: 'Hubungi kami untuk kesepakatan' },
];

const booking = [
  { label: 'Aqiqah', min: 'H-7', desc: 'Agar kambing bisa dipersiapkan' },
  { label: 'Syukuran & Tahlil Standar', min: 'H-3', desc: 'Untuk persiapan optimal' },
  { label: 'Syukuran & Tahlil Premium', min: 'H-7', desc: 'Untuk persiapan lebih matang' },
];

export default function WilayahLayanan() {
  return (
    <section id="wilayah" className="section">
      <div className="container cols--even cols">
        <div>
          <div className="sec-head" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2>Kami Melayani Area:</h2>
          </div>
          <ul className="rows">
            {areas.map(({ nama, note }) => (
              <li key={nama}>
                <span className="name">{nama}</span>
                <span className="small">{note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="book">
          <div className="sec-head" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2>Booking Minimum:</h2>
          </div>
          <dl>
            {booking.map(({ label, min, desc }) => (
              <div key={label} className="r">
                <dt>{min}</dt>
                <dd>
                  <span className="name" style={{ fontWeight: 500, display: 'block' }}>
                    {label}
                  </span>
                  <span className="small">{desc}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
