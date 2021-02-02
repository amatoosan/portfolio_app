import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// user components
import { Shows } from './containers/users/Shows.jsx';
import { Creates } from './containers/users/Creates.jsx';

function App() {
  return (
    <Router>
      <Switch>
      {/*user*/}
        <Route exact path="/users/:id"
          render={({ match }) =>
            <Shows match={match} />
          }
        />
        <Route exact path="/signup">
          <Creates />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
