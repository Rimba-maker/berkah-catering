// Semua foto dari Pexels — ganti URL jika foto tidak sesuai
// Format resize: tambah ?auto=compress&cs=tinysrgb&w={lebar}

const pexels = (id: number, w = 1280) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const photos = {
  // Hero — hidangan aqiqah lengkap (1920px untuk full-bleed)
  hero: pexels(36871894, 1920),

  // Layanan cards
  layanan: {
    aqiqah:    pexels(18284818),
    khitanan:  pexels(36088277),
    wisuda:    pexels(36824882),
    tahlilan:  pexels(10505880),
    pindah:    pexels(36930230),
    walimahan: pexels(36824888),
  },

  // Paket aqiqah
  paket: {
    kambing:   pexels(33435593),
    gulai:     pexels(37052607),
    sate:      pexels(37122836),
    nasiKotak: pexels(37106996),
    tumpeng:   pexels(36877956),
  },

  // Menu showcase
  menu: {
    gulaiKambing: pexels(37052497),
    sateKambing:  pexels(37205316),
    rendang:      pexels(14336378),
    nasiKotak:    pexels(37205641),
    tumpeng:      pexels(36993827),
    kolak:        pexels(37081048),
  },

  // Kelengkapan & proses
  proses: {
    masak:     pexels(10605810),
    packaging: pexels(37106136),
  },

  // Testimonial avatars
  testimonial: {
    t1: pexels(35365024),
    t2: pexels(36824882),
    t3: pexels(36088277),
    t4: pexels(30881299),
  },
} as const;
