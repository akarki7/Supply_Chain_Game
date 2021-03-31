import React from 'react';
// import'../../App.css';
import'./Instructor.css'
import Interact from './index/Interact';
import {BrowserRouter as Router,withRouter } from 'react-router-dom';

function Instructor() {
    return (
        <>
            <div className='instructor-container'>
            <Router>
                <video src="/videos/video-3.mp4" autoPlay loop muted/>
            <Interact />
            
            </Router> 
            </div>
            
        </>
    );
}
export default withRouter(Instructor);