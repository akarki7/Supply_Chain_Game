import React from 'react';
import'./Display.css';
import { withRouter } from "react-router-dom";

function Display_ins(props) {
    return (
        <div align="center" className="dis-container">
            <h1>LOGIN SUCCESSFULL!!</h1>
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
        </div>
    )
}

export default withRouter(Display_ins)