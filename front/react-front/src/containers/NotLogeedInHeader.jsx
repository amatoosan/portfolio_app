import React, { Fragment } from 'react';
import {
  HeaderWrapper,
  MainLogoImage,
  SiteIntroduction,
  Button,
  Guest
} from '../styles/Header'

// images
import MainLogo from '../images/icon.jpg';

export const NotLoggedInHeader = () => {

  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
          <SiteIntroduction>ようこそ！</SiteIntroduction>
          <Button href="">
            <Guest>ゲスト<br />ログイン</Guest>
          </Button>
          <Button href="/login">ログイン</Button>
          <Button href="/signup">サインイン</Button>
          <Button href="">検索</Button>
          <Button href="/">ホーム</Button>
      </HeaderWrapper>
    </Fragment>
    )
}
