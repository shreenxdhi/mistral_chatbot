async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const responseDiv = document.getElementById("response");

    const response = await fetch("https://your-backend-url.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userInput })
    });

    const data = await response.json();
    responseDiv.innerHTML = "<b>Bot:</b> " + data.response;
}
