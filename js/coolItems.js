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

document.getElementById("send-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
        displayMessage(userInput, "user");
        getAIResponse(userInput);
        document.getElementById("user-input").value = ""; // Wyczyść pole tekstowe
    }
});

// Wyświetlanie wiadomości w oknie czatu
function displayMessage(message, sender) {
    const chatWindow = document.getElementById("chat-window");

    // Tworzymy nowy element dla nagłówka wiadomości (np. "Ja" lub "Wiktor")
    const headerDiv = document.createElement("div");
    headerDiv.className = sender === "user" ? "message-header user-header" : "message-header bot-header";
    headerDiv.innerText = sender === "user" ? "Ja" : "Wiktor";
    
    // Tworzymy nowy element dla dymka wiadomości
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";
    messageDiv.innerText = message;

    // Dodajemy nagłówek i wiadomość do kontenera
    chatWindow.appendChild(headerDiv);
    chatWindow.appendChild(messageDiv);

    chatWindow.scrollTop = chatWindow.scrollHeight; // Przewijanie do dołu
}

async function getAIResponse(userInput) {
    const API_URL = "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium";
    const API_TOKEN = "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";

    const requestData = {
        inputs: userInput,
        parameters: {
            max_length: 50,
            temperature: 0.7,
            top_k: 50,
            top_p: 0.95,
        },
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Surowa odpowiedź API:", result);

        // Pobierz tekst odpowiedzi
        const aiResponse =
            result && Array.isArray(result) && result[0]?.generated_text
                ? result[0].generated_text
                : "Nie mogę odpowiedzieć na to pytanie.";

        // Wyświetl odpowiedź w oknie czatu
        displayMessage(aiResponse, "bot");
    } catch (error) {
        console.error("Wystąpił błąd:", error);
        displayMessage("Wystąpił błąd: " + error.message, "bot");
    }
}
