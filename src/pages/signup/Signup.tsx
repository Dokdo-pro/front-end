import React, { useState, useCallback } from 'react';
import {  } from 'react-redux';

import * as SignupStyle from './Signup.styled';


const SignupComponent = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('');

  // 유효성 검사 이메일
  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      );
  };

  // 유효성 검사 비밀번호
  const validatePwd = (password: string) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  };

  // 유효성 검사 부분 함수명으로 줄임
  const isEmailValid = validateEmail(email);
  const isPwdValid = validatePwd(password);
  const isConfirmPwd = password === confirmPwd;

  // 이메일
  const onChangeEmail = useCallback(async (e: { target: { value: any } }) => {
    const currEmail = e.target.value;
    setEmail(currEmail);

    if (!validateEmail(currEmail)) {
      setEmailMsg('이메일 형식이 올바르지 않습니다.');
    } else {
      setEmailMsg('올바른 이메일 형식입니다.');
    }
  }, []);


  // 비밀번호
  const onChangePwd = useCallback((e: { target: { value: any } }) => {
    const currPwd = e.target.value;
    setPassword(currPwd);

    if (!validatePwd(currPwd)) {
      setPwdMsg('영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.');
    } else {
      setPwdMsg('안전한 비밀번호입니다.');
    }
  }, []);

  //비밀번호 확인
  const onChangeConfirmPwd = useCallback(
    (e: { target: { value: any } }) => {
      const currConfirmPwd = e.target.value;
      setConfirmPwd(currConfirmPwd);

      if (currConfirmPwd !== password) {
        setConfirmPwdMsg('비밀번호가 일치하지 않습니다.');
      } else {
        setConfirmPwdMsg('일치한 비밀번호입니다.');
      }
    },
    [password],
  );

  // 리로드 방지, 입력안한 칸 있으면 alert
  const onSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
     if (!email) {
    return alert("이메일을 입력하세요.");
  }
  else if (!password) {
    return alert("비밀번호를 입력하세요.");
  };
}

  // 이메일 중복된 건지 체크
  /*
const [checkMail, setCheckMail] = useState(false);

const onCheckEmail = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  try {
    const res = await axios.get('/email', { email });

    const { result } = res.data;

    if (!result) {
      setEmailMsg('이미 등록된 이메일입니다. 다시 입력해주세요.');
      setCheckMail(false);
    } else {
      setEmailMsg('사용 가능한 이메일입니다.');
      setCheckMail(true);
    }
  } catch (err) {
    console.log(err);
  }};
*/

  return (
    <SignupStyle.Container>
      <SignupStyle.TitleWrap>
        <SignupStyle.Title>지금 가입하면</SignupStyle.Title>
        <SignupStyle.Description>
          바로 사용할 수 있는 도서상품권 증정!
        </SignupStyle.Description>
      </SignupStyle.TitleWrap>
      <SignupStyle.Wrapper onSubmit={onSubmitHandler}>
        <SignupStyle.FormTag>
          <SignupStyle.Tag>이메일 주소</SignupStyle.Tag>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.Input
            id="email_val"
            type="text"
            name="is_Useremail"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChange={onChangeEmail}
          />
        </SignupStyle.FormInput>

        <SignupStyle.Alert className={isEmailValid ? 'success' : 'error'}>
          {emailMsg}
        </SignupStyle.Alert>
        {/* 여기에 중복된 이메일입니다 => 확인되었습니다로 바뀌는 거 삼항연산자로 ?isNotDuple === "확인되었습니다": "중복된 이메일입니다" */}
        <SignupStyle.FormTag>
          <SignupStyle.Tag>비밀번호</SignupStyle.Tag>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.Input
            id="pwd_val"
            type="password"
            name="is_Password"
            placeholder="영문, 숫자, 특수문자 포함 8~20자를 입력해주세요."
            autoComplete="off"
            value={password}
            onChange={onChangePwd}
          />
        </SignupStyle.FormInput>
        <SignupStyle.Alert className={isPwdValid ? 'success' : 'error'}>
          {pwdMsg}
        </SignupStyle.Alert>

        {/* 여기에 비밀번호 식별?해서 삼항연산자로 ?isNotFit === "확인되었습니다": "비밀번호는 영문, 숫자, 특수문자 포함 8~20자." */}

        <SignupStyle.FormTag>
          <SignupStyle.Tag>비밀번호 확인</SignupStyle.Tag>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.Input
            id="pwd_cnf_val"
            type="password"
            name="is_Password"
            placeholder="비밀번호를 다시 입력해주세요."
            autoComplete="off"
            value={confirmPwd}
            onChange={onChangeConfirmPwd}
          />
        </SignupStyle.FormInput>
        <SignupStyle.Alert className={isConfirmPwd ? 'success' : 'error'}>
          {confirmPwdMsg}
        </SignupStyle.Alert>
        {/* 여기에 비밀번호 식별?해서 위에 쓴 비밀번호랑 같은지 안 같은지 삼항연산자로 ?isNotFit === "확인되었습니다": "ehddl" */}
      </SignupStyle.Wrapper>
      <SignupStyle.Wrapper2>
        <SignupStyle.CheckWrapper>
          <SignupStyle.AllCheckLabel>
            <SignupStyle.CheckInput type="checkbox" id="allCheck" />
            <p>약관 전체 동의</p>
          </SignupStyle.AllCheckLabel>

          <SignupStyle.CheckBox>
            <SignupStyle.CheckLabel>
              <SignupStyle.CheckInput type="checkbox" id="ageCheck" />
              <p>(필수) 본인은 만 14세 이상입니다.</p>
            </SignupStyle.CheckLabel>

            <SignupStyle.CheckLabel>
              <SignupStyle.CheckInput type="checkbox" id="usingListCheck" />
              <p>(필수) 서비스 이용약관 동의</p>
            </SignupStyle.CheckLabel>

            <SignupStyle.CheckLabel>
              <SignupStyle.CheckInput type="checkbox" id="personalInfoCheck" />
              <p>(필수) 개인정보 수집 및 이용 동의</p>
            </SignupStyle.CheckLabel>

            <SignupStyle.CheckLabel>
              <SignupStyle.CheckInput type="checkbox" id="marketingInfoCheck" />
              <p>(선택) 광고성 정보 수신 동의</p>
            </SignupStyle.CheckLabel>
          </SignupStyle.CheckBox>
        </SignupStyle.CheckWrapper>
        <SignupStyle.SubmitButton type="submit">
          <SignupStyle.LinkButton to="/signupsuccess">
            가입하기
          </SignupStyle.LinkButton>
        </SignupStyle.SubmitButton>
      </SignupStyle.Wrapper2>
    </SignupStyle.Container>
  );
};
export default SignupComponent;
