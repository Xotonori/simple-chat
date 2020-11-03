import React from 'react';
import io from 'socket.io-client'
import './App.scss';
import {Input} from "./components/Input/Input";

const connectSocket = () => {
    io('http://localhost:9999/');
}

function App() {
  return (
    <div className="App">
        <form action="" className='roomForm'>
            <Input type="text" placeholder='Room ID'/>
            <Input type="text" placeholder='Your Name'/>
            <button onClick={connectSocket}>CONNECT</button>
        </form>
    </div>
  );
}

export default App;
