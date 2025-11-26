// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.button-password img');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.src = 'aset/hide.png'; // Assuming hide.png represents shown state; replace with show.png if available
        toggleButton.alt = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        toggleButton.src = 'aset/show.png'; // Keep as hide.png for hidden state
        toggleButton.alt = 'Show Password';
    }
}

// Form submission handler
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (!email) {
        alert('Email harus diisi!');
        return;
    }
    if (!password) {
        alert('Password harus diisi!');
        return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid!');
        return;
    }

    // If all validations pass, simulate successful login
    alert('Login berhasil! Selamat datang kembali.');
    window.location.href = 'landingpagesdlg.html';
});

// Social login placeholders
document.querySelectorAll('.social').forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.classList.contains('google') ? 'Google' :
                         this.classList.contains('apple') ? 'Apple' : 'Facebook';
        alert('Login dengan ' + provider + ' belum diimplementasi.');
    });
});

// Redirect to registration page
document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'daftar.html';
});
