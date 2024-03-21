document.addEventListener('DOMContentLoaded', function () {
    // Simulated channel data
    const channels = ['General', 'Support', 'Wellness', 'Friends'];

    // Simulated chat data
    const chatData = {
        General: [
            { sender: 'user', message: 'Hello, everyone!' },
            { sender: 'other', message: 'Hi there! How are you?' },
        ],
        Support: [],
        Wellness: [],
        Friends: [],
    };

    const channelList = document.querySelector('.channel-list');
    const chatMessages = document.querySelector('.chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatHeader = document.querySelector('.chat-header');

    // Function to display messages in the chat
    function displayMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to switch channels
    function switchChannel(channelName) {
        // Highlight the selected channel
        const channelItems = document.querySelectorAll('.channel-item');
        channelItems.forEach((item) => {
            item.classList.remove('active');
            if (item.textContent === channelName) {
                item.classList.add('active');
                chatHeader.textContent = channelName; // Display the channel name
            }
        });

        chatMessages.innerHTML = ''; // Clear chat messages
        chatData[channelName].forEach(({ sender, message }) => {
            displayMessage(sender, message);
        });
    }

    // Display initial channels and messages
    channels.forEach((channelName) => {
        const channelItem = document.createElement('div');
        channelItem.classList.add('channel-item');
        channelItem.textContent = channelName;

        // Handle channel click event
        channelItem.addEventListener('click', () => {
            switchChannel(channelName);
        });

        channelList.appendChild(channelItem);
    });

    // Handle sending a message
    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            displayMessage('user', message);
            // Simulated delay and reply
            setTimeout(() => {
                displayMessage('other', 'I\'m here to listen. How can I assist you further?');
            }, 1000);
            messageInput.value = '';
        }
    });

    // Initialize with the General channel selected
    switchChannel('General');
});
