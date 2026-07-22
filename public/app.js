const socket = new WebSocket("ws://localhost:9090");

socket.onopen = () => console.log("connected");

socket.onmessage = (event) => {
  const content = event.data;
  document.getElementById("chat").insertAdjacentHTML("beforeend", template("robot", content));
};

socket.onclose = (event) => console.log("disconnected", event);

socket.onerror = (event) => console.log("error", event);

document.getElementById("send").onclick = () => {
    const content = document.getElementById("content");
    socket.send(content.value);
    document.getElementById("chat").insertAdjacentHTML("beforeend", template("user", content.value));
    content.value = "";
};


const template = (user, content) => {
  const isUser = user !== "robot";
  const role = isUser ? "user" : "ai";
  const name = isUser ? "Você" : "SuperChat";
  const initials = isUser ? "EU" : "AI";

  return `
    <div class="msg-row ${role}">
      <div class="avatar ${role}">${initials}</div>
      <div class="bubble-wrap">
        <div class="sender-label">${name}</div>
        <div class="bubble">${content}</div>
      </div>
    </div>
  `;
};
