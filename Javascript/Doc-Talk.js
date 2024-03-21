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

    // Define a map of questions and their related answers
    const questionAnswerMap = {
        'feeling overwhelmed': "It's common to feel overwhelmed at times. Let's talk more about what's been on your mind.",
        'struggling with work deadlines': 'Work-related stress can be challenging. Let\'s discuss strategies to manage your workload more effectively.',
        'trouble sleeping': 'Difficulty sleeping is often linked to stress and anxiety. Let\'s explore relaxation techniques to help you get better rest.',
        // Add more question-answer pairs as needed
    };

    // Handle sending a message
    function sendMessage() {
        const message = messageInput.value.trim().toLowerCase(); // Convert input to lowercase for case insensitivity
        if (message !== '') {
            displayMessage('user', message);

            // Check if the user's message matches a question in the map
            const matchedAnswer = questionAnswerMap[message];
            if (matchedAnswer) {
                // If there's a matching question, display its related answer
                setTimeout(() => {
                    displayMessage('therapist', matchedAnswer);
                }, 1000);
            } else {
                // If the user's message doesn't match any question, provide a vague reply
                setTimeout(() => {
                    displayMessage('therapist', 'I\'m here to assist you.');
                }, 1000);
            }
            
            messageInput.value = '';
        }
    }

    // Handle sending a message on button click
    sendButton.addEventListener('click', sendMessage);

    // Handle sending a message on pressing Enter key
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });


});
