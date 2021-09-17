import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/missions';
import rocketHooks from './hooks/rockets';

function App() {
  const rockets = useSelector((state) => state.rocketsReducer);

  rocketHooks();

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/profile">
            <Profile rockets={rockets} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
