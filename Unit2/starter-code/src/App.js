import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import Buzzwords from "./sections/Buzzwords";
import Nats from "./sections/Nats";
import Profile from "./sections/Profile";
import Header from "./sections/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Natter</h1>
          <Header />
          {/* <h1>Natter</h1>
          <nav>
            <ul>
              <li>
                <Link to="/feed">Nats</Link>
              </li>
              <li>
                <Link to="/buzz">Buzzwords</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav> */}
        </header>
        <main>
          <Switch>
            <Route path="/Buzzwords">
              <Buzzwords />
            </Route>
            <Route path="/feed">
              <Nats />
              {/* <Nats handleUserClick={setSelectedUser} /> */}
            </Route>
            <Route path="/profile">
              {/* <Profile username={selectedUser} /> */}
              <RoutedProfile />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
const RoutedProfile = () => {
  const { username } = useParams();
  return <Profile username={username} />;
};

export default App;
