import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as SignupStyle from './Signup.styled';

function SignupComponent() {
  const navigate = useNavigate();

  return (
    <SignupStyle.Container>
      <SignupStyle.TitleWrap>
        <SignupStyle.Title>회원 가입</SignupStyle.Title>
        <SignupStyle.Description>
          회원이 되어 독서 토론 모임에 참여하세요!
        </SignupStyle.Description>
      </SignupStyle.TitleWrap>
      <SignupStyle.Wrapper>
        <SignupStyle.FormTag>
          <SignupStyle.Tag>이메일</SignupStyle.Tag>
          <SignupStyle.TagPlus>*(필수)</SignupStyle.TagPlus>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.EmailInput
            id="email_val"
            type="text"
            name="is_Useremail"
            placeholder="이메일을 입력해주세요."
          />
          <SignupStyle.Egoll>@</SignupStyle.Egoll>
          <SignupStyle.EmailSelect
            id="email2_val"
            name="is_Useremail2"
            className="select_ty1"
          >
            <option value="">선택하세요</option>
            <option value="naver.com">naver.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="nate.com">nate.com</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="yahoo.co.kr">yahoo.co.kr</option>
            <option value="yahoo.com">yahoo.com</option>
          </SignupStyle.EmailSelect>

          <SignupStyle.DupleButton id="email_check" name="is_NotDuple">
            중복 확인
          </SignupStyle.DupleButton>
        </SignupStyle.FormInput>
        <SignupStyle.FormTag>
          <SignupStyle.Tag>비밀번호</SignupStyle.Tag>
          <SignupStyle.TagPlus>*(필수)</SignupStyle.TagPlus>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.Input
            id="pwd_val"
            type="password"
            name="is_Password"
            placeholder="비밀번호를 입력해주세요."
          />
        </SignupStyle.FormInput>

        <SignupStyle.FormTag>
          <SignupStyle.Tag>비밀번호 확인</SignupStyle.Tag>
          <SignupStyle.TagPlus>*(필수)</SignupStyle.TagPlus>
        </SignupStyle.FormTag>
        <SignupStyle.FormInput>
          <SignupStyle.Input
            id="pwd_cnf_val"
            type="password"
            name="is_Password"
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </SignupStyle.FormInput>
      </SignupStyle.Wrapper>

      <SignupStyle.Wrapper2>
        <SignupStyle.CheckWrapper>
          <SignupStyle.AllCheckLabel>
            <SignupStyle.CheckInput type="checkbox" id="allCheck" />
            <p>약관 전체 동의</p>
          </SignupStyle.AllCheckLabel>
          <div>
            <SignupStyle.CheckBox>
              <div>
                <SignupStyle.CheckLabel>
                  <SignupStyle.CheckInput type="checkbox" id="ageCheck" />
                  <p>(필수) 본인은 만 14세 이상입니다.</p>
                </SignupStyle.CheckLabel>
              </div>
              <div>
                <SignupStyle.CheckLabel>
                  <SignupStyle.CheckInput type="checkbox" id="usingListCheck" />
                  <p>(필수) 서비스 이용약관 동의</p>
                </SignupStyle.CheckLabel>
              </div>
              <div>
                <SignupStyle.CheckLabel>
                  <SignupStyle.CheckInput
                    type="checkbox"
                    id="personalInfoCheck"
                  />
                  <p>(필수) 개인정보 수집 및 이용 동의</p>
                </SignupStyle.CheckLabel>
              </div>
              <div>
                <SignupStyle.CheckLabel>
                  <SignupStyle.CheckInput
                    type="checkbox"
                    id="marketingInfoCheck"
                  />
                  <p>(선택) 광고성 정보 수신 동의</p>
                </SignupStyle.CheckLabel>
              </div>
            </SignupStyle.CheckBox>
          </div>
          <SignupStyle.SubmitButton>
            <SignupStyle.LinkButton to="/user/mypage">
              동의하고 가입하기
            </SignupStyle.LinkButton>
          </SignupStyle.SubmitButton>
          <SignupStyle.SubmitButton
            onClick={() => {
              navigate(-1);
            }}
          >
            취소하기
          </SignupStyle.SubmitButton>
        </SignupStyle.CheckWrapper>
      </SignupStyle.Wrapper2>
    </SignupStyle.Container>
  );
}

export default SignupComponent;
