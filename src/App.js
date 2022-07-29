import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import AddNewMessage from './components/AddNewMessage';
import Messages from './components/Messages';

function App() {
  const [message, setMessage] = useState([])
  return (
    <div className="App">
      <Header />
      <AddNewMessage message={message} setMessage={setMessage}/>
      <Messages message={message} setMessage={setMessage}/>
    </div>
  );
}

export default App;
