import { useState } from 'react';
import Photo from './Photo';
import type { PhotoId } from '../config/photos';

type Dish = { nama: string; desc: string };
type Category = {
  id: string;
  label: string;
  photos: [PhotoId, PhotoId];
  items: Dish[];
};

const kategori: Category[] = [
  {
    id: 'aqiqah',
    label: 'Andalan Aqiqah',
    photos: ['17650169', '37052500'],
    items: [
      { nama: 'Gulai Kambing', desc: 'Bumbu rempah lengkap, daging empuk' },
      { nama: 'Sate Kambing', desc: 'Arang batok, tidak bau prengus' },
      { nama: 'Tongseng Kambing', desc: 'Kuah kental, pedas gurih' },
      { nama: 'Nasi Kebuli', desc: 'Nasi rempah khas Timur Tengah' },
      { nama: 'Sop Tulang Kambing', desc: 'Kaldu bening, menyegarkan' },
    ],
  },
  {
    id: 'umum',
    label: 'Menu Umum',
    photos: ['37066375', '34156954'],
    items: [
      { nama: 'Ayam Bakar / Goreng Kampung', desc: 'Ayam kampung pilihan, empuk & gurih' },
      { nama: 'Rendang Sapi Minang', desc: 'Slow cook 4 jam, cita rasa autentik' },
      { nama: 'Sayur Lodeh / Asem', desc: 'Segar & menyeimbangkan hidangan' },
      { nama: 'Soto Ayam / Betawi', desc: 'Kuah kaldu hangat, pelengkap sempurna' },
      { nama: 'Urap / Lalapan + Sambal', desc: 'Sayuran segar, sambal terasi' },
    ],
  },
  {
    id: 'nasi',
    label: 'Nasi & Tumpeng',
    photos: ['36911440', '37002428'],
    items: [
      { nama: 'Nasi Putih / Uduk / Kuning', desc: 'Nasi berkualitas, dimasak segar hari H' },
      { nama: 'Tumpeng Mini', desc: 'Mulai Rp 350k, untuk syukuran kecil' },
      { nama: 'Tumpeng Besar', desc: 'Mulai Rp 650k, untuk acara besar' },
      { nama: 'Nasi Bakar Daun Pisang', desc: 'Aroma daun pisang, khas & unik' },
    ],
  },
  {
    id: 'dessert',
    label: 'Dessert & Penutup',
    photos: ['37205601', '37081056'],
    items: [
      { nama: 'Kolak Pisang / Ubi', desc: 'Manis hangat, cocok untuk tahlilan' },
      { nama: 'Bubur Sumsum', desc: 'Lembut gurih, tradisi turun-temurun' },
      { nama: 'Es Buah / Cincau', desc: 'Segar, cocok untuk acara siang hari' },
    ],
  },
];

export default function MenuMasakan() {
  const [active, setActive] = useState(0);
  const kat = kategori[active]!;

  return (
    <section id="menu" className="section band-2">
      <div className="container">
        <div className="sec-head">
          <h2>Menu Yang Sudah Teruji Puluhan Tahun.</h2>
          <p className="lead">
            Resep turun-temurun, dimasak fresh oleh tim juru masak berpengalaman. Tanpa MSG
            berlebihan. Tanpa bahan pengawet.
          </p>
        </div>
        <div className="menu__layout">
          <div
            role="tablist"
            aria-label="Pilih kategori menu"
            aria-orientation="vertical"
            className="menu__tabs"
          >
            {kategori.map((k, i) => (
              <button
                key={k.id}
                id={`menu-tab-${k.id}`}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-controls={`menu-panel-${k.id}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(event) => {
                  const key = event.key;
                  if (
                    !['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(
                      key,
                    )
                  )
                    return;
                  event.preventDefault();
                  const forward = key === 'ArrowDown' || key === 'ArrowRight';
                  const next =
                    key === 'Home'
                      ? 0
                      : key === 'End'
                        ? kategori.length - 1
                        : (i + (forward ? 1 : -1) + kategori.length) % kategori.length;
                  setActive(next);
                  event.currentTarget.parentElement
                    ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                    [next]?.focus();
                }}
              >
                {k.label}
              </button>
            ))}
          </div>
          <div id={`menu-panel-${kat.id}`} role="tabpanel" aria-labelledby={`menu-tab-${kat.id}`}>
            <div className="menu__photos">
              <Photo
                key={kat.photos[0]}
                id={kat.photos[0]}
                slot="menu-1"
                sizes="(min-width: 60rem) 45vw, 100vw"
              />
              <Photo
                key={kat.photos[1]}
                id={kat.photos[1]}
                slot="menu-2"
                sizes="(min-width: 60rem) 22vw, 100vw"
              />
            </div>
            <ul className="dishes">
              {kat.items.map(({ nama, desc }) => (
                <li key={nama}>
                  <h3>{nama}</h3>
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
