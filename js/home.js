const homeProjectButton1 = document.querySelector('.homeProjectButton1');
const homeProjectButton2 = document.querySelector('.homeProjectButton2');
const homeProjectButton3 = document.querySelector('.homeProjectButton3');

// Funkcja przenosząca na stronę i zapisująca do Local Storage
function goToPong() {
    localStorage.setItem('link', 'pong'); // Zapis do Local Storage
    window.location.href = 'projects.html'; // Przekierowanie
}

function goToEksero24() {
    localStorage.setItem('link', 'eksero24'); // Zapis do Local Storage
    window.location.href = 'projects.html'; // Przekierowanie
}

function goToOutsider() {
    localStorage.setItem('link', 'outsider'); // Zapis do Local Storage
    window.location.href = 'projects2.html'; // Przekierowanie
}

// Dodanie nasłuchiwania na kliknięcia
homeProjectButton1.addEventListener('click', goToPong);
homeProjectButton2.addEventListener('click', goToEksero24);
homeProjectButton3.addEventListener('click', goToOutsider);
