document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // --- 1. Sidebar Toggle Logic ---
    if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener('click', () => {
            dashboardContainer.classList.toggle('sidebar-collapsed');
            toggleSidebarBtn.title = dashboardContainer.classList.contains('sidebar-collapsed') 
                                     ? 'Buka Menu' : 'Perkecil Menu';
        });
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            dashboardContainer.classList.toggle('sidebar-open');
        });
    }

    // --- 2. Logout Button Action (Placeholder) ---
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Tampilkan konfirmasi atau panggil fungsi logout API
            if (confirm('Anda yakin ingin keluar?')) {
                console.log('User logged out.');
                // window.location.href = 'login.html'; // Contoh redirect
            }
        });
    }

    // --- 3. Settings Form Handling ---

    const accountSettingsForm = document.getElementById('accountSettingsForm');
    const generalSettingsForm = document.getElementById('generalSettingsForm');
    const notificationSettingsForm = document.getElementById('notificationSettingsForm');

    // Fungsi helper untuk menampilkan notifikasi sukses
    const showSuccess = (message) => {
        alert('Berhasil: ' + message);
        console.log(message);
    };

    if (accountSettingsForm) {
        accountSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('adminName').value;
            const email = document.getElementById('adminEmail').value;
            const password = document.getElementById('adminPassword').value;

            console.log('Saving Account Settings:', { name, email, password: password ? 'changed' : 'not changed' });
            // TODO: Lakukan POST request ke API untuk menyimpan pengaturan akun
            showSuccess('Pengaturan Akun telah disimpan!');
            // Kosongkan kolom password setelah berhasil disimpan
            document.getElementById('adminPassword').value = '';
        });
    }

    if (generalSettingsForm) {
        generalSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const language = document.getElementById('defaultLanguage').value;
            const visibility = document.getElementById('defaultVisibility').value;

            console.log('Saving General Settings:', { language, visibility });
            // TODO: Lakukan POST request ke API untuk menyimpan pengaturan umum
            showSuccess('Pengaturan Umum telah disimpan!');
        });
    }

    if (notificationSettingsForm) {
        notificationSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailNotif = document.getElementById('emailNotif').checked;
            const dataSharing = document.getElementById('dataSharing').checked;

            console.log('Saving Notification Settings:', { emailNotif, dataSharing });
            // TODO: Lakukan POST request ke API untuk menyimpan pengaturan notifikasi
            showSuccess('Pengaturan Notifikasi telah disimpan!');
        });
    }

});