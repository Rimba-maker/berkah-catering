// Semua foto adalah ilustrasi dari Pexels (lisensi Pexels), bukan dokumentasi Berkah Catering.
// Ganti file di public/images/p/<id>.webp dengan foto asli; nama berkas = ID foto Pexels.
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

// id → [fotografer, apa yang tampak]
const meta = {
  '36877956': ['Henny Wiyanti', 'Tumpeng nasi kuning di atas nampan bambu'],
  '36325150': ['Firman Marek', 'Keluarga berdoa sebelum menyantap hidangan'],
  '16302221': ['Serhat Tug', 'Anak kambing merumput di padang'],
  '37081070': ['Teguh S', 'Sate, nasi goreng dan es teh di atas meja'],
  '37106996': ['Tamba Budiarsana', 'Nasi kuning berlauk di atas meja marmer'],
  '37279760': ['Andaru Firmansyah', 'Nasi kotak berisi ayam, tampak dari atas'],
  '37073149': ['Esase', 'Hidangan nasi di atas daun pisang'],
  '33499734': ['Instinct Khalid', 'Tumpeng mini dengan mi, ayam dan mentimun'],
  '37205603': ['Ieda Teddy', 'Meja jamuan Indonesia dengan aneka lauk'],
  '12521117': ['Laurissa Booyse', 'Tangan bayi baru lahir menggenggam jari orang tua'],
  '37113558': ['Man Fong Wong', 'Nasi kuning dengan ayam, telur dan emping'],
  '37065021': ['Mrasyadindra', 'Hidangan Indonesia di atas meja kayu'],
  '36993827': ['Andry Sasongko', 'Tumpeng dengan aneka lauk dan hiasan'],
  '36088273': ['Kamera Ragnala', 'Keluarga menyantap hidangan bersama'],
  '17650169': ['Ali Dashti', 'Nasi rempah dengan daging kambing, lemon dan cabai'],
  '37052500': ['Raditya Amoret', 'Sate, mi dan nasi di meja makan'],
  '37066375': ['Desmond Lim', 'Rendang dengan cabai merah'],
  '34156954': ['Edward Legowo', 'Nasi dan aneka lauk di atas meja'],
  '36911440': ['Firman Marek', 'Tumpeng berhias bunga dan pita'],
  '37002428': ['Kevin Yung', 'Tumpeng dengan ayam goreng dan lalapan'],
  '37205601': ['Ieda Teddy', 'Nasi kuning dengan minuman es'],
  '37081056': ['Teguh S', 'Nasi kuning, lauk dan minuman di meja kayu'],
  '36874496': ['Huỳnh Như Mavi', 'Tangan mengaduk masakan di wajan'],
  '37233980': ['Tuti Isnawati', 'Sate dibakar di atas bara berasap'],
  '6195800': ['Pexels', 'Memasak dalam panci besar di atas api'],
  '39931476': ['Andreas Ebner', 'Tangan ibu memegang tangan bayi'],
  '38487728': ['Tuti Isnawati', 'Keluarga bersama anak'],
  '37279764': ['Andaru Firmansyah', 'Nasi ayam dalam kotak makan'],
  '36930230': ['Muhammad Solikin', 'Penjual membakar sate di pasar malam'],
} as const;

export type PhotoId = keyof typeof meta;

export const photo = (id: PhotoId) => ({
  src: `${basePath}/images/p/${id}.webp`,
  id,
  by: meta[id][0],
  alt: meta[id][1],
  url: `https://www.pexels.com/photo/${id}/`,
});

export const credits = (Object.keys(meta) as PhotoId[]).map((id) => ({
  id,
  by: meta[id][0],
  url: `https://www.pexels.com/photo/${id}/`,
}));
