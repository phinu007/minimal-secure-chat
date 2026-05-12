function sendMessage() {

  const input = document.getElementById("messageInput");

  const messages = document.getElementById("messages");

  if (input.value.trim() === "") {
    return;
  }

  const message = document.createElement("div");

  message.textContent = input.value;

  message.style.background = "#262626";

  message.style.padding = "10px";

  message.style.borderRadius = "10px";

  message.style.marginBottom = "10px";

  message.style.wordBreak = "break-word";

  messages.appendChild(message);

  input.value = "";

  messages.scrollTop = messages.scrollHeight;
}