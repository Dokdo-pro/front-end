import React from 'react';
import * as EditStyle from './EditProfile.styled';
import UserIcon from '../../../assets/img/userprofile.png';

// id나 type같은 값들은 수정해야됨

function EditProfileComponent() {
  return (
    <EditStyle.Container>
      <EditStyle.Wrapper>
        <EditStyle.UserIcon src={UserIcon} alt="유저 설정 이미지" />
        <EditStyle.IconDes>
          5mb 이하의 크기로 파일을 첨부해주세요.
        </EditStyle.IconDes>
        <EditStyle.IconDes>
          pdf, jpeg 파일만 업로드가 가능합니다.
        </EditStyle.IconDes>
      </EditStyle.Wrapper>
      <EditStyle.Wrapper>
        <EditStyle.FormTag>
          <EditStyle.Tag>이메일</EditStyle.Tag>
          <EditStyle.TagPlus>
            *변경을 원하시면 문의하기를 이용해주세요.
          </EditStyle.TagPlus>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Email
            readOnly
            id="email_val"
            type="text"
            name="is_Useremail"
          />
        </EditStyle.FormInput>
        <EditStyle.FormTag>
          <EditStyle.Tag>비밀번호</EditStyle.Tag>
          <EditStyle.TagPlus>*(필수)</EditStyle.TagPlus>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="pwd_val"
            type="password"
            name="is_Password"
            placeholder="사용하실 비밀번호를 입력해주세요."
          />
        </EditStyle.FormInput>
        <EditStyle.Alert>
          비밀번호는 영문, 숫자, 특수문자 포함 8~20자.
        </EditStyle.Alert>
        <EditStyle.FormTag>
          <EditStyle.Tag>비밀번호 확인</EditStyle.Tag>
          <EditStyle.TagPlus>*(필수)</EditStyle.TagPlus>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="pwd_cnf_val"
            type="password"
            name="is_Password"
            placeholder="사용하실 비밀번호를 다시 입력해주세요."
          />
        </EditStyle.FormInput>
        <EditStyle.Alert>
          비밀번호는 영문, 숫자, 특수문자 포함 8~20자.
        </EditStyle.Alert>

        {/* 닉네임 수정하고싶으면 일단 관리자한테 연락하라고 햇음 회의때 물어보기 */}
        <EditStyle.FormTag>
          <EditStyle.Tag>닉네임</EditStyle.Tag>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input id="name_val" type="text" name="is_Username" />
        </EditStyle.FormInput>

        {/* 한줄 소개 띄우는 곳이 없는데 이거 어디에 띄워지는 건지?? 만약 띄운다면 마이페이지의 닉네임 하단과 모임가입 신청할 때 개인의 프로필도 같이 보내지는 건지?? 회의때 물어보기 */}
        <EditStyle.FormTag>
          <EditStyle.Tag>한 줄 소개</EditStyle.Tag>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="introduce_val"
            type="text"
            name="is_Introduce"
            placeholder="10문자 이상 입력해주세요."
          />
        </EditStyle.FormInput>
      </EditStyle.Wrapper>
      {/* 나중에 Link to="" 지우고 navigate로 이동? */}
      <EditStyle.SubmitButton>
        <EditStyle.SubmitLink to="/user/mypage">저장하기</EditStyle.SubmitLink>
      </EditStyle.SubmitButton>
<EditStyle.DeleteWrap>
      <EditStyle.DeleteAccount to="/user/deleteaccount">
        탈퇴하기
      </EditStyle.DeleteAccount></EditStyle.DeleteWrap>
    </EditStyle.Container>
  );
}

export default EditProfileComponent;
