import React, { useState } from 'react';
import {  } from 'react-router-dom';
import LogoIcon from '../../assets/icon/samplelogo.jpeg';

import * as L from './Login.styled';

function LoginComponent({ onSubmit }) {
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");


  const onEmailHandler = (e) => {
    SetEmail(e.target.value);
  }
  const onPasswordHandler = (e) => {
    SetPassword(e.target.value);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log('Email', Email);
    console.log('Password', Password);

    let formData= {
      email: Email,
      password: Password,
    }
    onSubmit(formData);

  }

  return (
    <L.Container>
      <L.LogoImg src={LogoIcon} alt="logo" />
      <L.Wrapper>
        <L.Title>Login</L.Title>
        <L.JoinLink to="/">회원가입하기</L.JoinLink>
      </L.Wrapper>
      <L.Form>
        <L.Input
          type="email"
          id="id"
          placeholder="아이디를 입력해주세요."
          value={Email}
          onChange={onEmailHandler}
        />
        <L.Input
          type="password"
          value={Password}
          onChange={onPasswordHandler}
          placeholder="비밀번호를 입력해주세요."
        />
        <L.Save htmlFor="check1">
          <L.SaveId type="checkbox" id="check1" />
          아이디 저장하기
        </L.Save>
        <L.Button type="submit" onClick={onSubmitHandler}>
          로그인
        </L.Button>
        <L.Button>
          <L.Kakao to="">카카오톡으로 시작</L.Kakao>
        </L.Button>
        <L.Button>
          <L.Google to="">구글아이디로 시작</L.Google>
        </L.Button>
      </L.Form>
    </L.Container>
  );
}

export default LoginComponent;
