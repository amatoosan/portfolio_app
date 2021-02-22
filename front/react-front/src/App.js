import React, { useEffect, useState }  from 'react';
import './App.css';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

import history from './history'

import { LoggedInHeader } from './containers/LogeedInHeader';
import { NotLoggedInHeader } from './containers/NotLogeedInHeader';

// user components
import { Shows } from './containers/users/Shows.jsx';
import { Creates } from './containers/users/Creates.jsx';
import { Login } from './containers/sessions/Login';

function App() {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  const isLoggedIn = () => {
    setLoggedIn(true)
  }

  const isNotLoggedIn = () => {
    setLoggedIn(false)
  }

  //render実行後ごとにcheckLoginStatusを実行
  //{}内部は第一引数で、callback
  //[]内部は第二引数で、値が入っている場合、その値が更新されるごとにcallbackを実行する
  useEffect(() => {
    checkLoginStatus()
  }, [loggedIn])

  const checkLoginStatus = () => {
    axios.get("http://localhost:3001/api/v1/logged_in",
    { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          setUser(response.data.user)
          isLoggedIn()
          console.log("ログイン状況", response)
          console.log({user})
          console.log({loggedIn})
        } else if (!response.data.logged_in) {
          setUser({})
          isNotLoggedIn()
        }
    })
    .catch(error => {
      console.log("ログインエラー", error)
    })
  }

  return (
    <Router history={history}>
      {loggedIn ? (
        <LoggedInHeader isNotLoggedIn={isNotLoggedIn} />
      ) : (
        <NotLoggedInHeader />
      )}
      <Switch>
        {/*user*/}
        <Route exact path="/users/:id"
          render={({ match }) =>
            <Shows match={match} />
          }
        />
        <Route exact path="/signup">
          <Creates isLoggedIn={isLoggedIn} />
        </Route>
        {/*session*/}
        <Route exact path="/login">
          <Login isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
