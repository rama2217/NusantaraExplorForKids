// popup.js - Script untuk Pop-up Modal Provinsi

// Data provinsi dengan konten masing-masing
const provinceData = {
  "Jawa Barat": {
    mapImage: "aset/gedungsate.svg",
    budaya: [
      { icon: "💃", title: "Tari Jaipong", desc: "Tarian pergaulan yang energik, memadukan tradisi <b> pencak silat, ketuk tilu, dan ronggeng </b>. Dicirikan oleh gerakan bahu dan pinggul yang lincah." },
      { icon: "🎵", title: "Angklung", desc: "Alat musik bambu tradisional yang dimainkan dengan digoyangkan. Sudah diakui oleh <b> UNESCO </b> sebagai Warisan Budaya Tak Benda Dunia." },
      { icon: "🎭", title: "Wayang Golek", desc: "Pertunjukan teater boneka kayu (golek) yang dimainkan oleh dalang. Sering membawakan cerita epik <b> Mahabharata </b> dan kisah lokal Sunda." },
      { icon: "👘", title: "Pakaian Adat Sunda", desc: "Pria mengenakan <b> Baju Bedahan </b> atau Jas Tutup, sedangkan wanita mengenakan <b> Kebaya Sunda </b> dan kain batik <b>parang</b> atau <b>lereng</b>." }
    ],
    facts: [
      "Jawa Barat punya lebih dari 20 gunung berapi!",
      "Bahasa Sunda dipakai oleh 40 juta orang",
      "Bandung dijuluki 'Paris van Java' sejak zaman Belanda",
      "Angklung sudah diakui UNESCO sebagai warisan budaya"
    ]
  },
  "Jawa Tengah": {
    mapImage: "aset/candiborobudur.png",
  budaya: [
      { icon: "🎭", title: "Wayang Kulit", desc: "Pertunjukan bayangan semalam suntuk dengan boneka kulit, diiringi Gamelan. Dalang berperan penting dalam menyampaikan cerita dan ajaran moral." },
      { icon: "💃", title: "Tari Serimpi", desc: "Tarian klasik keraton yang anggun dan sakral, ditarikan oleh <b>empat penari wanita</b> yang melambangkan empat unsur (api, air, udara, tanah)." },
      { icon: "🎨", title: "Batik Jawa Klasik", desc: "Kain batik dari Solo dan Yogyakarta, dicirikan oleh warna <b>sogan</b> (coklat) dan motif-motif filosofis seperti <b>Parang</b> dan <b>Kawung</b>." },
      { icon: "🏠", title: "Rumah Joglo", desc: "Rumah adat dengan ciri khas atap utama berbentuk perahu terbalik dan tiang utama (<b>soko guru</b>), melambangkan status sosial dan arsitektur yang kokoh." }
    ],
    facts: [
      "Borobudur adalah candi Buddha terbesar di dunia",
      "Jawa Tengah memiliki 2 keraton: Solo dan Yogyakarta",
      "Gamelan Jawa sudah ada sejak abad ke-8",
      "Batik Solo terkenal dengan motif Parang dan Kawung"
    ]
  },
  "Jawa Timur": {
    mapImage: "aset/bromo.png",
    budaya: [
      { icon: "🎪", title: "Reog Ponorogo", desc: "Tarian kolosal dengan <b>Singa Barong</b> (topeng berkepala macan berbulu merak) yang berat dan dimainkan dengan gigi. Melambangkan keperkasaan dan semangat kepahlawanan." },
      { icon: "💃", title: "Tari Remo", desc: "Tarian pembuka yang dinamis, awalnya ditarikan oleh pria, dengan gerakan khas seperti silat, hentakan kaki, dan selendang yang diayunkan." },
      { icon: "🎭", title: "Ludruk", desc: "Teater rakyat tradisional yang menceritakan kehidupan sehari-hari masyarakat dalam bahasa Jawa Timuran, diselingi lawak (<b>dagelan</b>) dan lagu." },
      { icon: "🗡️", title: "Carok", desc: "Tradisi Suku Madura yang melibatkan pertarungan kehormatan menggunakan senjata <b>Celurit</b>. Kini lebih sering diinterpretasikan dalam seni pertunjukan." }
    ],
    facts: [
      "Gunung Bromo terkenal dengan pemandangan sunrisenya",
      "Surabaya adalah kota terbesar kedua di Indonesia",
      "Reog Ponorogo menggunakan topeng seberat 50kg!",
      "Majapahit adalah kerajaan terbesar di Nusantara"
    ]
  },
  "Bali": {
    mapImage: "aset/borobudur.svg",
    budaya: [
      { icon: "💃", title: "Tari Kecak", desc: "Tarian drama tanpa iringan musik, ditarikan oleh puluhan pria yang duduk melingkar dan menyerukan kata <b>'cak-cak-cak'</b>. Menceritakan kisah Ramayana." },
      { icon: "🏛️", title: "Sistem Subak", desc: "Organisasi pengairan sawah tradisional yang diakui <b>UNESCO</b>. Melambangkan filosofi <b>Tri Hita Karana</b> (keseimbangan antara manusia, alam, dan Tuhan)." },
      { icon: "📖", title: "Upacara Ngaben", desc: "Upacara pembakaran jenazah umat Hindu di Bali, sebagai simbol pembersihan roh dan pengembalian unsur-unsur tubuh ke alam." },
      { icon: "🎵", title: "Gamelan Bali", desc: "Musik ansambel yang dicirikan oleh <b>tempo yang cepat</b>, suara yang lantang, dan ritme yang kompleks dan energik." }
    ],
    facts: [
      "Bali punya lebih dari 20.000 pura (kuil Hindu)",
      "Nyepi adalah hari raya tanpa aktivitas sama sekali",
      "Subak (sistem irigasi) diakui UNESCO",
      "Bali dijuluki 'Pulau Dewata' atau 'Island of Gods'"
    ]
  },
  "Nusa Tenggara Barat": {
    mapImage: "aset/NTB.svg", 
   budaya: [
      { icon: "🎪", title: "Peresean", desc: "Pertarungan tradisional Suku Sasak yang menggunakan <b>tongkat rotan</b> dan perisai kulit (<b>ende</b>). Melambangkan kejantanan dan keberanian." },
      { icon: "👘", title: "Tenun Ikat Sasak", desc: "Kain tenun khas Lombok, sering menampilkan motif geometris dan flora/fauna lokal. Diturunkan dari ibu ke anak sebagai warisan budaya." },
      { icon: "🎵", title: "Gendang Beleq", desc: "Alat musik perkusi berupa dua gendang besar yang dimainkan oleh <b>banyak pemain</b> dalam upacara adat Suku Sasak, menghasilkan suara yang megah." },
      { icon: "💃", title: "Tari Gandrung", desc: "Tarian pergaulan yang sering dibawakan untuk menyambut tamu, diiringi alat musik tradisional seperti Gendang dan Rincik." }
    ],
    facts: [
      "Gunung Rinjani memiliki danau Segara Anak di puncaknya",
      "Suku Sasak adalah penduduk asli Lombok",
      "Pantai Pink hanya ada 7 di dunia, salah satunya di NTB",
      "Gendang Beleq dimainkan oleh 20-40 orang sekaligus"
    ]
  },
  "Nusa Tenggara Timur": {
    mapImage: "aset/NTT.svg", 
    budaya: [
      { icon: "🎵", title: "Sasando", desc: "Alat musik petik dari Pulau Rote yang unik, terbuat dari anyaman daun lontar dan bambu. Bunyinya merdu menyerupai <b>harpa</b>." },
      { icon: "👘", title: "Tenun Ikat NTT", desc: "Kain tenun dengan warna dan motif yang sangat beragam. Setiap pulau (Sumba, Flores, Timor) memiliki motif, warna, dan <b>makna ritual</b> yang berbeda." },
      { icon: "🗡️", title: "Tari Caci", desc: "Tarian perang Suku Manggarai (Flores) yang melibatkan pertarungan cambuk (<b>Caci</b>) dan perisai. Digelar sebagai bagian dari upacara adat." },
      { icon: "🏠", title: "Uma Lengge", desc: "Rumah adat khas Bima (Sumbawa) yang berbentuk panggung dengan atap kerucut. Digunakan juga sebagai lumbung penyimpanan hasil panen." }
    ],
    facts: [
      "Komodo hanya ada di pulau Komodo dan Rinca",
      "Danau Kelimutu bisa berubah warna setiap saat",
      "NTT punya 566 pulau!",
      "Sasando terbuat dari daun lontar yang dikeringkan"
    ]
  },
  "Sumatera Utara": {
    mapImage: "aset/sumut.svg",
    budaya: [
      { icon: "👘", title: "Ulos", desc: "Kain tenun tradisional Batak yang sakral, diberikan dalam upacara adat sebagai simbol <b>restu, kasih sayang, dan perlindungan</b>. Jenisnya memiliki fungsi yang berbeda-beda." },
      { icon: "💃", title: "Tari Tor-Tor", desc: "Tarian tradisional yang sarat makna ritual Suku Batak, diiringi musik <b>Gondang</b>. Gerakan tangan dan kaki sederhana, namun penuh penghayatan." },
      { icon: "🏠", title: "Rumah Bolon", desc: "Rumah adat Batak Toba yang berbentuk panggung dengan atap melengkung menyerupai <b>punggung kerbau</b>. Dindingnya dihiasi ukiran <b>Gorga</b>." },
      { icon: "🎵", title: "Gondang Sabangunan", desc: "Ansambel musik tradisional yang terdiri dari 5 jenis alat musik perkusi (sarune, ogung, hesek, dll.), mengiringi Tari Tor-Tor dan upacara adat." }
    ],
    facts: [
      "Danau Toba terbentuk dari letusan supervulkan 74.000 tahun lalu",
      "Pulau Samosir lebih besar dari Singapura!",
      "Ulos dianggap sebagai kain sakral oleh suku Batak",
      "Andaliman adalah merica Batak yang bikin lidah kesemutan"
    ]
  },
  "Sumatera Barat": {
    mapImage: "aset/sumbar.svg",
    budaya: [
      { icon: "🏠", title: "Rumah Gadang", desc: "Rumah adat Minangkabau yang memiliki atap berbentuk melengkung tajam (<b>gonjong</b>) seperti <b>tanduk kerbau</b>. Melambangkan sistem <b>Matrilineal</b> (garis keturunan ibu)." },
      { icon: "💃", title: "Tari Piring", desc: "Tarian tradisional yang menyajikan piring di telapak tangan penari. Bagian klimaks, penari akan menari di atas pecahan piring." },
      { icon: "🗡️", title: "Silat Minang", desc: "Seni bela diri tradisional yang dikenal cepat, luwes, dan sering digabungkan dengan tarian (<b>Silek</b>). Filosofinya mengajarkan kesabaran dan kearifan." },
      { icon: "📖", title: "Adat Basandi Syarak", desc: "Filosofi Minangkabau: <b>Adat Bersendikan Syariat, Syariat Bersendikan Kitabullah</b>. Menekankan ketaatan pada ajaran Islam." }
    ],
    facts: [
      "Rendang dinobatkan sebagai makanan terenak di dunia",
      "Minangkabau menganut sistem matrilineal (garis keturunan ibu)",
      "Rumah Gadang dibangun tanpa paku!",
      "Kata 'Padang' berarti padang rumput luas"
    ]
  },
  "Sumatera Selatan": {
    mapImage: "aset/sumsel.svg",
    budaya: [
      { icon: "👘", title: "Songket Palembang", desc: "Kain tenun tradisional mewah dengan hiasan benang <b>emas atau perak</b> yang rumit. Merupakan simbol kemuliaan dan status sosial sejak zaman Sriwijaya." },
      { icon: "💃", title: "Tari Gending Sriwijaya", desc: "Tarian penyambutan tamu kehormatan yang anggun, melambangkan keramahan dan kemuliaan <b>Kerajaan Sriwijaya</b> di masa lampau." },
      { icon: "🏛️", title: "Bongkeng", desc: "Pakaian Adat pernikahan yang mencolok dengan warna merah, berhiaskan mahkota (Aesan Gede) dan perhiasan emas yang mewah." },
      { icon: "📖", title: "Syair Siti Zubaidah", desc: "Karya sastra klasik Melayu berupa syair panjang yang populer di Palembang, mengisahkan perjuangan dan kesetiaan seorang wanita." }
    ],
    facts: [
      "Sriwijaya adalah kerajaan maritim terbesar di Asia Tenggara",
      "Pempek ada lebih dari 20 jenis berbeda!",
      "Jembatan Ampera dulunya bisa dibuka untuk kapal lewat",
      "Palembang adalah tuan rumah Asian Games 2018"
    ]
  }
};

