import React, { } from 'react';
import { } from 'react-redux';
import { } from 'react-cookie';

import LogoIcon from '../../assets/icon/samplelogo.jpeg';
import * as LoginStyle from './Login.styled';

function LoginComponent() {

return (
  <LoginStyle.Container>
    <LoginStyle.LogoImg src={LogoIcon} alt="logo" />

    <LoginStyle.Form>
      <LoginStyle.Input
        type="text"
        id="id"
        placeholder="아이디를 입력해주세요."
      />
      <LoginStyle.Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <LoginStyle.Save htmlFor="check1">
        <LoginStyle.SaveId type="checkbox" id="check1" />
        아이디 저장하기
      </LoginStyle.Save>
      <LoginStyle.Button type="submit"><LoginStyle.GotoHome to="/user/mypage">로그인</LoginStyle.GotoHome></LoginStyle.Button>
      <LoginStyle.JoinLink to="/signup">회원가입</LoginStyle.JoinLink>
 </LoginStyle.Form>

      <LoginStyle.OtherLogin>
        <LoginStyle.SubTitle>sns계정으로 바로 로그인</LoginStyle.SubTitle>
      <LoginStyle.Button>
        <LoginStyle.Kakao to="">카카오톡으로 시작</LoginStyle.Kakao>
      </LoginStyle.Button>
      <LoginStyle.Button>
        <LoginStyle.Google to="">구글아이디로 시작</LoginStyle.Google>
      </LoginStyle.Button>
   </LoginStyle.OtherLogin>
  </LoginStyle.Container>
);
}

export default LoginComponent;
