// Progress Bar Animation
window.addEventListener('load', () => {
    const progressBar = document.querySelector('.progress-bar');
    const progress = progressBar.getAttribute('data-progress');
    
    setTimeout(() => {
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';
    }, 300);
    
    // Animate mini progress bars
    const miniProgressBars = document.querySelectorAll('.mini-progress-bar');
    miniProgressBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, 500 + (index * 100));
    });
});

// Badge Data
const badgesData = {
    1: {
        title: 'Seniman Budaya',
        description: 'Menyelesaikan tur museum seni',
        details: 'Kamu telah mengunjungi Museum Nasional dan mempelajari berbagai karya seni tradisional Indonesia. Lencana ini diberikan sebagai penghargaan atas dedikasi kamu dalam melestarikan budaya.',
        date: '15 Januari 2025',
        color: 'red',
        category: 'budaya'
    },
    2: {
        title: 'Penjelajah Sejarah',
        description: 'Mengunjungi 5 situs bersejarah',
        details: 'Kamu telah menjelajahi 5 situs bersejarah penting di Indonesia, termasuk Candi Borobudur, Candi Prambanan, dan situs-situs lainnya. Pengetahuan sejarah kamu sangat luar biasa!',
        date: '20 Januari 2025',
        color: 'orange',
        category: 'sejarah'
    },
    3: {
        title: 'Arkeolog Cilik',
        description: 'Menemukan artefak tersembunyi',
        details: 'Dengan ketelitian yang tinggi, kamu berhasil menemukan 10 artefak tersembunyi dalam permainan petualangan. Kamu memiliki mata yang tajam!',
        date: '25 Januari 2025',
        color: 'green',
        category: 'sejarah'
    },
    4: {
        title: 'Penjaga Laut',
        description: 'Belajar ekosistem laut',
        details: 'Kamu telah mempelajari ekosistem laut Indonesia dan menyelesaikan kuis tentang kehidupan bawah laut dengan sempurna. Laut Indonesia bangga padamu!',
        date: '1 Februari 2025',
        color: 'blue',
        category: 'alam'
    },
    5: {
        title: 'Pelaut Handal',
        description: 'Menyelesaikan petualangan laut',
        details: 'Petualangan laut telah selesai! Kamu telah menjelajahi berbagai pulau dan mempelajari kehidupan maritim Indonesia. Selamat berlayar, pelaut cilik!',
        date: '5 Februari 2025',
        color: 'cyan',
        category: 'alam'
    },
    6: {
        title: 'Kameramen Junior',
        description: 'Buat 10 video dokumentasi',
        details: 'Untuk mendapatkan lencana ini, kamu harus membuat 10 video dokumentasi tentang budaya Indonesia. Saat ini kamu sudah membuat 3 video. Semangat!',
        locked: true,
        progress: '3/10',
        color: 'yellow',
        category: 'teknologi'
    },
    7: {
        title: 'Ahli Kuliner',
        description: 'Pelajari 15 resep tradisional',
        details: 'Pelajari dan praktekkan 15 resep masakan tradisional Indonesia untuk mendapatkan lencana ini. Saat ini kamu sudah menyelesaikan 5 resep.',
        locked: true,
        progress: '5/15',
        color: 'gold',
        category: 'budaya'
    },
    8: {
        title: 'Master Budaya',
        description: 'Selesaikan semua petualangan',
        details: 'Lencana tertinggi! Untuk mendapatkan lencana ini, kamu harus menyelesaikan SEMUA petualangan dan mendapatkan SEMUA lencana lainnya. Ayo terus berpetualang!',
        locked: true,
        progress: '5/7 lencana',
        color: 'purple',
        category: 'master'
    }
};

// Badge Click Handler
const badgeItems = document.querySelectorAll('.badge-item');
const modal = document.getElementById('badgeModal');
const closeModal = document.querySelector('.close-modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');

badgeItems.forEach(item => {
    item.addEventListener('click', function() {
        const badgeId = this.getAttribute('data-badge');
        const badge = badgesData[badgeId];
        
        if (badge) {
            showBadgeModal(badge);
            
            // Trigger confetti for unlocked badges
            if (!badge.locked) {
                triggerConfetti();
            }
        }
    });
});