// Fungsi untuk membuka modal
function openModal(provinceName) {
  const data = provinceData[provinceName];
  if (!data) {
    console.error('Province data not found for:', provinceName);
    return;
  }

  // Set judul
  document.getElementById('modalTitle').textContent = provinceName;
  
  // Set icon/gambar peta di header
  const modalIconElement = document.getElementById('modalIcon');
  
  // Clear existing content first
  modalIconElement.innerHTML = '';
  
  if (data.mapImage && data.mapImage !== "") {
    console.log('Attempting to load map image:', data.mapImage);
    
    const img = document.createElement('img');
    img.src = data.mapImage;
    img.alt = provinceName;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    
    img.onerror = function() {
      console.error('Failed to load map image:', data.mapImage);
      console.log('Falling back to emoji icon');
      modalIconElement.textContent = data.icon || '🗺️';
    };
    
    img.onload = function() {
      console.log('Map image loaded successfully:', data.mapImage);
    };
    
    modalIconElement.appendChild(img);
  } else {
    console.log('No mapImage specified, using emoji:', data.icon);
    modalIconElement.textContent = data.icon || '🗺️';
  }
  
  document.getElementById('modalHeader').style.background = data.gradient;

  // Load konten default (Budaya)
  loadContent('budaya', data);

  // Tampilkan modal
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Simpan data provinsi saat ini
  window.currentProvinceData = data;
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Fungsi untuk menutup modal saat klik overlay
function closeModalOnOverlay(event) {
  if (event.target === document.getElementById('modalOverlay')) {
    closeModal();
  }
}

// Fungsi untuk load konten berdasarkan kategori
function loadContent(category, data) {
  const contentContainer = document.getElementById('contentContainer');
  const contentData = data[category];

  if (!contentData) return;

  let html = '<div class="content-grid">';
  
  contentData.forEach(item => {
    // Cek apakah ada gambar, jika ada gunakan gambar, jika tidak gunakan emoji
    let iconHtml;
    if (item.image && item.image !== "") {
      console.log('Loading content image:', item.image); // Debug
      iconHtml = `<img src="${item.image}" alt="${item.title}" onerror="console.error('Failed to load:', this.src); this.style.display='none'; this.parentElement.innerHTML='${item.icon}';">`;
    } else {
      iconHtml = item.icon;
    }
    
    html += `
      <div class="content-item">
        <div class="content-icon">${iconHtml}</div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `;
  });

  html += '</div>';

  // Tambahkan fun facts
  html += `
    <div class="fun-facts">
      <h3>💡 Fakta Menarik</h3>
      <ul class="fact-list">
        ${data.facts.map(fact => `<li>${fact}</li>`).join('')}
      </ul>
    </div>
  `;

  contentContainer.innerHTML = html;
}

// Event listener untuk ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Event listener untuk semua tombol provinsi
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.province-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const provinceName = this.textContent.trim();
      openModal(provinceName);
    });
  });
});