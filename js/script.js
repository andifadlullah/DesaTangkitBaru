        window.addEventListener("load", () => {
        const loadingScreen = document.getElementById("loading-screen");

        setTimeout(() => {
        loadingScreen.classList.add("hide");
        setTimeout(() => {
        loadingScreen.style.display = "none";
        }, 2500);
        }, 2900);
        });
        function updateWaktu() {
        const sekarang = new Date();

        // Ambil jam, menit, detik
        let jam = String(sekarang.getHours()).padStart(2, '0');
        let menit = String(sekarang.getMinutes()).padStart(2, '0');
        let detik = String(sekarang.getSeconds()).padStart(2, '0');

        // Tampilkan jam digital
        document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;

        // Format tanggal lengkap
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById("tanggal").textContent = sekarang.toLocaleDateString("id-ID", options);
        }
        setInterval(updateWaktu, 1000);
        updateWaktu();

        // Burger Menu
        document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById("menu-toggle");
        const menuList = document.getElementById("menu-list");

        menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        menuList.classList.toggle("show");
        });

        if (window.innerWidth <= 768) {
        document.querySelectorAll(".dropdown > a").forEach(link => {
        link.addEventListener("click", e => {
                e.preventDefault();
                link.parentElement.classList.toggle("open");
        });
        });
        }
        });

        // Animasi saat pertama kali halaman dibuka
        window.addEventListener("load", () => {
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 1.1s ease-in-out";
        setTimeout(() => {
        document.body.style.opacity = "1";
        }, 30);});
        const revealElements = document.querySelectorAll("article, aside, footer, header, .card, h1, h2, p, img, table");

        function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 50; 
        revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
                el.style.opacity = "1";
                el.style.transform = "translateX(0)";
                el.style.transition = "all 1s ease-in-out";
        } else {
                el.style.opacity = "0";
                el.style.transform = "translateX(0px)";
                el.style.transition = "all 1s ease-in-out";
        }});}
        window.addEventListener("scroll", revealOnScroll);
        window.addEventListener("load", revealOnScroll);

        