
// Toggle Password Visibility
const togglePasswordBtn = document.querySelector('.toggle-password-btn');
const passwordInput = document.getElementById('password');
const passwordIcon = document.querySelector('.password-toggle-icon');

if (togglePasswordBtn && passwordInput && passwordIcon) {
    togglePasswordBtn.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.src = 'aset/hide.png'; 
        } else {
            passwordInput.type = 'password';
            passwordIcon.src = 'aset/show.png'; 
        }
    });
}

// Edit Field Buttons (Nama & Password)
const editFieldButtons = document.querySelectorAll('.edit-field-btn');
editFieldButtons.forEach(button => {
    button.addEventListener('click', function() {
        const field = this.getAttribute('data-field');
        const input = document.getElementById(field);
        
        if (this.textContent === 'Edit') {
            // Enable editing
            input.removeAttribute('readonly');
            input.focus();
            input.style.background = 'white';
            input.style.borderColor = '#4a90e2';
            this.textContent = 'Simpan';
            this.classList.add('save');
        } else {
            // Save changes
            input.setAttribute('readonly', true);
            input.style.background = '#f8f9fa';
            input.style.borderColor = '#e9ecef';
            this.textContent = 'Edit';
            this.classList.remove('save');
            
            // Show success message
            showNotification('Perubahan berhasil disimpan! ✅');
        }
    });
});

// Save Changes Button
const saveChangesBtn = document.querySelector('.save-changes-btn');
if (saveChangesBtn) {
    saveChangesBtn.addEventListener('click', function() {
        let hasChanges = false;
        
        // Reset all edit buttons
        editFieldButtons.forEach(button => {
            if (button.textContent === 'Simpan') {
                const field = button.getAttribute('data-field');
                const input = document.getElementById(field);
                input.setAttribute('readonly', true);
                input.style.background = '#f8f9fa';
                input.style.borderColor = '#e9ecef';
                button.textContent = 'Edit';
                button.classList.remove('save');
                hasChanges = true;
            }
        });
        
        if (hasChanges) {
            showNotification('Semua perubahan telah disimpan! 🎉');
        } else {
            showNotification('Tidak ada perubahan untuk disimpan');
        }
    });
}

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
        background: linear-gradient(135deg, #26de81 0%, #20bf6b 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(38, 222, 129, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
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
document.head.appendChild(style);

// Handle Enter key for input fields
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !this.hasAttribute('readonly')) {
            const field = this.id;
            const button = document.querySelector(`[data-field="${field}"]`);
            if (button && button.textContent === 'Simpan') {
                button.click();
            }
        }
    });
});
// Function for Logout
function handleLogout() {
    if (confirm('Apakah kamu yakin ingin keluar dari akun NEXKIDS?')) {
        alert('Terima kasih sudah berpetualang! Sampai jumpa lagi! 👋');
        // Redirect ke halaman login atau beranda
        // window.location.href = 'login.html';
        window.location.href = 'masuk.html'; // atau halaman beranda
    }
}
// Edit Photo Button - Show Modal
const editPhotoBtn = document.querySelector('.edit-photo-btn');
const photoModal = document.getElementById('photoModal');
const closeModal = document.querySelector('.close-modal');
const fileInput = document.getElementById('fileInput');
const modalPreviewImage = document.getElementById('modalPreviewImage');
const modalEditBtn = document.getElementById('modalEditBtn');

if (editPhotoBtn) {
    editPhotoBtn.addEventListener('click', function() {
        photoModal.style.display = 'flex';
    });
}

// Close Modal
if (closeModal) {
    closeModal.addEventListener('click', function() {
        closePhotoModal();
    });
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === photoModal) {
        closePhotoModal();
    }
});

function closePhotoModal() {
    photoModal.style.display = 'none';
}

// Modal Edit Button Click
if (modalEditBtn) {
    modalEditBtn.addEventListener('click', function() {
        fileInput.click();
    });
}

// File Input Change
if (fileInput) {
    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            handleFileSelect(e.target.files[0]);
        }
    });
}

// Handle File Selection
function handleFileSelect(file) {
    // Validate file type
    if (!file.type.match('image.*')) {
        showNotification('Format file tidak valid! Gunakan JPG, PNG, atau GIF ❌');
        return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
        showNotification('Ukuran file terlalu besar! Maksimal 5MB ❌');
        return;
    }

    // Show preview and update all profile pictures
    const reader = new FileReader();
    reader.onload = function(e) {
        // Update modal preview
        modalPreviewImage.src = e.target.result;
        
        // Update all profile pictures
        const profilePictures = document.querySelectorAll('.profile-picture img, .profile-photo img');
        profilePictures.forEach(img => {
            img.src = e.target.result;
        });
        
        showNotification('Foto profil berhasil diperbarui! 📸✨');
        
        // Close modal after short delay
        setTimeout(() => {
            closePhotoModal();
        }, 1000);
    };
    reader.readAsDataURL(file);
}