document.querySelectorAll('.nav-links a').forEach(link => {
    console.log('Link:', link.href);
    link.addEventListener('click', (e) => {
        console.log('Clicked:', e.target);
    });
});
// Badge click animation
document.querySelectorAll('.badge-item').forEach(item => {
    item.addEventListener('click', function() {
        const badgeIcon = this.querySelector('.badge-icon');
        
        if (!badgeIcon.classList.contains('locked')) {
            // Animasi scale saat badge diklik
            this.style.transform = 'scale(1.1)';
            
            // Tambahkan efek visual
            badgeIcon.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
            
            setTimeout(() => {
                this.style.transform = '';
                badgeIcon.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
            }, 200);
            
            // Tampilkan informasi badge
            showBadgeInfo(this);
        } else {
            // Shake animation untuk badge yang terkunci
            this.style.animation = 'shake 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
            
            alert('Badge ini masih terkunci! Selesaikan tantangan untuk membukanya.');
        }
    });
});

// Fungsi untuk menampilkan informasi badge
function showBadgeInfo(badgeElement) {
    const badgeName = badgeElement.querySelector('.badge-name').textContent.trim();
    console.log('Badge diklik:', badgeName);
    
    // Anda bisa menambahkan modal atau tooltip di sini
    // Untuk sementara menggunakan console.log
}

// Download certificate function
function downloadCertificate() {
    const childName = document.querySelector('.certificate-name').textContent.trim();
    
    // Konfirmasi sebelum download
    const confirmation = confirm(`Apakah Anda ingin mengunduh sertifikat untuk "${childName}"?`);
    
    if (confirmation) {
        // Simulasi proses download
        alert('Sertifikat sedang diproses...\n\nDalam implementasi nyata, ini akan menggunakan library seperti html2canvas atau jsPDF untuk mengkonversi sertifikat menjadi file PDF.');
        
        // Implementasi sebenarnya bisa menggunakan:
        // - html2canvas + jsPDF untuk convert HTML to PDF
        // - Canvas API untuk generate image
        // - Fetch API untuk download dari server
        
        console.log('Download sertifikat untuk:', childName);
    }
}

// Smooth scroll untuk navigasi (hanya untuk anchor di halaman yang sama)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Jika href dimulai dengan '#', lakukan smooth scroll
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // Jika href adalah URL eksternal atau halaman lain, biarkan browser menangani navigasi
    });
});

// Animasi saat halaman dimuat
window.addEventListener('load', function() {
    // Fade in animation untuk badges
    const badges = document.querySelectorAll('.badge-item');
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            badge.style.transition = 'all 0.5s ease';
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Fade in animation untuk certificate
    const certificate = document.querySelector('.certificate-section');
    certificate.style.opacity = '0';
    certificate.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        certificate.style.transition = 'all 0.8s ease';
        certificate.style.opacity = '1';
        certificate.style.transform = 'translateX(0)';
    }, 400);
});

// Fungsi untuk mengubah nama pada sertifikat
function updateCertificateName() {
    const nameElement = document.querySelector('.certificate-name');
    const currentName = nameElement.textContent.trim();
    
    const newName = prompt('Masukkan nama anak:', currentName);
    
    if (newName && newName.trim() !== '') {
        nameElement.textContent = newName.trim();
    }
}

// Event listener untuk double click pada nama sertifikat
document.querySelector('.certificate-name').addEventListener('dblclick', updateCertificateName);

// Hover effect untuk tombol
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Tambahkan CSS untuk shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

console.log('NexKids - Lencana & Sertifikat loaded successfully!');