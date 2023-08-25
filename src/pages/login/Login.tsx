import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../assets/icon/samplelogo.jpeg';
import * as LoginStyle from './Login.styled';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onEmailHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const onPasswordHanlder = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  
const onClickLogin = async (e: { preventDefault: () => void; }) => {
// 이메일과 비밀번호가 비어 있는지 확인
    e.preventDefault();
    if (!(email && password)) {
      alert('이메일과 비밀번호를 모두 입력하세요.');
      return;
    }
// 조건을 통과한 경우에만 요청 보내기
try {
  const response = await axios
    .post(
      'http://localhost:3001/api/v1/auth/login',
      {
        email,
        password,
      },
      { withCredentials: true },
    );
  if(response.status === 200){
    // token이 필요한 API 요청 시 header Authorization에 token 담아서 보내는 거
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.access_token}`;
    navigate('/');
  } else {
    alert('인증 실패: 아이디와 비밀번호를 확인해주세요.');
    return;
  }
} catch (e) {
console.error('로그인 에러:', e);
alert('서버 오류: 다시 시도해주세요.');
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
          onChange={onEmailHandler}
        />
        <LoginStyle.Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={onPasswordHanlder}
        />
        <LoginStyle.Save htmlFor="check1">
          <LoginStyle.SaveId type="checkbox" id="check1" />
          아이디 저장하기
        </LoginStyle.Save>
        <LoginStyle.Button type="submit" onClick={onClickLogin}>
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
