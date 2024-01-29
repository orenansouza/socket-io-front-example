import React from 'react';
import SocketComponent from './components/socket/SocketComponent';

const App = () => {
  return (
    <div>
      <h1>Chat com Socket.IO</h1>
      <SocketComponent />
    </div>
  );
};

export default App;