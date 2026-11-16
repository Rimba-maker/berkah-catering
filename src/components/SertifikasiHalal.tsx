import Photo from './Photo';

const trust: { label: string; desc: string }[] = [
  { label: 'Halal MUI Tersertifikasi', desc: 'Dapur & bahan baku tersertifikasi oleh MUI.' },
  { label: 'Kambing Sehat & Layak', desc: 'Dicek veteriner, bukan kambing sakit atau cacat.' },
  {
    label: 'Standar Kebersihan Dapur',
    desc: 'HACCP compliant, dicek berkala, higienitas terjaga.',
  },
  { label: 'Sertifikat Penyembelihan', desc: "Diberikan ke keluarga sebagai bukti syar'i." },
];

export default function SertifikasiHalal() {
  return (
    <section id="halal" className="section band-ink">
      <div className="container">
        <div className="halal__top">
          <div>
            <h2>Setiap proses memenuhi standar syariah.</h2>
            <p className="lead" style={{ marginTop: 'var(--space-lg)' }}>
              Aqiqah dan syukuran adalah ibadah, bukan sekadar makan-makan. Karena itu kami pastikan
              standar syariah dan kebersihan terjaga.
            </p>
            <p className="halal__fig">
              <strong>500+</strong>
              <span className="small">Aqiqah sukses</span>
            </p>
          </div>
          <div>
            <Photo
              id="16302221"
              slot="halal"
              pos="50% 55%"
              sizes="(min-width: 60rem) 50vw, 100vw"
            />
            <span className="cap" style={{ color: 'var(--color-gold-2)' }}>
              Anak kambing di padang rumput, foto ilustrasi.
            </span>
          </div>
        </div>
        <ul className="trust">
          {trust.map(({ label, desc }) => (
            <li key={label}>
              <h3>{label}</h3>
              <p
                className="small"
                style={{ color: 'color-mix(in oklab, var(--color-paper) 78%, transparent)' }}
              >
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