// Show Badge Modal
function showBadgeModal(badge) {
    const modalBadgeCircle = document.querySelector('.modal-badge-circle');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    
    // Set badge circle color and icon
    modalBadgeCircle.className = `modal-badge-circle badge-circle ${badge.color}`;
    
    // Set content
    modalTitle.textContent = badge.title;
    modalDescription.textContent = badge.description;
    
    // Set details
    if (badge.locked) {
        modalDetails.innerHTML = `
            <p style="color: #666; margin-bottom: 10px;"><strong>Status:</strong> 🔒 Belum Terbuka</p>
            <p style="color: #666; margin-bottom: 10px;"><strong>Progress:</strong> ${badge.progress}</p>
            <p style="color: #666; margin-bottom: 10px;"><strong>Kategori:</strong> ${badge.category.charAt(0).toUpperCase() + badge.category.slice(1)}</p>
            <p style="color: #666;">${badge.details}</p>
        `;
    } else {
        modalDetails.innerHTML = `
            <p style="color: #666; margin-bottom: 10px;"><strong>Status:</strong> ✅ Terbuka</p>
            <p style="color: #666; margin-bottom: 10px;"><strong>Tanggal Didapat:</strong> ${badge.date}</p>
            <p style="color: #666; margin-bottom: 10px;"><strong>Kategori:</strong> ${badge.category.charAt(0).toUpperCase() + badge.category.slice(1)}</p>
            <p style="color: #666;">${badge.details}</p>
        `;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Filter Badges
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const badges = document.querySelectorAll('.badge-item');
        
        badges.forEach(badge => {
            if (filter === 'all') {
                badge.classList.remove('hidden');
            } else if (filter === 'unlocked') {
                if (badge.classList.contains('unlocked')) {
                    badge.classList.remove('hidden');
                } else {
                    badge.classList.add('hidden');
                }
            } else if (filter === 'locked') {
                if (badge.classList.contains('locked')) {
                    badge.classList.remove('hidden');
                } else {
                    badge.classList.add('hidden');
                }
            }
        });
    });
});

// Sort Badges
const sortSelect = document.getElementById('sortBadges');
sortSelect.addEventListener('change', function() {
    const sortType = this.value;
    const badgesGrid = document.querySelector('.badges-grid');
    const badges = Array.from(document.querySelectorAll('.badge-item'));
    
    badges.sort((a, b) => {
        if (sortType === 'newest') {
            const dateA = a.getAttribute('data-date') || '0000-00-00';
            const dateB = b.getAttribute('data-date') || '0000-00-00';
            return dateB.localeCompare(dateA);
        } else if (sortType === 'oldest') {
            const dateA = a.getAttribute('data-date') || '9999-99-99';
            const dateB = b.getAttribute('data-date') || '9999-99-99';
            return dateA.localeCompare(dateB);
        } else if (sortType === 'category') {
            const catA = a.getAttribute('data-category');
            const catB = b.getAttribute('data-category');
            return catA.localeCompare(catB);
        } else if (sortType === 'name') {
            const nameA = a.querySelector('h3').textContent;
            const nameB = b.querySelector('h3').textContent;
            return nameA.localeCompare(nameB);
        }
    });
    
    // Re-append sorted badges
    badges.forEach(badge => badgesGrid.appendChild(badge));
});

// Confetti Animation
function triggerConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#ff6b6b', '#ffa502', '#26de81', '#4a90e2', '#a29bfe', '#fd79a8'];
    
    // Create confetti particles
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 3,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        });
    }
    
    // Animate confetti
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((particle, index) => {
            ctx.save();
            ctx.translate(particle.x, particle.y);
            ctx.rotate((particle.rotation * Math.PI) / 180);
            ctx.fillStyle = particle.color;
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            ctx.restore();
            
            // Update position
            particle.y += particle.speedY;
            particle.x += particle.speedX;
            particle.rotation += particle.rotationSpeed;
            
            // Remove particles that are out of screen
            if (particle.y > canvas.height) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

// Function for Logout
function handleLogout() {
    if (confirm('Apakah kamu yakin ingin keluar dari akun NEXKIDS?')) {
        alert('Terima kasih sudah berpetualang! Sampai jumpa lagi! 👋');
        window.location.href = 'masuk.html';
    }
}

// Count unlocked badges
const unlockedBadges = document.querySelectorAll('.badge-item.unlocked').length;
const totalBadges = document.querySelectorAll('.badge-item').length;
document.querySelector('.badge-count').textContent = unlockedBadges;
document.querySelector('.total-badges').textContent = totalBadges;

// Update progress bar
const progressPercentage = (unlockedBadges / totalBadges) * 100;
document.querySelector('.progress-bar').setAttribute('data-progress', progressPercentage.toFixed(1));

// Add pulse animation to unlocked badges on load
setTimeout(() => {
    const unlockedBadgeItems = document.querySelectorAll('.badge-item.unlocked');
    unlockedBadgeItems.forEach((badge, index) => {
        setTimeout(() => {
            badge.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                badge.style.animation = '';
            }, 500);
        }, index * 100);
    });
}, 1000);

// Add CSS animation for pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);