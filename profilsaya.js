// Edit Photo Button
const editPhotoBtn = document.querySelector('.edit-photo-btn');
if (editPhotoBtn) {
    editPhotoBtn.addEventListener('click', function() {
        alert('Fitur upload foto profil akan segera hadir! 📸');
    });
}

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