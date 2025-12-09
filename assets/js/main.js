// Menunggu dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Ketika tombol garis tiga (hamburger) diklik
    menuToggle.addEventListener('click', () => {
        // Tambahkan class 'active' ke menu untuk memunculkannya
        navMenu.classList.toggle('active');
        
        // Opsional: Animasi tombol hamburger jadi X
        menuToggle.classList.toggle('is-active');
    });

    // Menutup menu jika salah satu link diklik (agar tidak menutupi layar)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });

    // Efek Scroll pada Navbar (Transparan ke Solid saat scroll)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(15, 23, 42, 1)"; // Solid Dark
            navbar.style.padding = "15px 0"; // Lebih rapat saat scroll
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
        } else {
            navbar.style.background = "rgba(15, 23, 42, 0.95)"; // Agak transparan
            navbar.style.padding = "25px 0"; // Kembali normal
            navbar.style.boxShadow = "none";
        }
    });
});