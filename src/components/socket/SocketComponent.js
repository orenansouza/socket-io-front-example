import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const SocketComponent = () => {
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3002', { transports: ['websocket'] }); // Replace your Socket.IO server address
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default SocketComponent;
