import { useState } from 'react';
import Photo from './Photo';
import type { PhotoId } from '../config/photos';

const layanan: {
  label: string;
  desc: string;
  harga: string;
  href: string;
  img: PhotoId;
  cap: string;
}[] = [
  {
    label: 'Aqiqah',
    desc: "Syukuran kelahiran buah hati. Kambing pilihan, disembelih syar'i, dimasak fresh hari H.",
    harga: 'Mulai Rp 2.8 jt',
    href: '#paket-aqiqah',
    img: '37081070',
    cap: 'Sate dan nasi, ilustrasi hidangan aqiqah.',
  },
  {
    label: 'Khitanan',
    desc: 'Syukuran khitan anak. Momen penting yang harus berkesan. Catering lengkap, bisa tambah dekorasi.',
    harga: 'Mulai Rp 3.5 jt',
    href: '#paket-syukuran',
    img: '37106996',
    cap: 'Nasi kuning berlauk, ilustrasi sajian khitanan.',
  },
  {
    label: 'Tasyakuran Wisuda',
    desc: 'Rayakan kelulusan dengan makan-makan bersama keluarga besar. Nasi kotak atau prasmanan.',
    harga: 'Mulai Rp 1.5 jt',
    href: '#paket-syukuran',
    img: '37279760',
    cap: 'Nasi kotak, ilustrasi pilihan sajian wisuda.',
  },
  {
    label: 'Tahlilan & Yasinan',
    desc: 'Hidangan sederhana tapi penuh ketulusan untuk malam tahlil, 3 hari, 7 hari, 40 hari, atau 100 hari.',
    harga: 'Mulai Rp 850k',
    href: '#paket-syukuran',
    img: '37073149',
    cap: 'Nasi di atas daun pisang, ilustrasi hidangan tahlilan.',
  },
  {
    label: 'Tasyakuran Pindah Rumah',
    desc: 'Syukuran hunian baru: mengundang tetangga & kerabat, hidangan berlimpah, berkah berlipat.',
    harga: 'Mulai Rp 2 jt',
    href: '#paket-syukuran',
    img: '33499734',
    cap: 'Tumpeng mini, ilustrasi syukuran rumah baru.',
  },
  {
    label: 'Walimahan',
    desc: 'Resepsi pernikahan sederhana & intimate. Full catering atau parsial (masak bareng keluarga).',
    harga: 'Mulai Rp 5 jt',
    href: '#paket-syukuran',
    img: '37205603',
    cap: 'Meja jamuan, ilustrasi walimahan.',
  },
];

export default function LayananUtama() {
  const [active, setActive] = useState(0);
  return (
    <section id="layanan" className="section">
      <div className="container cols">
        <div className="index__proof">
          <div className="index__stack">
            {layanan.map((l, i) => (
              <Photo
                key={l.img}
                id={l.img}
                slot={`layanan-${i + 1}`}
                className={i === active ? 'is-on' : ''}
                sizes="(min-width: 60rem) 40vw, 100vw"
              />
            ))}
          </div>
          <span className="cap" aria-live="polite">
            {layanan[active]!.cap}
          </span>
        </div>
        <div>
          <div className="sec-head">
            <h2>Kami Hadir di Momen Terpenting Keluargamu.</h2>
            <p className="lead">
              Dari kelahiran si kecil sampai tasyakuran pindah rumah, kami siap melayani dengan
              hati.
            </p>
          </div>
          <ul className="index__list">
            {layanan.map(({ label, desc, harga, href }, i) => (
              <li key={label}>
                <a
                  href={href}
                  aria-current={active === i ? 'true' : undefined}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <h3>{label}</h3>
                  <span className="price">{harga}</span>
                  <p>{desc}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
