function send() {
    var userText = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";

    var chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += "<p class='text-right mb-2'><span class='bg-blue-100 text-vblack p-3 rounded-lg text-right'>" + userText + "</span></p>";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/get?msg=" + userText);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var botResponse = xhr.responseText;
            chatbox.innerHTML += "<p class='mb-2 text-justify'><span class='bg-gray-200 text-gray-800 p-3 rounded-lg text-left'><strong>Caff-Bot:</strong> " + botResponse + "</span></p>";
            chatbox.scrollTop = chatbox.scrollHeight; 
        }
    };
    xhr.send();
}

document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        send(); 
    }
});

