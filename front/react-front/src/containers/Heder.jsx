import React, { Fragment } from 'react';
import styled from 'styled-components';

// images
import MainLogo from '../images/icon.jpg';

const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: #292929;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;
const MainLogoImage = styled.img`
  height: 60px;
  margin: 10px 10px;
  float: left;
`;
const SiteIntroduction = styled.p`
  margin-top: 25px;
  color: #fff;
  float: left;
`;
const Button = styled.a`
  width: 80px;
  text-align: center;
  background-color: rgb(78, 78, 78);
  float: right;
  line-height: 80px;
  margin-right: 2px;
  list-style: none;
  display: table;
  text-decoration: none;
`;

export const Heder = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
        <SiteIntroduction>ようこそ！</SiteIntroduction>
          <Button href="">ゲスト<br />ログイン</Button>
          <Button href="/login">ログイン</Button>
          <Button href="/signup">サインイン</Button>
          <Button href="">検索</Button>
          <Button href="/">ホーム</Button>
      </HeaderWrapper>
    </Fragment>
  )
}
