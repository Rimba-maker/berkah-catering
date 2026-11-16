import Photo from './Photo';

const checklist: { label: string; desc: string }[] = [
  { label: 'Kambing pilihan', desc: 'Dicek kondisi kesehatan, bersih, layak kurban' },
  { label: "Penyembelihan syar'i", desc: 'Oleh tenaga ahli berpengalaman, sesuai syariah' },
  { label: 'Memasak fresh hari H', desc: 'Tidak ada makanan yang dimasak kemarin' },
  { label: 'Peralatan memasak', desc: 'Kami bawa sendiri, Anda tidak perlu sediakan' },
  { label: 'Wadah saji & packaging', desc: 'Nasi kotak, mika, kresek, sendok, tisu' },
  { label: 'Tim masak & delivery', desc: 'Datang pagi, beres sebelum acara dimulai' },
  { label: 'Bersih-bersih area masak', desc: 'Kami rapikan kembali setelah selesai' },
];

const addons: { label: string; harga: string }[] = [
  { label: 'Ustadz doa aqiqah & akad', harga: '+Rp 350k' },
  { label: 'Dekorasi meja makan', harga: '+Rp 500k' },
  { label: 'Dokumentasi foto acara', harga: '+Rp 750k' },
  { label: 'Souvenir custom (nama bayi)', harga: 'mulai +Rp 3.500/pcs' },
  { label: 'Sewa kursi & meja', harga: 'Sesuai kebutuhan' },
];

export default function KelengkapanLayanan() {
  return (
    <section id="kelengkapan" className="section">
      <div className="container">
        <div className="sec-head">
          <h2>Yang Kami Siapkan, Bukan Cuma Makanan.</h2>
          <p className="lead">Supaya Anda tidak perlu pusing urus detailnya.</p>
        </div>
        <div className="trio">
          <figure style={{ margin: 0 }}>
            <Photo id="36874496" slot="kerja-1" sizes="(min-width: 60rem) 30vw, 100vw" />
            <span className="cap">Mengaduk masakan di wajan, ilustrasi.</span>
          </figure>
          <figure style={{ margin: 0 }}>
            <Photo id="37233980" slot="kerja-2" sizes="(min-width: 60rem) 30vw, 100vw" />
            <span className="cap">Sate dibakar di atas bara, ilustrasi.</span>
          </figure>
          <figure style={{ margin: 0 }}>
            <Photo id="6195800" slot="kerja-3" sizes="(min-width: 60rem) 30vw, 100vw" />
            <span className="cap">Memasak dalam panci besar, ilustrasi.</span>
          </figure>
        </div>
        <div className="kit">
          <div>
            <h3>Sudah Termasuk:</h3>
            <ul className="rows">
              {checklist.map(({ label, desc }) => (
                <li key={label}>
                  <span className="name">{label}</span>
                  <span className="small sub">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Add-on Tersedia:</h3>
            <ul className="rows">
              {addons.map(({ label, harga }) => (
                <li key={label}>
                  <span className="name">{label}</span>
                  <span className="label">{harga}</span>
                </li>
              ))}
            </ul>
            <div className="actions" style={{ marginTop: 'var(--space-xl)' }}>
              <a href="#konsultasi" className="btn btn--quiet">
                Tanya Add-on yang Tersedia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
