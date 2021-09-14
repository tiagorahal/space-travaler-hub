import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './pages/missions';

function App() {
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
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
