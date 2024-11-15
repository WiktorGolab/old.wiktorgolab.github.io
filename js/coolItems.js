function terminal() {
    // Resetowanie efektu na innych ikonach
    resetIcons();

    // Dodajemy aktywny efekt dla terminala
    const terminalIcon = document.querySelector(".coolItemsConsole");
    terminalIcon.classList.add("active");

    // Zmieniamy transformacje dla innych elementów
    const console = document.querySelector(".console");
    const consoleDeco = document.querySelector(".consoleDeco");
    console.style.transform = "translateY(0)";
    consoleDeco.style.transform = "translateY(0)";

    const abilityCard = document.querySelector(".abilityCard");
    abilityCard.style.transform = "translateY(-80vw)";

    const chatbot = document.querySelector(".chatbot-container");
    chatbot.style.transform = "translateY(-80vw)";
}

function abilityCard() {
    // Resetowanie efektu na innych ikonach
    resetIcons();

    // Dodajemy aktywny efekt dla ability card
    const abilityCardIcon = document.querySelector(".coolItemsCard");
    abilityCardIcon.classList.add("active");

    // Zmieniamy transformacje dla innych elementów
    const console = document.querySelector(".console");
    const consoleDeco = document.querySelector(".consoleDeco");
    console.style.transform = "translateY(-80vw)";
    consoleDeco.style.transform = "translateY(-80vw)";

    const abilityCard = document.querySelector(".abilityCard");
    abilityCard.style.transform = "translateY(0)";

    const chatbot = document.querySelector(".chatbot-container");
    chatbot.style.transform = "translateY(-80vw)";
}

function chatbot() {
    // Resetowanie efektu na innych ikonach
    resetIcons();

    // Dodajemy aktywny efekt dla chatbota
    const chatbotIcon = document.querySelector(".coolItemsChatbot");
    chatbotIcon.classList.add("active");

    // Zmieniamy transformacje dla innych elementów
    const console = document.querySelector(".console");
    const consoleDeco = document.querySelector(".consoleDeco");
    console.style.transform = "translateY(-80vw)";
    consoleDeco.style.transform = "translateY(-80vw)";

    const abilityCard = document.querySelector(".abilityCard");
    abilityCard.style.transform = "translateY(-80vw)";

    const chatbot = document.querySelector(".chatbot-container");
    chatbot.style.transform = "translateY(0)";
}

function resetIcons() {
    // Usuwamy aktywność z wszystkich ikon
    const icons = document.querySelectorAll(".coolItemsIcon");
    icons.forEach(icon => icon.classList.remove("active"));
}