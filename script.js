function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if(userInput === "") return;

    const chatBox = document.getElementById("chat-box");

    // Display user's message
    const userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.textContent = userInput;
    chatBox.appendChild(userMsg);

    // Bot response
    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";

    if(userInput.toLowerCase().includes("hello") || userInput.toLowerCase().includes("hi")) {
        botMsg.textContent = "Hello! How are you?";
    } else if(userInput.toLowerCase().includes("how are you")) {
        botMsg.textContent = "I am fine, thank you!";
    } else if(userInput.toLowerCase().includes("your name")) {
        botMsg.textContent = "I am a simple chatbot.";
    } else if(userInput.toLowerCase().includes("bye")) {
        botMsg.textContent = "Bye! See you later.";
    } else {
        botMsg.textContent = "Sorry, I didn't understand that.";
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight; // auto scroll
    document.getElementById("user-input").value = ""; // clear input
}
