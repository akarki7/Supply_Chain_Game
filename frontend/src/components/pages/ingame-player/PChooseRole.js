import React from 'react';
import'../../../App.css';
// import {BrowserRouter as Router} from 'react-router-dom';
import Cards from './Cards'
export default function PChooseRole() {
    return (
        <>
            <div className='pchoose-role'>
                <h1 className='pchoose-role'>scroll down to CHOOSE A ROLE</h1>
                <video src="/videos/video-5.mp4" autoPlay loop muted/>
            </div>
            <Cards />
        </>
    );
}
