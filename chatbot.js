const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    appendMessage('You', userMessage)

  
    const botResponse = getBotResponse(userMessage);
    appendMessage('Chatbot', botResponse);
  
    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function getBotResponse(userMessage) {
    const responses = {
        'hello': 'Hi there!',
        'how are you': 'I am a bot. I don\'t have feelings, but thanks for asking!',
        '
    };
  
    for (const pattern in responses) {
        if (userMessage.toLowerCase().includes(pattern)) {
            return responses[pattern];
        }
    }
  
    return 'I didn\'t understand that. Can you please rephrase?';
}
