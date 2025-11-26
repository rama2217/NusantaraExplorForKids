// Wait until all HTML elements are loaded
        document.addEventListener('DOMContentLoaded', function() {

            // === Element Selectors ===
            const toggleSidebarBtn = document.getElementById('toggle-sidebar');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const sidebar = document.getElementById('sidebar');
            const dashboardContainer = document.querySelector('.dashboard-container');
            const searchInput = document.getElementById('search-input');
            const userTableBody = document.getElementById('user-table-body');
            const statusBadges = document.querySelectorAll('.status-badge');
            const paginationLinks = document.querySelectorAll('.pagination .page-number');
            const logoutBtn = document.getElementById('logout-btn'); // Selector untuk tombol Keluar

            // === 1. SIDEBAR COLLAPSE (DESKTOP) ===
            if (toggleSidebarBtn) {
                toggleSidebarBtn.addEventListener('click', () => {
                    dashboardContainer.classList.toggle('sidebar-collapsed');
                });
            }

            // === 2. SIDEBAR TOGGLE (MOBILE) ===
            if (mobileMenuBtn && sidebar) {
                mobileMenuBtn.addEventListener('click', () => {
                    sidebar.classList.toggle('active');
                });
            }

            // Close mobile sidebar when clicking outside of it
            document.addEventListener('click', (e) => {
                // Check if screen is mobile and sidebar is active
                if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
                    // Check if the click was outside the sidebar and not on the menu button
                    if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                        sidebar.classList.remove('active');
                    }
                }
            });

            // === 3. SEARCH (TABLE FILTER) FUNCTION ===
            if (searchInput && userTableBody) {
                const allTableRows = userTableBody.querySelectorAll('tr'); // Get all rows

                searchInput.addEventListener('input', (e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    
                    allTableRows.forEach(row => {
                        // Get text from the first cell (Nama Pengguna)
                        const userNameElement = row.querySelector('td:first-child .user-info span');
                        if (userNameElement) {
                             const userName = userNameElement.textContent.toLowerCase();
                             // If username includes the search term
                             if (userName.includes(searchTerm)) {
                                row.style.display = ''; // Show row
                            } else {
                                row.style.display = 'none'; // Hide row
                            }
                        }
                    });
                });
            }

            // === 4. STATUS TOGGLE (SIMULATION) ===
            if (statusBadges) {
                // Use event delegation on the table body for dynamically added rows
                if (userTableBody) {
                    userTableBody.addEventListener('click', (e) => {
                         if (e.target.classList.contains('status-badge')) {
                            const badge = e.target;
                            // Check if status is 'active'
                            if (badge.classList.contains('active')) {
                                badge.classList.remove('active');
                                badge.classList.add('inactive');
                                badge.textContent = 'Tidak Aktif';
                            } else {
                                badge.classList.remove('inactive');
                                badge.classList.add('active');
                                badge.textContent = 'Aktif';
                            }
                         }
                    });
                }
            }

            // === 5. PAGINATION (SIMULATION) ===
            if (paginationLinks.length > 0) {
                const paginationContainer = document.querySelector('.pagination');
                
                paginationContainer.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent page reload
                    
                    const clickedLink = e.target.closest('.page-number');
                    
                    if (clickedLink) {
                        // Remove 'active' class from all links
                        paginationLinks.forEach(l => l.classList.remove('active'));

                        // Add 'active' class to the clicked link
                        clickedLink.classList.add('active');
                        
                        // You would add logic here to fetch new page data
                        console.log('Pindah ke halaman: ' + clickedLink.textContent);
                    }
                });
            }

            // === 6. LOGOUT BUTTON HANDLER (SIMULATION) ===
            if (logoutBtn) {
                logoutBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Di sini Anda akan menambahkan logika logout yang sebenarnya,
                    // seperti menghapus token atau mengarahkan ke halaman login.
                    
                    // Untuk simulasi, kita tampilkan pesan di konsol
                    console.log('Admin telah keluar. (Simulasi Logout)');
                    
                    // Atau bisa menampilkan modal/pesan kustom (bukan alert())
                    const messageBox = document.createElement('div');
                    messageBox.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: #D9534F; color: white; border-radius: 8px; z-index: 9999; box-shadow: 0 4px 10px rgba(0,0,0,0.2); font-weight: 600;';
                    messageBox.textContent = 'Anda telah berhasil Keluar!';
                    document.body.appendChild(messageBox);

                    // Hapus pesan setelah 3 detik
                    setTimeout(() => {
                        document.body.removeChild(messageBox);
                        // window.location.href = '/login'; // Redirect setelah logout
                    }, 3000); 
                });
            }

        });