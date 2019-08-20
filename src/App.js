import React from 'react';
import './App.css';
import axios from 'axios';
import uuid from 'uuid/v4';

function App() {
  const handleMultiple = () => {
    for (let i = 0; i < 1000; i++) {
      axios.post(`http://172.23.225.123:8080/zuptransports/api/teste`, {
        description: `desc: ${uuid()}`
      })
      .then(res => {
        console.log('response: ', res);
      })
    }
  }

  const handleOne = async () => {
    let payload = []

    for (let i = 0; i < 1000; i++) {
      await payload.push({ description: `desc: ${uuid()}`})
    }

    axios.post(`http://172.23.225.123:8080/zuptransports/api/teste-list`,
      payload)
    .then(res => {
      console.log('response: ', res);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
        <button style={{ border: 'none', padding: '10px', margin: '10px' }} onClick={() => handleMultiple()}>BUTTON MULTIPLE CALL</button>
        <button style={{ border: 'none', padding: '10px', margin: '10px' }} onClick={() => handleOne()}>BUTTON ONE CALL</button>
      </div>
      </header>
    </div>
  );
}

export default App;
