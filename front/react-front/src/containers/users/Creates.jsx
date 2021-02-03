import React, { Fragment, useState } from 'react';
import axios from 'axios';

export const Creates = () => {
   // useState()を用いて、ユーザーデータの初期値（空の文字列）を定義する。
   // useState()フックは、[引数1, 引数2]のように配列で初期値を定義する。
   // 引数１には変数を定義し、引数２には関数を定義
   // ユーザーデータを参照する場合は引数１の変数の方を使用
   // ユーザーデータを書き換えたい場合は引数２の関数の方を使用
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSubmit = (event) => {
    axios.post("http://localhost:3001/api/v1/signup",
      {
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      },
      { withCredentials: true }
    ).then(response => {
      console.log("registration res", response)
    }).catch(error => {
      console.log("registration error", error)
    })
    event.preventDefault()
  }

  return (
    <Fragment>
      ユーザー作成ページです
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="name"
          placeholder="ユーザー名"
          value={name}
          onChange={event => setName(event.target.value)}
        />
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
        <input
          type="password"
          name="password_confirmation"
          placeholder="確認用パスワード"
          value={passwordConfirmation}
          onChange={event => setPasswordConfirmation(event.target.value)}
        />

        <button type="submit">登録</button>
      </form>
    </Fragment>
  )
}
