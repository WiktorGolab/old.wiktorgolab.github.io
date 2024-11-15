// Maksymalny rozmiar kratki
const maxSize = 100;
const minSize = 80; // Początkowy rozmiar kratki

// Usunięcie splash screen po załadowaniu wszystkich zasobów
window.onload = function() {
    const splashScreen = document.getElementById("splash-screen");
    const loadingDots = document.querySelector(".loading-dots");

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

    const darkening = document.getElementById('darkening');
    if (darkening.style.opacity == "1") {
        darkening.style.opacity = "0";
    } else {
        darkening.style.opacity = "1";
    }
});

function calculateAge() {
    const birthDate = new Date(2003, 5, 9); // Miesiące są indeksowane od 0, więc czerwiec to 5
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Sprawdzenie, czy miesiąc/dzień już minął w bieżącym roku, jeśli nie - odejmij rok
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    // Wyświetlenie wieku w elemencie div
    document.getElementById("age").textContent = age;
}

calculateAge()