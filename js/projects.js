document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');

    // Otwieranie modalu
    document.querySelectorAll('.discover-button, .projectImage').forEach(button => {
        button.addEventListener('click', () => {
            const articleId = button.dataset.articleId;
            const modal = document.getElementById(`modal-${articleId}`);
            if (modal) {
                const modalContent = modal.querySelector('.modal-content');
                modal.classList.add('active');
                document.body.classList.add('no-scroll');
                setTimeout(() => modalContent.classList.add('active'), 50); // Dodaj opóźnienie dla płynności
            }
        });
    });

    // Zamknięcie modalu
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalId;
            const modal = document.getElementById(modalId);
            closeModal(modal);
        });
    });

    // Kliknięcie w tło zamyka modal
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Funkcja zamykania modalu
    function closeModal(modal) {
        if (modal) {
            const modalContent = modal.querySelector('.modal-content');
            modalContent.classList.add('close');
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
            setTimeout(() => {
                modalContent.classList.remove('active', 'close');
            }, 400); // Czas trwania animacji transform
        }
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') { // Sprawdzamy, czy naciśnięty klawisz to Escape
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
});

const addShadowHandlers = (scrollContainer) => {
    const updateShadows = () => {
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight;
        const offsetHeight = scrollContainer.offsetHeight;

        // Poprawione porównania z zaokrąglaniem
        if (scrollTop > 0) {
            scrollContainer.classList.add('has-top-shadow');
        } else {
            scrollContainer.classList.remove('has-top-shadow');
        }

        if (Math.ceil(scrollTop + offsetHeight) < Math.floor(scrollHeight)) {
            scrollContainer.classList.add('has-bottom-shadow');
        } else {
            scrollContainer.classList.remove('has-bottom-shadow');
        }
    };

    // Dodaj obsługę przewijania
    scrollContainer.addEventListener('scroll', updateShadows);

    // Dodaj obserwatora mutacji do dynamicznej zawartości
    const contentObserver = new MutationObserver(() => {
        updateShadows();
    });
    contentObserver.observe(scrollContainer, {
        childList: true,
        subtree: true,
    });

    // Dodaj aktualizację na zmianę rozmiaru okna
    window.addEventListener('resize', updateShadows);

    // Zaktualizuj cienie na początku
    updateShadows();
};

// Funkcja uruchamiana dla istniejących i nowych elementów
const initializeShadows = () => {
    const containers = document.querySelectorAll('.modal-text-content');
    containers.forEach((container) => {
        if (!container.classList.contains('shadow-initialized')) {
            container.classList.add('shadow-initialized'); // Unikaj duplikatów
            addShadowHandlers(container);
        }
    });
};

// Obserwator mutacji dla nowych elementów w DOM
const observer = new MutationObserver(() => {
    initializeShadows();
});

// Inicjalizacja na istniejące elementy
initializeShadows();

// Konfiguracja obserwatora mutacji
observer.observe(document.body, {
    childList: true,
    subtree: true,
});

function checkLinkAndExecute() {
    const linkValue = localStorage.getItem('link'); // Pobiera wartość z Local Storage
    const articleId = linkValue;
    const modal = document.getElementById(`modal-${articleId}`);

    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        modal.classList.add('active');
        document.body.classList.add('no-scroll');
        setTimeout(() => modalContent.classList.add('active'), 50); // Dodaj opóźnienie dla płynności
        localStorage.setItem('link', "none");
    } else {
        return;
    }
}

checkLinkAndExecute();
