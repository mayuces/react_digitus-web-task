import React from 'react';
import './App.css';
import { fetchData } from './api/api';
import Navbar from './Components/Navbar/Navbar';
import PostBox from './Components/PostBox/PostBox';
import PostItem from './Components/PostItem/PostItem';

function App() {
  const data = fetchData();
  console.log('====================================');
  console.log("data", data);
  console.log('====================================');
  return (
    <div className="App">
      <Navbar />
      <div className='left'>
        <PostBox />
        <PostItem />
      </div>
    </div>
  );
}

export default App;
