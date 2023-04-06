var chatBox = document.getElementById("chat-box");
var chatBoxInput = document.getElementById("chat-box-input");
var chatBoxSubmit = document.getElementById("chat-box-submit");
var chatBoxHistory = document.getElementById("chat-box-history");

chatBox.addEventListener("click", function () {
    chatBox.style.display = "block";
});

chatBoxInput.addEventListener("focus", function () {
    chatBoxInput.style.border = "1px solid #ccc";
});

chatBoxInput.addEventListener("blur", function () {
    chatBoxInput.style.border = "none";
});

chatBoxSubmit.addEventListener("click", function () {
    var message = chatBoxInput.value;
    chatBoxInput.value = "";

    var chatBoxMessages = document.getElementById("chat-box-messages");
    var chatBoxMessage = document.createElement("div");
    chatBoxMessage.className = "chat-box-message";
    chatBoxMessage.innerHTML = message;
    chatBoxMessages.appendChild(chatBoxMessage);

    chatBox.style.display = "none";

    var chatBoxHistoryMessages = document.getElementById("chat-box-history-messages");
    var chatBoxHistoryMessage = document.createElement("li");
    chatBoxHistoryMessage.innerHTML = message;
    chatBoxHistoryMessages.appendChild(chatBoxHistoryMessage);
});

var chatBoxHistoryTimer = setInterval(function () {
    var chatBoxHistoryMessages = document.getElementById("chat-box-history-messages");
    var chatBoxHistoryMessage = chatBoxHistoryMessages.firstChild;
    if (chatBoxHistoryMessage) {
        chatBoxHistoryMessages.removeChild(chatBoxHistoryMessage);
    }
}, 5000);