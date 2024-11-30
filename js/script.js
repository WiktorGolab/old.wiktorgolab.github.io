// Maksymalny rozmiar kratki
const maxSize = 100;
const minSize = 80; // Początkowy rozmiar kratki

// Usunięcie splash screen po załadowaniu wszystkich zasobów
window.onload = function() {
    const splashScreen = document.getElementById("splash-screen");
    const loadingDots = document.querySelector(".loading-dots");

    const minimumDisplayTime = 200;

    // Opuść splash screen dopiero po załadowaniu i upłynięciu minimalnego czasu
    setTimeout(() => {
        // Dodaj klasę "hidden" dla efektu zanikania
        splashScreen.style.opacity = 0;
        loadingDots.style.opacity = 0;

        splashScreen.style.pointerEvents = "none";
        loadingDots.style.pointerEvents = "none";

        // Po zakończeniu animacji ukryj splash screen i pokaż treść
        splashScreen.addEventListener("transitionend", function() {
            splashScreen.style.display = "none"; // Ukryj splash screen
            loadingDots.style.display = "none"; // Ukryj kropki ładowania
        });
    }, minimumDisplayTime);
};

function adjustGridSizeOnScroll() {
    const body2 = document.querySelector(".body2"); // Zmieniamy querySelectorAll na querySelector
    if (!body2) return; // Sprawdzamy, czy element istnieje

    // Pobieramy aktualną pozycję przewinięcia i wysokość dokumentu
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Obliczamy procent przewinięcia (od 0 do 1)
    const scrollPercent = scrollTop / docHeight;

    // Nowy rozmiar kratki na podstawie procentu przewinięcia
    const newSize = minSize + (maxSize - minSize) * scrollPercent;

    // Ustawiamy nowy rozmiar kratki w `body`
    body2.style.backgroundSize = `${newSize}px ${newSize}px`;
}

// Nasłuchiwanie na zdarzenie przewijania
window.addEventListener("scroll", adjustGridSizeOnScroll);

// Nasłuchiwanie na zdarzenie przewijania
window.addEventListener("scroll", adjustGridSizeOnScroll);

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Przełącza klasę 'active'

    document.querySelectorAll('.loading-dots').forEach(function(dot) {
        dot.style.display = "none";
    });
    const darkening = document.getElementById('darkening');
    if (darkening.style.opacity == "1") {
        darkening.style.opacity = "0";
    } else {
        darkening.style.opacity = "1";
    }
});

function checkCvDownloadPosition() {
    const cvDownload = document.querySelector(".cv-download");

    // Sprawdzamy, czy użytkownik może dalej scrollować
    const canScrollFurther = document.documentElement.scrollHeight > document.documentElement.scrollTop + window.innerHeight;

    if (!canScrollFurther) { // Jeśli użytkownik nie może scrollować dalej
        cvDownload.style.opacity = "0";
        cvDownload.style.pointerEvents = "none";
    } else {
        cvDownload.style.opacity = "1";
        cvDownload.style.pointerEvents = "all";
    }
}

// Dodajemy event listener dla scrolla
if (window.innerWidth <= 839) {
    window.addEventListener("scroll", checkCvDownloadPosition);
}