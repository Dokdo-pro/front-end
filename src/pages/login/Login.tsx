import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useCookies } from 'react-cookie';

import LogoIcon from '../../assets/icon/samplelogo.jpeg';
import * as LoginStyle from './Login.styled';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const [cookies, setCookie] = useCookies(['email']);

 // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (!(email && password)) {
        return alert('빈칸 없이 입력해주세요.');
      }
      const response = await axios.post(
        'http://localhost:3001/api/auth/login',
        {
          email,
          password,
        },
      );
      console.log(response.data.token);
     // setCookie('email', response.data.token); // 쿠키에 토큰 저장
      console.log('로그인');
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LoginStyle.Container>
      <LoginStyle.LogoImg src={LogoIcon} alt="logo" />

      <LoginStyle.Form>
        <LoginStyle.Input
          type="text"
          id="email"
          placeholder="아이디를 입력해주세요."
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <LoginStyle.Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <LoginStyle.Save htmlFor="check1">
          <LoginStyle.SaveId type="checkbox" id="check1" />
          아이디 저장하기
        </LoginStyle.Save>
        <LoginStyle.Button type="submit" onClick={onSubmitHandler}>
          로그인
        </LoginStyle.Button>
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
