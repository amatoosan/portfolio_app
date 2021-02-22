import React, { Fragment } from 'react';
import axios from 'axios';
import history from '../history';
import {
  HeaderWrapper,
  MainLogoImage,
  SiteIntroduction,
  Button
} from '../styles/Header'

// images
import MainLogo from '../images/icon.jpg';

export const LoggedInHeader = ({isNotLoggedIn}) => {

  const handleLogoutClick = (event) => {
    axios.delete("http://localhost:3001/api/v1/logout",
    { withCredentials: true })
    .then(response => {
      console.log("logout: ", response)
      isNotLoggedIn()
      history.push('/')
    }).catch(error => console.log("ログアウトエラー", error))
    event.preventDefault()
  }

  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
        <SiteIntroduction>ようこそ！</SiteIntroduction>
          <Button onClick={handleLogoutClick}>
            ログアウト
          </Button>
          <Button href="">投稿</Button>
          <Button href="">プロフィール</Button>
          <Button href="">検索</Button>
          <Button href="/">ホーム</Button>
      </HeaderWrapper>
    </Fragment>
  )
}
