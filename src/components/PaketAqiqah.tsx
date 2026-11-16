import Photo from './Photo';

const paket: {
  nama: string;
  hargaPutri: string;
  hargaPutra: string;
  sublabel: string;
  terlaris: boolean;
  items: string[];
}[] = [
  {
    nama: 'Paket Aqiqah Simpel',
    hargaPutri: 'Rp 2.8 jt',
    hargaPutra: 'Rp 5.2 jt',
    sublabel: '1 kambing (putri) / 2 kambing (putra)',
    terlaris: false,
    items: [
      'Kambing sehat berat min. 23 kg',
      "Penyembelihan halal & syar'i",
      'Masak: gulai kambing + sate + nasi',
      '50 porsi nasi kotak siap saji',
      'Pengiriman dalam kota',
      'Akad aqiqah (opsional, dibantu ustadz)',
    ],
  },
  {
    nama: 'Paket Aqiqah Lengkap',
    hargaPutri: 'Rp 3.8 jt',
    hargaPutra: 'Rp 7 jt',
    sublabel: '1/2 kambing + catering lebih lengkap',
    terlaris: true,
    items: [
      'Kambing premium berat min. 25 kg',
      "Penyembelihan halal & syar'i + sertifikat",
      'Masak: gulai, sate, tongseng, nasi kebuli',
      '100 porsi nasi kotak dengan lauk lengkap',
      'Spanduk aqiqah nama bayi (1 buah)',
      'Dokumentasi prosesi (video pendek)',
      'Gratis delivery dalam kota',
    ],
  },
  {
    nama: 'Paket Aqiqah Premium',
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

export default function PaketAqiqah() {
  return (
    <section id="paket-aqiqah" className="section band-2">
      <div className="container">
        <div className="cols">
          <div>
            <Photo
              id="12521117"
              slot="aqiqah"
              pos="40% 50%"
              sizes="(min-width: 60rem) 40vw, 100vw"
              className="photo--wide"
            />
            <span className="cap">Tangan bayi baru lahir, foto ilustrasi.</span>
          </div>
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <h2>Paket Aqiqah Lengkap.</h2>
            <p className="lead">
              Tidak perlu pusing urus ini-itu. Dari kambing sampai hidangan tersaji, kami yang
              handle.
            </p>
            <p className="label">Laki-laki: 2 kambing. Perempuan: 1 kambing.</p>
          </div>
        </div>
        <div className="pkgs">
          {paket.map(({ nama, hargaPutri, hargaPutra, sublabel, terlaris, items }) => (
            <article key={nama} className={`well pkg ${terlaris ? 'pkg--featured' : ''}`}>
              <div>
                <h3>{nama}</h3>
                <p className="small" style={{ marginTop: 'var(--space-xs)' }}>
                  {sublabel}
                </p>
                {terlaris && <span className="pkg__tag">Terlaris</span>}
              </div>
              <div className="pkg__prices">
                <div>
                  <span className="label">Putri</span>
                  <strong>{hargaPutri}</strong>
                </div>
                <div>
                  <span className="label">Putra</span>
                  <strong>{hargaPutra}</strong>
                </div>
              </div>
              <ul className="pkg__list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href="#konsultasi"
                className={terlaris ? 'btn' : 'btn btn--quiet'}
                style={terlaris ? undefined : { alignSelf: 'flex-start' }}
              >
                Konsultasi Paket Ini
              </a>
            </article>
          ))}
        </div>
        <p className="note label">
          Bisa disesuaikan: jumlah porsi, menu pilihan, add-on (ustadz, dekorasi, MC).{' '}
          <a href="#konsultasi">Hubungi kami untuk konsultasi</a>
        </p>
      </div>
    </section>
  );
}
