const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", () => {
    console.log("Connected to server");
});

socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message.sender, message.text);
});

function sendMessage() {
    const input = document.getElementById("message-input");
    const message = input.value.trim();

    if (message.length > 0) {
        const data = { sender: "You", text: message };
        socket.send(JSON.stringify(data));
        displayMessage(data.sender, data.text);
        input.value = "";
    }
}

function displayMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    const senderElement = document.createElement("span");
    const textElement = document.createElement("span");

    senderElement.textContent = sender + ": ";
    senderElement.style.fontWeight = "bold";
    textElement.textContent = text;

    messageElement.appendChild(senderElement);
    messageElement.appendChild(textElement);
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById("submit-button").addEventListener("click", sendMessage);
document.getElementById("message-input").addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        sendMessage();
    }
});

