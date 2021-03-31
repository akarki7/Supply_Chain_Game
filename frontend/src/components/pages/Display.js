import React from 'react';
import'./Display.css';
import { withRouter } from "react-router-dom";
import PChooseRole from './ingame-player/PChooseRole';

function Display(props) {
    return (
        <>
        <PChooseRole/>
        </>
    )
}

export default withRouter(Display)