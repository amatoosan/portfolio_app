import React, { Fragment, useReducer, useState } from 'react';
import axios from 'axios';

// reducers
import {
  initialState as loginInitialState,
  loginReducer,
} from '../../reducers/login';

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [state, dispatch] = useReducer(loginReducer, loginInitialState)

  const handleSubmit = (event) => {
    axios.post("http://localhost:3001/api/v1/login",
      {
        user: {
          email: email,
          password: password,
        }
      },
      { withCredentials: true }
    ).then((response) => {
      if (response.data.logged_in === true) {
        dispatch({
          type: 'isLogin',
        })
      console.log("login response: ", response)
      }
    })
    .catch(error => {
      console.log("registration error", error)
    })
    event.preventDefault()
  }

  return (
    <Fragment>
      ログイン状態：{state.loginStatus}
      ログインページです
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">ログイン</button>
      </form>
    </Fragment>
  )
}
