document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.querySelector('.toggle-password');

    // --- LOGIKA FORM SUBMIT (LOGIN) ---
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Mencegah halaman refresh (perilaku default submit)
            event.preventDefault();

            // Ambil data input
            const email = document.getElementById('email').value;
            const password = passwordInput.value;

            // Di sinilah seharusnya Anda menambahkan logika validasi atau AJAX/Fetch
            // untuk mengirim data (email, password) ke server.

            // Contoh sederhana: Cek apakah ada input
            if (email && password) {
                console.log('Login attempt with:', { email, password });
                
                // Jika login berhasil (misalnya, server merespons OK), 
                // lakukan pengalihan (redirect) ke halaman admin.

                // Navigasi ke dashboard.html
                window.location.href = 'dashboard.html';

                // Opsional: Jika Anda ingin menambahkan notifikasi error jika gagal login
                // alert('Email atau Password salah!');
            } else {
                alert('Mohon isi Email dan Password.');
            }
        });
    }

    // --- LOGIKA TOGGLE PASSWORD ---
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', function(event) {
            // Mencegah form submit saat tombol icon di-klik
            event.preventDefault(); 
            
            // Mengubah tipe input antara 'password' dan 'text'
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Mengubah ikon (Anda mungkin perlu mengubah sumber gambar di sini)
            const iconImage = togglePasswordBtn.querySelector('img');
            if (type === 'text') {
                // Ganti dengan path ke ikon 'show/unhide' jika ada
                iconImage.src = '../aset/show.png'; // Ganti path ini
            } else {
                // Kembali ke ikon 'hide'
                iconImage.src = '../aset/hide.png'; // Pastikan path ini benar
            }
        });
    }
});