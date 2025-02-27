document.addEventListener('DOMContentLoaded', function () {
    const menuTriggers = document.querySelectorAll('[data-mega-menu]');
    let activeMenu = null;

    menuTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const menuId = `${trigger.dataset.megaMenu}Menu`;
            const menu = document.getElementById(menuId);

            if (activeMenu && activeMenu !== menu) {
                activeMenu.classList.remove('show');
            }

            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                activeMenu = null;
            } else {
                menu.classList.add('show');
                activeMenu = menu;
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mega-menu') && !e.target.closest('[data-mega-menu]')) {
            const menus = document.querySelectorAll('.mega-menu');
            menus.forEach(menu => menu.classList.remove('show'));
            activeMenu = null;
        }
    });

    // Handle amount radio buttons
    const amountInputs = document.querySelectorAll('input[name="amount"]');
    const customAmountInput = document.getElementById('customAmount');

    amountInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.checked) {
                customAmountInput.value = this.value;
            }
        });
    });

    // Clear radio selection when custom amount is entered
    customAmountInput.addEventListener('input', function() {
        amountInputs.forEach(input => {
            input.checked = false;
        });
    });

    // Initialize Bootstrap tooltips and popovers if used
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

function toggleDonationSidebar() {
    const sidebar = document.getElementById('donationSidebar');
    sidebar.classList.toggle('active');
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('donationSidebar');
    const floatingBtn = document.querySelector('.floating-btn-container');
    
    if (!sidebar.contains(event.target) && !floatingBtn.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});