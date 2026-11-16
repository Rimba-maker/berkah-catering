import { useState } from 'react';
import Photo from './Photo';
import type { PhotoId } from '../config/photos';

const tabs: {
  id: string;
  label: string;
  heading: string;
  desc: string;
  menu: string;
  img: PhotoId;
  cap: string;
  tiers: { nama: string; harga: string; min: string }[];
}[] = [
  {
    id: 'khitanan',
    label: 'Khitanan',
    heading: 'Syukuran Khitanan',
    desc: 'Format nasi kotak atau prasmanan, untuk tamu 50–500 orang.',
    menu: 'Menu andalan: Nasi kuning tumpeng + ayam ingkung + lauk pauk komplit',
    img: '37113558',
    cap: 'Nasi kuning dengan ayam dan telur, ilustrasi.',
    tiers: [
      { nama: 'Nasi Kotak Standar', harga: 'Rp 28k/porsi', min: 'Min 50 porsi' },
      { nama: 'Nasi Kotak Premium', harga: 'Rp 45k/porsi', min: 'Min 50 porsi' },
      { nama: 'Prasmanan Standar', harga: 'Rp 55k/pax', min: 'Min 100 pax' },
      { nama: 'Prasmanan Premium', harga: 'Rp 85k/pax', min: 'Min 100 pax' },
    ],
  },
  {
    id: 'tahlilan',
    label: 'Tahlilan',
    heading: 'Tahlilan & Yasinan',
    desc: 'Menu sederhana & khusyuk untuk acara keluarga. 3 hari, 7 hari, 40 hari, atau 100 hari.',
    menu: 'Tersedia nasi bungkus daun pisang, nasi kotak tahlil, kolak, bubur sumsum, takjil.',
    img: '37065021',
    cap: 'Hidangan di atas meja kayu, ilustrasi.',
    tiers: [
      { nama: 'Nasi Bungkus Daun Pisang', harga: 'Rp 15k–20k/bungkus', min: 'Min 30 porsi' },
      { nama: 'Nasi Kotak Tahlil', harga: 'Rp 22k–28k/kotak', min: 'Min 30 kotak' },
      { nama: 'Kolak + Bubur Sumsum', harga: 'Rp 8k–15k/porsi', min: 'Min 30 porsi' },
    ],
  },
  {
    id: 'pindah',
    label: 'Pindah Rumah',
    heading: 'Tasyakuran Pindah Rumah',
    desc: 'Casual & hangat: tetangga baru datang, disambut dengan makan-makan berkah.',
    menu: 'Bonus tumpeng syukuran untuk order min. 50 porsi.',
    img: '36993827',
    cap: 'Tumpeng dengan aneka lauk, ilustrasi.',
    tiers: [
      { nama: 'Nasi Kotak', harga: 'Rp 28k–42k/kotak', min: 'Min 30 kotak' },
      { nama: 'Prasmanan', harga: 'Rp 55k–75k/pax', min: 'Min 50 pax' },
    ],
  },
  {
    id: 'wisuda',
    label: 'Wisuda',
    heading: 'Tasyakuran Wisuda & Kelulusan',
    desc: 'Proud moment: rayakan bersama keluarga dan orang-orang tersayang!',
    menu: 'Tersedia paket family gathering, nasi kotak, hingga catering ke venue.',
    img: '36088273',
    cap: 'Keluarga menyantap hidangan bersama, ilustrasi.',
    tiers: [
      { nama: 'Paket Family Gathering', harga: 'Rp 1.5 jt – 2.5 jt', min: '20–40 orang' },
      { nama: 'Nasi Kotak', harga: 'Rp 30k–48k/kotak', min: 'Min 20 kotak' },
      { nama: 'Catering ke Venue', harga: 'Hubungi kami', min: 'Sesuai kebutuhan' },
    ],
  },
];

export default function PaketSyukuran() {
  const [active, setActive] = useState(0);
  const tab = tabs[active]!;

  return (
    <section id="paket-syukuran" className="section">
      <div className="container cols">
        <div className="index__proof">
          <div className="index__stack">
            {tabs.map((t, i) => (
              <Photo
                key={t.id}
                id={t.img}
                slot={`syukuran-${i + 1}`}
                className={i === active ? 'is-on' : ''}
                sizes="(min-width: 60rem) 40vw, 100vw"
              />
            ))}
          </div>
          <span className="cap">{tab.cap}</span>
        </div>
        <div>
          <div className="sec-head">
            <h2>Paket Syukuran Sesuai Momenmu.</h2>
            <p className="lead">
              Setiap momen punya keistimewaannya. Kami sesuaikan hidangan dengan acara.
            </p>
          </div>
          <div role="tablist" aria-label="Pilih jenis acara syukuran" className="tabs">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={`panel-${t.id}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(event) => {
                  const key = event.key;
                  if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(key)) return;
                  event.preventDefault();
                  const next =
                    key === 'Home'
                      ? 0
                      : key === 'End'
                        ? tabs.length - 1
                        : (i + (key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
                  setActive(next);
                  event.currentTarget.parentElement
                    ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                    [next]?.focus();
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className="panel"
          >
            <h3>{tab.heading}</h3>
            <p className="lead">{tab.desc}</p>
            <ul className="rows">
              {tab.tiers.map(({ nama, harga, min }) => (
                <li key={nama}>
                  <span className="name">{nama}</span>
                  <span className="price">{harga}</span>
                  <span className="small sub">{min}</span>
                </li>
              ))}
            </ul>
            <p className="label">{tab.menu}</p>
            <div className="actions" style={{ marginTop: 'var(--space-xl)' }}>
              <a href="#konsultasi" className="btn">
                Konsultasi Paket Ini
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
