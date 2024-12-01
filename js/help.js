let currentStep = 0; // Zmienna przechowująca aktualny krok

// Na początku pokazujemy tylko pierwsze okno i wyłączamy scrollowanie
document.addEventListener("DOMContentLoaded", function () {
    // Sprawdź, czy w LocalStorage istnieje "introduction"
    if (!localStorage.getItem("introduction")) {
        localStorage.setItem("introduction", "false");
    }

    // Sprawdź, czy wartość "introduction" jest ustawiona na "false"
    if (localStorage.getItem("introduction") === "false") {
        // Uruchom funkcję help()
        help();

        // Ustaw "introduction" na "true" w LocalStorage
        localStorage.setItem("introduction", "true");
    }
});

function help() {
    currentStep = 0;

    const welcomeContainer = document.querySelector('.welcome-container');
    const downloadcv = document.querySelector('.cv-download');
    const splash = document.getElementById('splash-screen');
    const loadingDots = document.querySelector('.loading-dots');

    // Przywróć widoczność welcomeContainer
    welcomeContainer.style.display = 'flex';
    setTimeout(() => {
        welcomeContainer.style.opacity = 1;
    }, 1);
    downloadcv.style.opacity = 0;
    downloadcv.style.pointerEvents = "none";
    setTimeout(() => {
        downloadcv.style.display = "none";
    }, 100);
    document.body.style.backgroundColor = "#7f7f7f";
    document.body.style.overflow = "hidden";
    splash.style.zIndex = 3000;
    loadingDots.style.zIndex = 3001;

    // Usuń klasę `active` ze wszystkich okien
    const windows = document.querySelectorAll('.welcome-window');
    windows.forEach((window) => {
        window.classList.remove('active', 'hidden-left', 'hidden-right');
    });

    checkDeco(0);

    // Przypisz klasę `active` tylko do pierwszego okna
    document.getElementById('help1').classList.add('active');

    document.body.style.overflow = 'hidden'; // Wyłączenie scrollowania
}

// Funkcja nawigacji między oknami
function navigate(direction, currentStep) {
    const currentWindow = document.getElementById(getWindowId(currentStep));

    // Animacja "Cofnij" - przesunięcie w prawo (okno znika)
    if (direction === -1) {
        currentWindow.classList.add('hidden-right');
    }
    // Animacja "Dalej" - przesunięcie w lewo (okno znika)
    else {
        currentWindow.classList.add('hidden-left');
    }

    // Obliczenie nowego kroku
    const nextStep = currentStep + direction;

    // Zabezpieczenie przed wyjściem poza zakres
    if (nextStep < 0 || nextStep >= 6) {
        return currentStep; // Zwróć bieżący krok, jeśli nowy krok jest poza zakresem
    }

    const nextWindow = document.getElementById(getWindowId(nextStep));

    checkDeco(nextStep);

    // Opóźnienie przed przełączeniem okna, aby animacja mogła się zakończyć
    setTimeout(() => {
        // Ukrycie bieżącego okna
        currentWindow.classList.remove('active');
        currentWindow.classList.remove('hidden-left');
        currentWindow.classList.remove('hidden-right');

        // Pokazanie nowego okna z animacją
        if (nextWindow) {
            nextWindow.classList.add('active');
        }
    }, 200); // Czas na zakończenie animacji

    return nextStep; // Zwracamy nowy krok
}

// Funkcja uzyskania id okna na podstawie numeru kroku
function getWindowId(step) {
    const windows = ['help1', 'help2', 'help3', 'help4'];
    return windows[step];
}

// Funkcja zamykająca powitanie
function closeWindow() {
    const welcomeContainer = document.querySelector('.welcome-container');
    const downloadcv = document.querySelector('.cv-download');
    const helpButton = document.querySelector('.nav-help');

    // Animacja zmiany opacity na 0
    welcomeContainer.style.opacity = 0; // Stopniowe znikanie
    downloadcv.style.opacity = 1;
    downloadcv.style.pointerEvents = "all";
    downloadcv.style.display = "flex";
    document.body.style.backgroundColor = "white";
    document.body.style.overflowY = 'auto'; // Włączenie scrollowania tylko w pionie
    document.body.style.overflowX = 'hidden'; // Wyłączenie scrollowania w poziomie

    helpButton.classList.add('notification');

    checkDeco(3);

    const filename = window.location.pathname.split("/").pop();

    // Zmieniaj kolor tła w zależności od nazwy pliku
    switch (filename) {
        case "index.html":
            document.body.style.backgroundColor = "white";
            break;
        case "about.html":
            document.body.style.backgroundColor = "black";
            break;
        case "experience.html":
            document.body.style.backgroundColor = "black";
            break;
        case "projects.html":
            document.body.style.backgroundColor = "black";
            break;
        case "projects2.html":
            document.body.style.backgroundColor = "black";
            break;
        case "contact.html":
            document.body.style.backgroundColor = "white";
            break;
        default:
            document.body.style.backgroundColor = "white";
            break;
    }

    // Ukrycie kontenera po zakończeniu animacji
    setTimeout(() => {
        welcomeContainer.style.display = 'none'; // Ukrycie całego kontenera
    }, 200); // Czas na zakończenie animacji
}

function checkDeco(window) {
    const welcomeNavDeco = document.querySelector('.welcome-nav-deco');
    const welcomeFooterDeco = document.querySelector('.welcome-footer-deco');
    const welcomeCvDownloadDeco = document.querySelector('.welcome-cv-download-deco');
    const downloadcv = document.querySelector('.cv-download');

    if (window === 3) {
        welcomeCvDownloadDeco.style.opacity = 1;
        downloadcv.style.opacity = 1;
        downloadcv.style.pointerEvents = "all";
    } else {
        welcomeCvDownloadDeco.style.opacity = 0;
        downloadcv.style.opacity = 0;
        downloadcv.style.pointerEvents = "none";
    }


    if (window === 2){
        downloadcv.style.display = "none";
    }

    if (window === 3){
        downloadcv.style.display = "flex";
    }

    if (window === 2) {
        welcomeNavDeco.style.opacity = 1;
        welcomeFooterDeco.style.opacity = 1;

        smoothScrollTo(document.body.scrollHeight);
    } else {
        welcomeNavDeco.style.opacity = 0;
        welcomeFooterDeco.style.opacity = 0;

        smoothScrollTo(0);
    }
}

function smoothScrollTo(targetPosition) {
    const startPosition = document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Czas trwania animacji w ms
    let startTime = null;

    function animateScroll(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollAmount = easeOutQuad(progress, startPosition, distance, duration);
        
        // Ustawianie nowej pozycji scrollowania
        document.documentElement.scrollTop = scrollAmount;

        if (progress < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            // Zapewnia, że końcowy scroll będzie dokładnie na docelowej pozycji
            document.documentElement.scrollTop = targetPosition;
        }
    }

    // Funkcja easing (ease-out)
    function easeOutQuad(t, b, c, d) {
        t /= d;
        return b + c * (1 - (1 - t) * (1 - t)); // Uproszczona wersja easing
    }

    requestAnimationFrame(animateScroll);
}
