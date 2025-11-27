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
        title: 'Penjelajah Peta',
        description: 'Menyelesaikan tur peta nusantara',
        details: 'Kamu telah menjelajahi peta nusantara dan mempelajari berbagai wilayah di Indonesia. Lencana ini diberikan sebagai penghargaan atas dedikasi kamu dalam mengenal Indonesia.',
        date: '15 Januari 2025',
        category: 'geografi'
    },
    2: {
        title: 'Alat Musik Tradisional',
        description: 'Mempelajari alat musik tradisional',
        details: 'Kamu telah mempelajari berbagai alat musik tradisional Indonesia seperti angklung, gamelan, dan sasando. Pengetahuan musik tradisional kamu sangat luar biasa!',
        date: '20 Januari 2025',
        category: 'budaya'
    },
    3: {
        title: 'Baju Adat',
        description: 'Melihat 5 video baju adat',
        details: 'Dengan antusias, kamu telah menonton 5 video tentang baju adat dari berbagai daerah di Indonesia. Kamu memiliki pengetahuan yang bagus tentang budaya Indonesia!',
        date: '25 Januari 2025',
        category: 'budaya'
    },
    4: {
        title: 'Rumah Adat',
        description: 'Belajar rumah adat',
        details: 'Kamu telah mempelajari berbagai jenis rumah adat Indonesia dari Sabang sampai Merauke. Pengetahuan arsitektur tradisional kamu sangat mengesankan!',
        date: '1 Februari 2025',
        category: 'budaya'
    },
    5: {
        title: 'Tarian Tradisional',
        description: 'Mempelajari tarian tradisional',
        details: 'Kamu telah mempelajari berbagai tarian tradisional Indonesia seperti tari Saman, tari Kecak, dan tari Pendet. Semangat belajar kamu luar biasa!',
        date: '5 Februari 2025',
        category: 'budaya'
    },
    6: {
        title: 'Video Junior',
        description: 'Melihat 10 video',
        details: 'Untuk mendapatkan lencana ini, kamu harus menonton 10 video tentang budaya Indonesia. Saat ini kamu sudah menonton 3 video. Semangat!',
        locked: true,
        progress: '3/10',
        category: 'teknologi'
    },
    7: {
        title: 'Penjelajah Setia',
        description: 'Selesaikan semua petualangan',
        details: 'Lencana tertinggi! Untuk mendapatkan lencana ini, kamu harus menyelesaikan SEMUA petualangan dan mendapatkan SEMUA lencana lainnya. Ayo terus berpetualang!',
        locked: true,
        progress: '5/6 lencana',
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
            showBadgeModal(badge, badgeId);
            
            // Trigger confetti for unlocked badges
            if (!badge.locked) {
                triggerConfetti();
            }
        }
    });
});

// Show Badge Modal
function showBadgeModal(badge, badgeId) {
    const modalBadgeCircle = document.querySelector('.modal-badge-circle');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    
    // Get the image source from the clicked badge
    const clickedBadge = document.querySelector(`[data-badge="${badgeId}"]`);
    const imgSrc = clickedBadge.querySelector('.badge-circle img').src;
    
    // Set badge image in modal
    modalBadgeCircle.innerHTML = `<img src="${imgSrc}" alt="${badge.title}">`;
    
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
    if (!canvas) return;
    
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

// Count unlocked badges
const unlockedBadges = document.querySelectorAll('.badge-item.unlocked').length;
const totalBadges = document.querySelectorAll('.badge-item').length;
document.querySelector('.badge-count').textContent = unlockedBadges;
document.querySelector('.total-badges').textContent = totalBadges;

// Update progress bar
const progressPercentage = (unlockedBadges / totalBadges) * 100;
const progressBar = document.querySelector('.progress-bar');
if (progressBar) {
    progressBar.setAttribute('data-progress', progressPercentage.toFixed(1));
}

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