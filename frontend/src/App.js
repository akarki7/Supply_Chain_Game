import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Player from './components/pages/Player';
import Instructor from './components/pages/Instructor';
import Instruction from './components/pages/Instruction';
import Display from './components/pages/Display';
import PChooseRole from './components/pages/ingame-player/PChooseRole';
import Display_ins from './components/pages/Display_ins';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/display'>
            <Display />
          </Route>
          <Route path='/display_ins'>
            <Display_ins />
          </Route>
          <Route path='/instruction'>
            <Instruction />
          </Route>
          <Route path='/choose-role'>
            <PChooseRole />
          </Route>
          <Route path='/player'>
            <Player />
          </Route>
          <Route path='/instructor'>
            <Instructor />
          </Route>          
        </Switch>
      </Router>
    </>
  );
}

export default App;
