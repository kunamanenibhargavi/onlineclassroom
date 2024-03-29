// Simulated chat messages
const chatMessages = [
    { sender: "Bhargavi", message: "Hello everyone!" },
    { sender: "Hari", message: "Hi Bhargavi!" },
    { sender: "Prabhas", message: "Welcome to the class!" }
];

// Function to display chat messages
function displayChatMessages() {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.innerHTML = ""; // Clear previous content
    
    chatMessages.forEach(msg => {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${msg.sender}:</strong> ${msg.message}`;
        chatContainer.appendChild(messageElement);
    });
}

// Display chat messages when the page loads
window.onload = displayChatMessages;

// Function to handle sending a message
function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    if (message !== "") {
        // Simulate sending message (for demonstration purposes)
        chatMessages.push({ sender: "You", message });
        displayChatMessages();
        messageInput.value = "";
    }
}

// Event listener for sending message button click
document.getElementById("send-button").addEventListener("click", sendMessage);

// Event listener for pressing Enter key to send message
document.getElementById("message-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});