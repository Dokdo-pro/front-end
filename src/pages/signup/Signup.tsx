import React from 'react';
import {  } from 'react-router-dom';
import * as SignupStyle from './Signup.styled';

function SignupComponent() {

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
          />
        </SignupStyle.FormInput>

        <SignupStyle.Alert>중복된 이메일입니다.</SignupStyle.Alert>
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
          />
    
        </SignupStyle.FormInput>
        <SignupStyle.Alert>
          비밀번호는 영문, 숫자, 특수문자 포함 8~20자.
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
          />
        </SignupStyle.FormInput>
        <SignupStyle.Alert>
          비밀번호는 영문, 숫자, 특수문자 포함 8~20자.
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
        <SignupStyle.SubmitButton>
          <SignupStyle.LinkButton to="/signupsuccess">
            가입하기
          </SignupStyle.LinkButton>
        </SignupStyle.SubmitButton>
      </SignupStyle.Wrapper2>
    </SignupStyle.Container>
  );
}

export default SignupComponent;
