document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const videoCards = document.querySelectorAll('.video-card');
    const searchInput = document.getElementById('video-search'); // Ambil input search

    // Variabel untuk menyimpan kategori yang aktif saat ini
    let activeCategory = 'all';

    // Set initial active button to "Semua" (all)
    const allButton = document.querySelector('.filter-button[data-category="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }

    /**
     * Fungsi utama untuk menyaring dan menampilkan kartu video.
     * Menggabungkan filter kategori dan filter pencarian.
     */
    function filterVideos() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        videoCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            
            // 1. Cek berdasarkan Kategori
            const categoryMatch = activeCategory === 'all' || cardCategory === activeCategory;
            
            // 2. Cek berdasarkan Pencarian Judul
            const searchMatch = cardTitle.includes(searchTerm);

            // Tampilkan hanya jika memenuhi kriteria Kategori DAN Pencarian
            if (categoryMatch && searchMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event Listener untuk Tombol Filter
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Update status tombol aktif
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 2. Update kategori yang aktif
            activeCategory = this.getAttribute('data-category');

            // 3. Jalankan fungsi filter
            filterVideos();
        });
    });

    // Event Listener untuk Input Pencarian
    searchInput.addEventListener('input', function() {
        // Setiap kali ada perubahan di input, jalankan fungsi filter
        filterVideos();
    });

    // Jalankan filter awal saat halaman dimuat (untuk inisialisasi)
    filterVideos();
});