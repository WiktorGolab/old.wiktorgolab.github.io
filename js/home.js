document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const homeProjectButton1 = document.querySelector('.homeProjectButton1');
        const homeProjectButton2 = document.querySelector('.homeProjectButton2');
        const homeProjectButton3 = document.querySelector('.homeProjectButton3');
        const homeProjectButton4 = document.querySelector('.homeProjectButton4');
        const homeProjectButton5 = document.querySelector('.homeProjectButton5');
        const homeProjectButton6 = document.querySelector('.homeProjectButton6');

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
        homeProjectButton1?.addEventListener('click', goToPong);
        homeProjectButton2?.addEventListener('click', goToEksero24);
        homeProjectButton3?.addEventListener('click', goToOutsider);
        homeProjectButton4?.addEventListener('click', goToEduczar);
        homeProjectButton5?.addEventListener('click', goToDermaExpert);
        homeProjectButton6?.addEventListener('click', goToM3Group);

    }, 200);
});
