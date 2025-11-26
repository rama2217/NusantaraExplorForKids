// keloladata.js

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== ELEMENT SELECTORS ==========
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const dashboardContainer = document.querySelector('.dashboard-container');
    const logoutBtn = document.getElementById('logout-btn');
    
    const modal = document.getElementById('modal');
    const deleteModal = document.getElementById('delete-modal');
    const mediaForm = document.getElementById('media-form');
    
    // Variable untuk menyimpan data yang akan dihapus
    let deleteTarget = { type: '', id: null };
    
    // ========== SIDEBAR FUNCTIONALITY ==========
    
    // Toggle Sidebar (Desktop)
    if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener('click', () => {
            dashboardContainer.classList.toggle('sidebar-collapsed');
        });
    }
    
    // Toggle Sidebar (Mobile)
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
    
    // Close mobile sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
    
    // ========== TAB FUNCTIONALITY ==========
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // ========== SEARCH FUNCTIONALITY ==========
    const searchInputs = document.querySelectorAll('[id^="search-"]');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const tableType = e.target.id.replace('search-', '');
            const tableBody = document.getElementById(`${tableType}-table-body`);
            const rows = tableBody.getElementsByTagName('tr');
            
            Array.from(rows).forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
    
    // ========== FILTER FUNCTIONALITY ==========
    const filterSelects = document.querySelectorAll('.filter-select');
    
    filterSelects.forEach(select => {
        select.addEventListener('change', function(e) {
            const filterValue = e.target.value.toLowerCase();
            // Get the active tab
            const activeTab = document.querySelector('.tab-content.active');
            const tableBody = activeTab.querySelector('tbody');
            const rows = tableBody.getElementsByTagName('tr');
            
            Array.from(rows).forEach(row => {
                if (filterValue === 'semua') {
                    row.style.display = '';
                } else {
                    const provinsi = row.cells[3].textContent.toLowerCase();
                    if (provinsi.includes(filterValue)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // ========== LOGOUT FUNCTIONALITY ==========
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Apakah Anda yakin ingin keluar?')) {
                alert('Logout berhasil!');
                // Redirect to login page or handle logout
                // window.location.href = 'login.html';
            }
        });
    }
    
    // ========== MODAL FORM FUNCTIONALITY ==========
    if (mediaForm) {
        mediaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const title = document.getElementById('media-title').value;
            const province = document.getElementById('media-province').value;
            const file = document.getElementById('media-file').files[0];
            
            // Validate
            if (!title || !province || !file) {
                alert('Harap lengkapi semua field!');
                return;
            }
            
            // Simulate save (replace with actual API call)
            alert('Data berhasil disimpan!');
            closeModal();
            
            // TODO: Add new row to table
            // addRowToTable(data);
        });
    }
    
    // ========== PAGINATION ==========
    const paginationLinks = document.querySelectorAll('.pagination a');
    
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all page numbers
            document.querySelectorAll('.page-number').forEach(page => {
                page.classList.remove('active');
            });
            
            // Add active class to clicked page
            if (this.classList.contains('page-number')) {
                this.classList.add('active');
            }
            
            // TODO: Load data for selected page
            // loadPageData(pageNumber);
        });
    });
});

// ========== MODAL FUNCTIONS (GLOBAL) ==========

function openAddModal(type) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const categoryGroup = document.getElementById('media-category-group');
    const typeGroup = document.getElementById('media-type-group');
    
    // Reset form
    document.getElementById('media-form').reset();
    
    // Set title based on type
    if (type === 'peta') {
        modalTitle.textContent = 'Tambah Peta';
        categoryGroup.style.display = 'none';
        typeGroup.style.display = 'block';
    } else if (type === 'gambar') {
        modalTitle.textContent = 'Tambah Gambar';
        categoryGroup.style.display = 'block';
        typeGroup.style.display = 'none';
    } else if (type === 'video') {
        modalTitle.textContent = 'Tambah Video';
        categoryGroup.style.display = 'block';
        typeGroup.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

function editItem(type, id) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const categoryGroup = document.getElementById('media-category-group');
    const typeGroup = document.getElementById('media-type-group');
    
    // Set title based on type
    if (type === 'peta') {
        modalTitle.textContent = 'Edit Peta';
        categoryGroup.style.display = 'none';
        typeGroup.style.display = 'block';
    } else if (type === 'gambar') {
        modalTitle.textContent = 'Edit Gambar';
        categoryGroup.style.display = 'block';
        typeGroup.style.display = 'none';
    } else if (type === 'video') {
        modalTitle.textContent = 'Edit Video';
        categoryGroup.style.display = 'block';
        typeGroup.style.display = 'none';
    }
    
    // TODO: Load data for editing
    // loadDataForEdit(type, id);
    
    // For demo, just populate with sample data
    document.getElementById('media-title').value = `Sample ${type} ${id}`;
    document.getElementById('media-province').value = 'Jawa Timur';
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.getElementById('media-form').reset();
}

function deleteItem(type, id) {
    deleteTarget = { type: type, id: id };
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.style.display = 'block';
}

function closeDeleteModal() {
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.style.display = 'none';
    deleteTarget = { type: '', id: null };
}

function confirmDelete() {
    // TODO: Send delete request to server
    // deleteFromServer(deleteTarget.type, deleteTarget.id);
    
    // For demo, just show alert
    alert(`Data ${deleteTarget.type} dengan ID ${deleteTarget.id} berhasil dihapus!`);
    
    // TODO: Remove row from table
    // removeRowFromTable(deleteTarget.type, deleteTarget.id);
    
    closeDeleteModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    const deleteModal = document.getElementById('delete-modal');
    
    if (event.target === modal) {
        closeModal();
    }
    
    if (event.target === deleteModal) {
        closeDeleteModal();
    }
}

// ========== HELPER FUNCTIONS ==========

// Function to add new row to table (example)
function addRowToTable(type, data) {
    const tableBody = document.getElementById(`${type}-table-body`);
    const newRow = tableBody.insertRow(0);
    
    // TODO: Populate row with data
    // This is just an example structure
    newRow.innerHTML = `
        <td>${tableBody.rows.length}</td>
        <td><img src="${data.thumbnail}" class="thumbnail" alt="Thumbnail"></td>
        <td>${data.title}</td>
        <td>${data.province}</td>
        <td>${data.category || data.duration || data.type}</td>
        <td>${new Date().toLocaleDateString('id-ID')}</td>
        <td>
            <div class="action-buttons">
                <button class="btn-icon btn-edit" onclick="editItem('${type}', ${data.id})" title="Edit">
                    <img src="../aset/edit.png" alt="Edit">
                </button>
                <button class="btn-icon btn-delete" onclick="deleteItem('${type}', ${data.id})" title="Hapus">
                    <img src="../aset/delete.png" alt="Delete">
                </button>
            </div>
        </td>
    `;
}

// Function to remove row from table
function removeRowFromTable(type, id) {
    const tableBody = document.getElementById(`${type}-table-body`);
    const rows = tableBody.getElementsByTagName('tr');
    
    // Find and remove the row
    // This is a simplified example
    for (let i = 0; i < rows.length; i++) {
        // You would need to identify the row by id in a real application
        // For now, this is just a placeholder
    }
}