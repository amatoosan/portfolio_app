import React, { Fragment, useReducer, useState } from 'react';
import axios from 'axios';
import history from '../../history'

import DefaultImage from '../../images/images.png'

// reducers
import {
  initialState as loginInitialState,
  loginReducer,
} from '../../reducers/login';

export const Creates = ({isLoggedIn}) => {
   // useState()を用いて、ユーザーデータの初期値（空の文字列）を定義する。
   // useState()フックは、[引数1, 引数2]のように配列で初期値を定義する。
   // 引数１には変数を定義し、引数２には関数を定義
   // ユーザーデータを参照する場合は引数１の変数の方を使用
   // ユーザーデータを書き換えたい場合は引数２の関数の方を使用
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [image, setImage] = useState(null)

  const [state, dispatch] = useReducer(loginReducer, loginInitialState)

  const handleSubmit = (event) => {
    axios.post("http://localhost:3001/api/v1/signup",
      {
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
          image: image
        }
      },
      { withCredentials: true }
    ).then((response) => {
      if (response.data.status === 'created') {
        dispatch({
            type: 'isLogin',
            loginStatus: response
        })
        isLoggedIn()
        history.push('/')
      console.log("registration res", response)
    }}).catch(error => {
      console.log("registration error", error)
    })
    event.preventDefault()
  }

  const handleChangeFile = (event) => {
    const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL
    const files = event.target.files
    const image_url = createObjectURL(files[0])
    setImage(image_url)
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
        <input
          type="file"
          name="image"
          placeholder="画像"
          onChange={(event) => {handleChangeFile(event)}}
        />
        {image ? (
          <img src={image}/>
        ) : (
          <img src={DefaultImage}/>
        )}
        <button type="submit">登録</button>
      </form>
    </Fragment>
  )
}
