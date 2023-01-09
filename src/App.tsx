import React from 'react';
import './App.css';
import { fetchData } from './api/api';
import Navbar from './Components/Navbar/Navbar';
import PostBox from './Components/PostBox/PostBox';
import PostItem from './Components/PostItem/PostItem';
import MembersYouKnow from './Components/MembersYouKnow/MembersYouKnow';
import AdvirtesementCard from './Components/AdvertisementCard/AdvirtesementCard';
import MiniPost from './Components/MiniPost/MiniPost';
import Notice from './Components/Notice/Notice';

function App() {
  // const data = fetchData();

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <div className='content-left'>
          <PostBox />
          <PostItem />
          <MembersYouKnow />
          <AdvirtesementCard />
        </div>
        <div className='content-right'>
          <div className='content-right--miniposts'>
            <MiniPost />
            <MiniPost />
          </div>
          <Notice />
        </div>

      </div>
    </div>
  );
}

export default App;
