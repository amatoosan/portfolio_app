import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const Login = ({isLoggedIn}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory();

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
        console.log("login response: ", response)
        isLoggedIn()
        history.push('/')
      }
    })
    .catch(error => {
      console.log("registration error", error)
    })
    event.preventDefault()
  }

  return (
    <Fragment>
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
