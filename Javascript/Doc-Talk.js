document.addEventListener('DOMContentLoaded', function () {
    // Simulated chat data
    const chatData = [
        { sender: 'user', message: 'Hello, therapist!' },
        { sender: 'therapist', message: 'Hi there! How can I help you today?' },
        // Add more chat messages here
    ];

    const chatMessages = document.querySelector('.chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Function to display messages in the chat
    function displayMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Display initial chat messages
    chatData.forEach(({ sender, message }) => {
        displayMessage(sender, message);
    });

    // Handle sending a message
    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            displayMessage('user', message);
            // Simulated therapist's reply 
            setTimeout(() => {
                displayMessage('therapist', 'I\'m here to listen. How can I assist you further?');
            }, 1000);
            messageInput.value = '';
        }
    });
});
