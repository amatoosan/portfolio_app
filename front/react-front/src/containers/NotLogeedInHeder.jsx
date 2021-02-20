import React, { Fragment } from 'react';
import styled from 'styled-components';

// images
import MainLogo from '../images/icon.jpg';

const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: #292929;
`;
const MainLogoImage = styled.img`
  height: 60px;
  margin: 10px 10px;
  float: left;
`;
const SiteIntroduction = styled.p`
  margin-top: 25px;
  color: white;
  float: left;
`;
const Button = styled.a`
  color: white;
  width: 100px;
  text-align: center;
  background-color: rgb(78, 78, 78);
  float: right;
  line-height: 80px;
  margin-right: 2px;
  list-style: none;
  text-decoration: none;
`;
const Guest = styled.p`
  line-height: 24px;
`;

export const NotLoggedInHeder = () => {

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
