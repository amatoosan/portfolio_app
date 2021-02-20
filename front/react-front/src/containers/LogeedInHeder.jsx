import React, { Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import history from '../history';

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

export const LoggedInHeder = ({isNotLoggedIn}) => {

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
