const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");

let senderName = "";
let receiverName = "";

// Prompt the sender and receiver for their names
senderName = prompt("Enter sender name:");
receiverName = prompt("Enter receiver name:");

// Event listener for form submission
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value;
  if (message) {
    // Create a new message element and append it to the chat messages container
    const messageElement = document.createElement("div");
    if (senderName) {
      messageElement.classList.add("sender-message");
      messageElement.innerText = `${senderName}: ${message}`;
    } else if (receiverName) {
      messageElement.classList.add("receiver-message");
      messageElement.innerText = `${receiverName}: ${message}`;
    }
    chatMessages.appendChild(messageElement);
    // Clear the message input field
    messageInput.value = "";
  }
});
