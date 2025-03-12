import React, { useState, useEffect } from "react";

const GameClient = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Conectado al servidor WebSocket");
    };

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onclose = () => {
      console.log("Conexión cerrada");
    };

    setWs(socket);

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (ws && input) {
      ws.send(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>Juego Multijugador</h1>
      <div>
        <h2>Chat</h2>
        <div>
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe un mensaje"
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default GameClient;
