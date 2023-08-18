import React from 'react';
import {} from 'react-router-dom';
import * as J from './Join.styled';

function JoinComponent() {
  return (
    <J.Container>
      <J.TitleWrap>
        <J.Title>회원 가입</J.Title>
        <J.Description>회원이 되어 독서 토론 모임에 참여하세요!</J.Description>
      </J.TitleWrap>
      <J.Wrapper>
        <J.FormTag>
          <J.Tag>이메일</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.FormInput>
          <J.EmailInput
            id="email_val"
            type="text"
            name="is_Useremail"
            placeholder="이메일을 입력해주세요."
          />
          <J.Egoll>@</J.Egoll>
          <J.EmailSelect
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
          </J.EmailSelect>

          <J.DupleButton id="email_check" name="is_NotDuple">
            중복 확인
          </J.DupleButton>
        </J.FormInput>
        <J.FormTag>
          <J.Tag>비밀번호</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.FormInput>
          <J.Input
            id="pwd_val"
            type="password"
            name="is_Password"
            placeholder="비밀번호를 입력해주세요."
          />
        </J.FormInput>

        <J.FormTag>
          <J.Tag>비밀번호 확인</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.FormInput>
          <J.Input
            id="pwd_cnf_val"
            type="password"
            name="is_Password"
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </J.FormInput>

        <J.FormTag>
          <J.Tag>닉네임</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.FormInput>
          <J.Input
            id="name_val"
            type="text"
            name="is_Username"
            placeholder="사용하실 닉네임을 입력해주세요."
          />
        </J.FormInput>

        <J.FormTag>
          <J.Tag>한 줄 소개</J.Tag>
        </J.FormTag>
        <J.FormInput>
          <J.Input
            id="introduce_val"
            type="text"
            name="is_Introduce"
            placeholder="10문자 이상 입력해주세요."
          />
        </J.FormInput>

        <J.FormTag>
          <J.Tag>전화번호</J.Tag>
          <J.TagPlus>*(필수)</J.TagPlus>
        </J.FormTag>
        <J.FormInput>
          <J.Input
            id="phone1_val"
            type="text"
            name="is_Userphone1"
            placeholder='휴대폰 번호 입력("-" 제외 11자리 숫자 입력)'
          />
        </J.FormInput>

        <J.FormTag>
          <J.Tag>성별 (선택)</J.Tag>
        </J.FormTag>
        <J.FormInput>
          <J.GenderButton name="is_Gender" id="gender">
            남성
          </J.GenderButton>
          <J.GenderButton name="is_Gender" id="gender">
            여성
          </J.GenderButton>
        </J.FormInput>
      </J.Wrapper>

      <J.Wrapper2>
        <J.CheckWrapper>
          <J.AllCheckLabel>
            <J.CheckInput type="checkbox" id="allCheck" />
            <p>약관 전체 동의</p>
          </J.AllCheckLabel>
          <div>
            <J.CheckBox>
              <div>
                <J.CheckLabel>
                  <J.CheckInput type="checkbox" id="ageCheck" />
                  <p>(필수) 본인은 만 14세 이상입니다.</p>
                </J.CheckLabel>
              </div>
              <div>
                <J.CheckLabel>
                  <J.CheckInput type="checkbox" id="usingListCheck" />
                  <p>(필수) 서비스 이용약관 동의</p>
                </J.CheckLabel>
              </div>
              <div>
                <J.CheckLabel>
                  <J.CheckInput type="checkbox" id="personalInfoCheck" />
                  <p>(필수) 개인정보 수집 및 이용 동의</p>
                </J.CheckLabel>
              </div>
              <div>
                <J.CheckLabel>
                  <J.CheckInput type="checkbox" id="marketingInfoCheck" />
                  <p>(선택) 광고성 정보 수신 동의</p>
                </J.CheckLabel>
              </div>
            </J.CheckBox>
          </div>
          <J.SubmitButton>
            동의하고 가입하기
          </J.SubmitButton>
        </J.CheckWrapper>
      </J.Wrapper2>
    </J.Container>
  );
}

export default JoinComponent;
