// Counter Animation for Statistics
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animations when page loads
window.addEventListener('load', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    setTimeout(() => {
        statNumbers.forEach((element) => {
            const target = parseInt(element.getAttribute('data-target'));
            animateCounter(element, target);
        });
    }, 500);
});

// Add entrance animation to stat cards
window.addEventListener('load', () => {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// Filter Activities
const filterButtons = document.querySelectorAll('.filter-btn');
const activityCards = document.querySelectorAll('.activity-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Filter activities
        activityCards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            
            if (filter === 'all') {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease';
            } else if (cardType === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Add CSS animation for fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .activity-card.hidden {
        display: none;
    }
`;
document.head.appendChild(style);

// Load More Button
const loadMoreBtn = document.querySelector('.load-more-btn');
let isLoading = false;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        if (isLoading) return;
        
        isLoading = true;
        const button = this;
        button.textContent = 'Memuat...';
        button.style.opacity = '0.6';
        
        // Simulate loading
        setTimeout(() => {
            // Create mock activities
            const activitiesGrid = document.querySelector('.activities-grid');
            const mockActivities = [
                {
                    type: 'video',
                    title: 'Tari Piring dari Minangkabau',
                    description: 'Menonton video tarian tradisional Sumatera Barat',
                    date: '4 Hari yang lalu',
                    points: 50
                },
                {
                    type: 'quiz',
                    title: 'Kuis Alat Musik Tradisional',
                    description: 'Menyelesaikan kuis dengan skor 85%',
                    date: '5 Hari yang lalu',
                    points: 100
                },
                {
                    type: 'game',
                    title: 'Game Susun Peta Indonesia',
                    description: 'Menyelesaikan puzzle peta dengan cepat',
                    date: '6 Hari yang lalu',
                    points: 80
                }
            ];
            
            mockActivities.forEach((activity, index) => {
                const activityCard = document.createElement('div');
                activityCard.className = 'activity-card';
                activityCard.setAttribute('data-type', activity.type);
                activityCard.style.opacity = '0';
                
                const badgeClass = activity.type === 'video' ? 'video-badge' : 
                                   activity.type === 'game' ? 'game-badge' : 'quiz-badge';
                const thumbClass = activity.type === 'video' ? 'video-thumb' : 
                                  activity.type === 'game' ? 'game-thumb' : 'quiz-thumb';
                const icon = activity.type === 'video' ? '▶️' : 
                            activity.type === 'game' ? '🎯' : '❓';
                const typeLabel = activity.type === 'video' ? 'Video' :
                                 activity.type === 'game' ? 'Game' : 'Kuis';
                
                activityCard.innerHTML = `
                    <div class="activity-thumbnail ${thumbClass}">
                        <div class="placeholder-icon">${icon}</div>
                        <div class="activity-type-badge ${badgeClass}">${typeLabel}</div>
                    </div>
                    <div class="activity-info">
                        <h4>${activity.title}</h4>
                        <p>${activity.description}</p>
                        <div class="activity-meta">
                            <span class="activity-date">📅 ${activity.date}</span>
                            <span class="activity-points">+${activity.points} Poin</span>
                        </div>
                    </div>
                `;
                
                activitiesGrid.appendChild(activityCard);
                
                // Animate entrance
                setTimeout(() => {
                    activityCard.style.transition = 'all 0.5s ease';
                    activityCard.style.opacity = '1';
                }, index * 100);
            });
            
            // Show notification
            showNotification('3 aktivitas baru dimuat! 📚');
            
            // Reset button
            button.textContent = 'Muat Lebih Banyak';
            button.style.opacity = '1';
            isLoading = false;
        }, 1500);
    });
}

// Activity Card Click Handler
document.addEventListener('click', function(e) {
    const activityCard = e.target.closest('.activity-card');
    if (activityCard) {
        const title = activityCard.querySelector('h4').textContent;
        
        // Add click animation
        activityCard.style.transform = 'scale(0.98)';
        setTimeout(() => {
            activityCard.style.transform = '';
        }, 200);
        
        showNotification(`Membuka: ${title}`);
    }
});

// Function to show notification
function showNotification(message) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Add pulse effect to stat cards with high numbers
window.addEventListener('load', () => {
    setTimeout(() => {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            const number = parseInt(card.querySelector('.stat-number').textContent);
            
            // Add pulse effect to cards with high numbers
            if (number > 20) {
                card.style.animation = 'pulse 2s ease infinite';
            }
        });
    }, 3000);
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        50% {
            box-shadow: 0 6px 25px rgba(74, 144, 226, 0.3);
        }
    }
`;
document.head.appendChild(pulseStyle);
