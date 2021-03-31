import React from 'react';
// import'../../App.css';
import'./Player.css'
import Interact from './index/Interact';
import {BrowserRouter as Router} from 'react-router-dom';

export default function Player() {
    return (
        <>
            
            <div className='player-container'>
            <Router>
                <video src="/videos/video-4.mp4" autoPlay loop muted/>
            <Interact />
            
            </Router> 
            </div>
            
        </>
    );
}
