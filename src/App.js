import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  * as pages from './pages';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path='/game' component={pages.Game}/>
            <Route path='/highScores' component={pages.HighScores}/>
            <Route path='/gameOver' component={pages.GameOver}/>
            <Route path='/' component={pages.Home}/>
        </Switch>
    </Router>
  );
}

export default App;
