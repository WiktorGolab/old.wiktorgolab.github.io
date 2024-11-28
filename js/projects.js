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
            setTimeout(() => {
                modalContent.classList.remove('active', 'close');
            }, 400); // Czas trwania animacji transform
        }
    }
});