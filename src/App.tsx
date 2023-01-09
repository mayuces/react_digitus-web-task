import React from 'react';
import './App.css';
import { fetchData } from './api/api';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const data = fetchData();
  console.log('====================================');
  console.log("data", data);
  console.log('====================================');
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
