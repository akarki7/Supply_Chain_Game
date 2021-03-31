import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted/>
      <h1>Welcome To the Beer Game</h1>
      <p>Play/Make Your Very Own Game</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TUTORIAL <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default MainSection;