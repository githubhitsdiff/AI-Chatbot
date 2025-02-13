const API_KEY = "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"; // Replace with your API key

async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (!userInput) return;

    // Show user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("user-input").value = "";

    // Send request to AI API
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: userInput })
    });

    const data = await response.json();
    let botResponse = data.generated_text || "I didn't understand that.";

    // Show bot response
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
