import React, { useState, useCallback, useEffect } from 'react';
import AxiosC from '@/helper/AxiosC';
import { useNavigate } from 'react-router-dom';
import * as SignupStyle from '@/pages/signup/Signup.styled';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('');

  const navigate = useNavigate();

  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [personCheck, setPersonCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

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
        setConfirmPwdMsg('일치하는 비밀번호입니다.');
      }
    },
    [password],
  );
  // 약관 동의
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setPersonCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setPersonCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const personBtnEvent = () => {
    if (personCheck === false) {
      setPersonCheck(true);
    } else {
      setPersonCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (
      ageCheck === true &&
      useCheck === true &&
      personCheck === true &&
      marketingCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, personCheck, marketingCheck]);

  // 리로드 방지, 입력안한 칸 있으면 alert
  const onSubmitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (
        !(
          emailMsg === '올바른 이메일 형식입니다.' &&
          pwdMsg === '안전한 비밀번호입니다.' &&
          confirmPwdMsg === '일치하는 비밀번호입니다.'
        )
      ) {
        return alert('유효한 아이디와 비밀번호를 입력해주세요.');
      }
      if (!(email && password && confirmPwd)) {
        return alert('빈칸 없이 입력해주세요.');
      }

      if (!(ageCheck && useCheck && personCheck)) {
        return alert('필수 약관을 모두 동의해주셔야 가입이 진행됩니다.');
      }

      // 위까지 응답 성공시 밑으로
      const response = await AxiosC.post(
        'http://localhost:3000/api/v1/auth/register',
        {
          email,
          password,
        },
      );
      console.log(response);
      navigate('/signupsuccess');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SignupStyle.Container>
      <SignupStyle.TitleWrap>
        <SignupStyle.Title>지금 가입하면</SignupStyle.Title>
        <SignupStyle.Description>
          바로 사용할 수 있는 도서상품권 증정!
        </SignupStyle.Description>
      </SignupStyle.TitleWrap>
      <SignupStyle.Wrapper>
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
            // minLength 나중에 2에서 8로 바꾸기
            minLength={10}
            placeholder="영문, 숫자, 특수문자 포함 10자 이상을 입력해주세요."
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
            // minLength 나중에 2에서 8로 바꾸기
            minLength={10}
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
            <SignupStyle.CheckInput
              type="checkbox"
              id="allCheck"
              onChange={allBtnEvent}
              checked={allCheck}
            />
            <p>약관 전체 동의</p>
          </SignupStyle.AllCheckLabel>

          <SignupStyle.CheckBox>
            <SignupStyle.CheckLabel>
              <SignupStyle.CheckInput
                type="checkbox"
                id="ageCheck"
                onChange={ageBtnEvent}
                checked={ageCheck}
              />
              <p>(필수) 본인은 만 14세 이상입니다.</p>
            </SignupStyle.CheckLabel>

            <SignupStyle.CheckLabel>
              <SignupStyle.CheckInput
                type="checkbox"
                id="usingListCheck"
                onChange={useBtnEvent}
                checked={useCheck}
              />
              <p>(필수) 서비스 이용약관 동의</p>
            </SignupStyle.CheckLabel>

            <SignupStyle.CheckLabel>
              <SignupStyle.CheckInput
                type="checkbox"
                id="personalInfoCheck"
                onChange={personBtnEvent}
                checked={personCheck}
              />
              <p>(필수) 개인정보 수집 및 이용 동의</p>
            </SignupStyle.CheckLabel>

            <SignupStyle.CheckLabel>
              <SignupStyle.CheckInput
                type="checkbox"
                id="marketingInfoCheck"
                onChange={marketingBtnEvent}
                checked={marketingCheck}
              />
              <p>(선택) 광고성 정보 수신 동의</p>
            </SignupStyle.CheckLabel>
          </SignupStyle.CheckBox>
        </SignupStyle.CheckWrapper>
        <SignupStyle.SubmitButton type="submit" onClick={onSubmitHandler}>
          {' '}
          가입하기
        </SignupStyle.SubmitButton>
      </SignupStyle.Wrapper2>
    </SignupStyle.Container>
  );
};
export default SignupComponent;
