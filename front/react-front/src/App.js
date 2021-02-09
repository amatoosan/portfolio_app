import React, { useReducer, useEffect, useState }  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

// reducers
import {
  initialState as loginInitialState,
  loginReducer,
} from './reducers/login';

import { Heder } from './containers/Heder.jsx';

// user components
import { Shows } from './containers/users/Shows.jsx';
import { Creates } from './containers/users/Creates.jsx';
import { Login } from './containers/sessions/Login';

function App() {

  const [state, dispatch] = useReducer(loginReducer, loginInitialState)
  const [user, setUser] = useState({})

  useEffect(() => {
    checkLoginStatus()
  }, [])

  const checkLoginStatus = () => {
    axios.get("http://localhost:3001/api/v1/logged_in",
    { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          dispatch({
            type: 'isLogin',
            loginStatus: state,
          })
          setUser(response.data.user);
        }
      console.log("ログイン状況", response)
    })
    .catch(error => {
      console.log("ログインエラー", error)
    })
  }

  return (
    <Router>
      <Heder />
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
        {/*session*/}
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
