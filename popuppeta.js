// popup.js - Script untuk Pop-up Modal Provinsi

// Data provinsi dengan konten masing-masing
const provinceData = {
  "Jawa Barat": {
    mapImage: "aset/gedungsate.svg",
    budaya: [
      { icon: "💃", image: "", title: "Tari Jaipong", desc: "Tarian energik yang penuh keceriaan dari Jawa Barat" },
      { icon: "👘", image: "", title: "Kebaya Sunda", desc: "Pakaian tradisional yang cantik dan elegan" },
      { icon: "📖", image: "", title: "Legenda Sangkuriang", desc: "Cerita rakyat tentang asal usul Tangkuban Perahu" }
    ],
    wisata: [
      { icon: "🌋", image: "", title: "Tangkuban Perahu", desc: "Gunung berapi dengan kawah yang menakjubkan" },
      { icon: "🎢", image: "", title: "Trans Studio Bandung", desc: "Taman hiburan indoor terbesar di Indonesia" },
      { icon: "🌳", image: "", title: "Kawah Putih", desc: "Danau kawah berwarna hijau tosca yang indah" }
    ],
    kuliner: [
      { icon: "🍲", image: "", title: "Batagor", desc: "Baso tahu goreng dengan saus kacang yang gurih" },
      { icon: "🥟", image: "", title: "Siomay", desc: "Dimsum Indonesia yang lezat dan sehat" },
      { icon: "🍛", image: "", title: "Nasi Timbel", desc: "Nasi dibungkus daun pisang dengan lauk tradisional" }
    ],
    seni: [
      { icon: "🎵", image: "", title: "Angklung", desc: "Alat musik bambu yang merdu dan unik" },
      { icon: "🎪", image: "", title: "Wayang Golek", desc: "Boneka kayu untuk pertunjukan cerita tradisional" },
      { icon: "🎨", image: "", title: "Batik Mega Mendung", desc: "Motif batik khas dengan pola awan yang indah" }
    ],
    facts: [
      "Jawa Barat punya lebih dari 20 gunung berapi!",
      "Bahasa Sunda dipakai oleh 40 juta orang",
      "Bandung dijuluki 'Paris van Java' sejak zaman Belanda",
      "Angklung sudah diakui UNESCO sebagai warisan budaya"
    ]
  },
  "Jawa Tengah": {
    mapImage: "aset/borobudur.svg",
    budaya: [
      { icon: "💃", title: "Tari Serimpi", desc: "Tarian klasik yang anggun dari keraton" },
      { icon: "👘", title: "Kebaya Jawa", desc: "Pakaian tradisional dengan kebaya dan kain batik" },
      { icon: "📖", title: "Legenda Roro Jonggrang", desc: "Kisah tentang asal mula Candi Prambanan" }
    ],
    wisata: [
      { icon: "🏛️", title: "Candi Borobudur", desc: "Candi Buddha terbesar di dunia" },
      { icon: "⛰️", title: "Dieng Plateau", desc: "Dataran tinggi dengan pemandangan indah" },
      { icon: "🏰", title: "Keraton Surakarta", desc: "Istana kerajaan dengan budaya Jawa yang kental" }
    ],
    kuliner: [
      { icon: "🍗", title: "Ayam Goreng Kalasan", desc: "Ayam goreng bumbu rempah yang terkenal" },
      { icon: "🍜", title: "Soto Kudus", desc: "Soto ayam dengan kuah gurih khas Kudus" },
      { icon: "🥘", title: "Gudeg", desc: "Nangka muda dimasak dengan santan dan gula Jawa" }
    ],
    seni: [
      { icon: "🎭", title: "Wayang Kulit", desc: "Pertunjukan bayangan dengan cerita pewayangan" },
      { icon: "🥁", title: "Gamelan", desc: "Ensemble musik tradisional Jawa" },
      { icon: "🎨", title: "Batik Solo", desc: "Batik dengan motif klasik yang rumit" }
    ],
    facts: [
      "Borobudur adalah candi Buddha terbesar di dunia",
      "Jawa Tengah memiliki 2 keraton: Solo dan Yogyakarta",
      "Gamelan Jawa sudah ada sejak abad ke-8",
      "Batik Solo terkenal dengan motif Parang dan Kawung"
    ]
  },
  "Jawa Timur": {
    mapImage: "aset/bromo.svg",
    budaya: [
      { icon: "💃", title: "Tari Remo", desc: "Tarian pembuka yang energik dari Jawa Timur" },
      { icon: "👘", title: "Lurik", desc: "Kain tenun tradisional dengan garis-garis" },
      { icon: "📖", title: "Cerita Surabaya", desc: "Legenda Sura dan Baya yang jadi nama kota" }
    ],
    wisata: [
      { icon: "🌋", title: "Gunung Bromo", desc: "Gunung berapi dengan sunrise yang spektakuler" },
      { icon: "🏖️", title: "Pantai Malang", desc: "Pantai-pantai indah di pesisir selatan" },
      { icon: "🏛️", title: "Trowulan", desc: "Situs bekas ibu kota Kerajaan Majapahit" }
    ],
    kuliner: [
      { icon: "🍲", title: "Rawon", desc: "Sup daging hitam dengan bumbu kluwak" },
      { icon: "🥙", title: "Sate Madura", desc: "Sate kambing dengan bumbu kacang yang khas" },
      { icon: "🍜", title: "Rujak Cingur", desc: "Rujak dengan cingur (hidung sapi) yang unik" }
    ],
    seni: [
      { icon: "🎭", title: "Ludruk", desc: "Teater komedi tradisional Jawa Timur" },
      { icon: "🎪", title: "Reog Ponorogo", desc: "Pertunjukan dengan topeng dadak merak yang besar" },
      { icon: "🎨", title: "Batik Madura", desc: "Batik dengan warna-warna cerah dan berani" }
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
      { icon: "💃", title: "Tari Kecak", desc: "Tarian dengan iringan suara 'cak' dari para penari" },
      { icon: "👘", title: "Kebaya Bali", desc: "Pakaian tradisional dengan selendang songket" },
      { icon: "📖", title: "Legenda Tanah Lot", desc: "Cerita tentang pura di atas batu karang" }
    ],
    wisata: [
      { icon: "🏛️", title: "Pura Besakih", desc: "Pura terbesar dan tersuci di Bali" },
      { icon: "🏖️", title: "Pantai Kuta", desc: "Pantai terkenal dengan sunset yang indah" },
      { icon: "🌾", title: "Tegallalang", desc: "Sawah terasering yang sangat fotogenik" }
    ],
    kuliner: [
      { icon: "🍖", title: "Babi Guling", desc: "Babi panggang bumbu khas Bali yang gurih" },
      { icon: "🦆", title: "Bebek Betutu", desc: "Bebek bumbu rica yang dibakar dengan api kecil" },
      { icon: "🍢", title: "Sate Lilit", desc: "Sate ikan cincang yang dililitkan di bambu" }
    ],
    seni: [
      { icon: "🎭", title: "Barong Dance", desc: "Tarian sakral dengan kostum barong yang megah" },
      { icon: "🎵", title: "Gamelan Bali", desc: "Musik gamelan dengan tempo yang lebih cepat" },
      { icon: "🎨", title: "Lukisan Ubud", desc: "Seni lukis dengan gaya naturalis khas Bali" }
    ],
    facts: [
      "Bali punya lebih dari 20.000 pura (kuil Hindu)",
      "Nyepi adalah hari raya tanpa aktivitas sama sekali",
      "Subak (sistem irigasi) diakui UNESCO",
      "Bali dijuluki 'Pulau Dewata' atau 'Island of Gods'"
    ]
  },
  "Nusa Tenggara Barat": {
    mapImage: "aset/NTB.svg", // ✅ Tambahkan ini
    budaya: [
      { icon: "💃", title: "Tari Gandrung", desc: "Tarian pergaulan yang ceria dari Lombok" },
      { icon: "👘", title: "Tenun Lombok", desc: "Kain tenun dengan motif tradisional Sasak" },
      { icon: "📖", title: "Putri Mandalika", desc: "Legenda putri yang terjun ke laut" }
    ],
    wisata: [
      { icon: "🏔️", title: "Gunung Rinjani", desc: "Gunung tertinggi kedua di Indonesia" },
      { icon: "🏖️", title: "Pantai Pink", desc: "Pantai dengan pasir berwarna merah muda" },
      { icon: "🏝️", title: "Gili Trawangan", desc: "Pulau cantik tanpa kendaraan bermotor" }
    ],
    kuliner: [
      { icon: "🍗", title: "Ayam Taliwang", desc: "Ayam bakar pedas khas Lombok" },
      { icon: "🥘", title: "Plecing Kangkung", desc: "Kangkung dengan sambal tomat yang pedas" },
      { icon: "🍜", title: "Sate Bulayak", desc: "Sate dengan lontong yang dibungkus daun lontar" }
    ],
    seni: [
      { icon: "🎵", title: "Gendang Beleq", desc: "Gendang besar dengan suara yang menggelegar" },
      { icon: "🎪", title: "Peresean", desc: "Pertarungan tongkat tradisional Sasak" },
      { icon: "🧶", title: "Tenun Ikat", desc: "Teknik tenun dengan pola yang diikat dulu" }
    ],
    facts: [
      "Gunung Rinjani memiliki danau Segara Anak di puncaknya",
      "Suku Sasak adalah penduduk asli Lombok",
      "Pantai Pink hanya ada 7 di dunia, salah satunya di NTB",
      "Gendang Beleq dimainkan oleh 20-40 orang sekaligus"
    ]
  },
  "Nusa Tenggara Timur": {
    mapImage: "aset/NTT.svg", // ✅ Tambahkan ini
    budaya: [
      { icon: "💃", title: "Tari Caci", desc: "Tarian perang dengan cambuk dan perisai" },
      { icon: "👘", title: "Tenun Ikat NTT", desc: "Tenun dengan motif tradisional yang rumit" },
      { icon: "📖", title: "Legenda Komodo", desc: "Cerita tentang putri naga yang jadi komodo" }
    ],
    wisata: [
      { icon: "🦎", title: "Pulau Komodo", desc: "Habitat asli komodo, kadal terbesar di dunia" },
      { icon: "🏖️", title: "Pantai Pink Komodo", desc: "Pantai dengan pasir pink yang langka" },
      { icon: "⛰️", title: "Kelimutu", desc: "Gunung dengan 3 danau kawah berwarna berbeda" }
    ],
    kuliner: [
      { icon: "🌽", title: "Jagung Bose", desc: "Bubur jagung dengan kacang merah" },
      { icon: "🐟", title: "Ikan Sei", desc: "Ikan asap khas NTT yang gurih" },
      { icon: "🥘", title: "Rumpu Rampe", desc: "Sayuran rebus dengan sambal lu'at" }
    ],
    seni: [
      { icon: "🎵", title: "Sasando", desc: "Alat musik petik dari daun lontar" },
      { icon: "🗿", title: "Rumah Adat", desc: "Rumah tradisional dengan atap jerami tinggi" },
      { icon: "🧶", title: "Tenun Rote", desc: "Tenun dengan motif geometris yang khas" }
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
      { icon: "💃", title: "Tari Tor-Tor", desc: "Tarian sakral suku Batak dengan gerakan khas" },
      { icon: "👘", title: "Ulos", desc: "Kain tenun tradisional Batak yang indah" },
      { icon: "📖", title: "Si Boru Deak Parujar", desc: "Legenda putri yang cantik dari Danau Toba" }
    ],
    wisata: [
      { icon: "🏞️", title: "Danau Toba", desc: "Danau vulkanik terbesar di Asia Tenggara" },
      { icon: "🏝️", title: "Pulau Samosir", desc: "Pulau di tengah Danau Toba" },
      { icon: "🌳", title: "Bukit Lawang", desc: "Tempat rehabilitasi orangutan Sumatera" }
    ],
    kuliner: [
      { icon: "🍖", title: "Babi Panggang Karo", desc: "Babi panggang khas suku Karo yang gurih" },
      { icon: "🐟", title: "Arsik", desc: "Ikan mas dengan bumbu andaliman yang unik" },
      { icon: "🍲", title: "Saksang", desc: "Daging babi dengan bumbu khas Batak" }
    ],
    seni: [
      { icon: "🎵", title: "Gondang Sabangunan", desc: "Ensemble musik tradisional Batak" },
      { icon: "🏠", title: "Rumah Bolon", desc: "Rumah adat Batak dengan atap melengkung" },
      { icon: "🎨", title: "Gorga", desc: "Ukiran khas Batak dengan warna hitam, merah, putih" }
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
      { icon: "💃", title: "Tari Piring", desc: "Tarian dengan piring di tangan yang spektakuler" },
      { icon: "👘", title: "Baju Bundo Kanduang", desc: "Pakaian adat Minangkabau yang elegan" },
      { icon: "📖", title: "Legenda Malin Kundang", desc: "Cerita anak durhaka yang jadi batu" }
    ],
    wisata: [
      { icon: "🏞️", title: "Danau Maninjau", desc: "Danau kaldera dengan pemandangan indah" },
      { icon: "⛰️", title: "Ngarai Sianok", desc: "Lembah hijau yang menakjubkan" },
      { icon: "🏖️", title: "Pantai Carocok", desc: "Pantai dengan pulau kecil yang eksotis" }
    ],
    kuliner: [
      { icon: "🍛", title: "Rendang", desc: "Daging sapi bumbu rempah, makanan terenak di dunia!" },
      { icon: "🥘", title: "Gulai Kepala Ikan", desc: "Gulai dengan bumbu kuning yang kaya rempah" },
      { icon: "🍢", title: "Sate Padang", desc: "Sate dengan kuah kental berwarna kuning" }
    ],
    seni: [
      { icon: "🎵", title: "Saluang", desc: "Seruling bambu khas Minangkabau" },
      { icon: "🏠", title: "Rumah Gadang", desc: "Rumah adat dengan atap melengkung seperti tanduk kerbau" },
      { icon: "🗡️", title: "Silat Minang", desc: "Seni bela diri tradisional Minangkabau" }
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
      { icon: "💃", title: "Tari Gending Sriwijaya", desc: "Tarian penyambutan tamu yang anggun" },
      { icon: "👘", title: "Songket Palembang", desc: "Kain tenun dengan benang emas atau perak" },
      { icon: "📖", title: "Legenda Sriwijaya", desc: "Kisah kerajaan maritim yang besar" }
    ],
    wisata: [
      { icon: "🌉", title: "Jembatan Ampera", desc: "Ikon kota Palembang yang megah" },
      { icon: "🏛️", title: "Benteng Kuto Besak", desc: "Benteng peninggalan Kesultanan Palembang" },
      { icon: "🏞️", title: "Pulau Kemaro", desc: "Pulau kecil dengan legenda cinta tragis" }
    ],
    kuliner: [
      { icon: "🍜", title: "Pempek", desc: "Ikan tenggiri giling dengan saus cuko yang asam pedas" },
      { icon: "🥘", title: "Tekwan", desc: "Sup bola ikan dengan soun dan jamur" },
      { icon: "🍲", title: "Model", desc: "Ikan gabus dengan bumbu kuning khas Palembang" }
    ],
    seni: [
      { icon: "🎵", title: "Musik Gambus", desc: "Musik dengan alat musik petik khas Arab-Melayu" },
      { icon: "🚣", title: "Perahu Bidar", desc: "Perahu tradisional untuk lomba balap" },
      { icon: "🎨", title: "Kain Jumputan", desc: "Kain dengan teknik pewarnaan ikat celup" }
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

// Fungsi untuk mengganti tab
function showTab(tabName) {
  // Remove active class dari semua tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add active class ke tab yang diklik
  event.target.closest('.tab').classList.add('active');

  // Load konten sesuai tab
  loadContent(tabName, window.currentProvinceData);
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