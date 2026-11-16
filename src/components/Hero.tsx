import Photo from './Photo';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <h1 id="hero-title">Untuk Momen Syukur Yang Paling Berharga.</h1>
          <p className="lead">Aqiqah dan syukuran halal, masak segar hari H. Mulai Rp 2.8 jt.</p>
          <div className="actions">
            <a href="#konsultasi" className="btn">
              Konsultasi Paket Aqiqah
            </a>
            <a href="#layanan" className="btn btn--quiet">
              Lihat semua layanan
            </a>
          </div>
        </div>
        <div>
          <Photo
            id="36877956"
            slot="hero"
            eager
            pos="50% 45%"
            sizes="(min-width: 60rem) 58vw, 100vw"
          />
          <span className="cap">Tumpeng nasi kuning untuk syukuran, foto ilustrasi.</span>
        </div>
      </div>
    </section>
  );
}
