import AxiosC from '@/helper/AxiosC';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '@/assets/img/Logo1.png';
import * as LoginStyle from '@/pages/login/Login.styled';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onEmailHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼
  const onClickLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!(email && password)) {
      alert('이메일과 비밀번호를 모두 입력하세요.');
      return;
    }
    // 조건을 통과한 경우에만 요청 보내기
    try {
      const response = await AxiosC.post(
        'http://localhost:3000/api/v1/auth/login',
        {
          email,
          password,
        },
        { withCredentials: true },
      );

      const { data } = response.data;

      if (data.isLogin) {
        alert('로그인 성공하셨습니다.');
        navigate('/');
        return;
      }
    } catch (e) {
      console.error('로그인 에러:', e);
      alert('다시 시도해주세요.');
    }
  };

  // DB에서 이메일 중복 체크와 함께 비밀번호도 함께 체크해서 이메일이 중복된건지, 비밀번호체크로 회원이 탈퇴된 이용자인지 체크
  return (
    <LoginStyle.Container>
      <LoginStyle.LogoImg src={LogoIcon} alt="logo" />

      <LoginStyle.Form>
        <LoginStyle.Title>이메일 주소</LoginStyle.Title>
        <LoginStyle.Input
          type="text"
          id="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onEmailHandler}
        />
        <LoginStyle.Title>비밀번호</LoginStyle.Title>
        <LoginStyle.Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={onPasswordHandler}
        />
        <LoginStyle.Save htmlFor="check1">
          <LoginStyle.SaveId type="checkbox" />
        </LoginStyle.Save>
        <LoginStyle.Button type="submit" onClick={onClickLogin}>
          로그인
        </LoginStyle.Button>
        <LoginStyle.JoinLink to="/signup">회원가입</LoginStyle.JoinLink>
      </LoginStyle.Form>
    </LoginStyle.Container>
  );
}

export default LoginComponent;
