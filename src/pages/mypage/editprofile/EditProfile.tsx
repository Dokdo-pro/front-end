import React, { useCallback, useEffect, useState } from 'react';
import * as EditStyle from './EditProfile.styled';
import UserIcon from '../../../assets/img/userprofile.png';
import { getCookie } from '../../../helper/Cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditProfileComponent() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('');

  // 데이터 API. fetchData할 때는 axios를 써야함
  // 유저 정보 가져오기 위한 값 타입 지정
  const [userData, setUserData] = useState<{
    name: any;
    email: string;
    profilePic: string;
    introduction: string;
    user_id: number;
  } | null>(null);

  const loginToken = getCookie('loginToken'); // getCookie 함수로 'loginToken' 쿠키 값을 가져옵니다.

  // 유효성 검사 비밀번호
  const validatePwd = (password: string) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  };

  // 유효성 검사 부분 함수명으로 줄임
  const isPwdValid = validatePwd(newPassword);
  const isConfirmPwd = newPassword === confirmPassword;

  const onChangePwd = useCallback((e: { target: { value: any } }) => {
    const currPwd = e.target.value;
    setNewPassword(currPwd);

    if (!validatePwd(currPwd)) {
      setPwdMsg('영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.');
    } else {
      setPwdMsg('안전한 비밀번호입니다.');
    }
  }, []);

  //비밀번호 일치 확인
  const onChangeConfirmPwd = useCallback(
    (e: { target: { value: any } }) => {
      const currConfirmPwd = e.target.value;
      setConfirmPassword(currConfirmPwd);

      if (currConfirmPwd !== newPassword) {
        setConfirmPwdMsg('비밀번호가 일치하지 않습니다.');
      } else {
        setConfirmPwdMsg('일치하는 비밀번호입니다.');
      }
    },
    [newPassword],
  );

  // logintoken 확인하고 유저 정보 가져옴
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data.getUser);
        } else {
          navigate('/signup');
        }
      })
      .catch(error => {
        console.error('유저 정보 가져오기 에러:', error);
        navigate('/');
      });
  }, [navigate, loginToken]);

  if (!userData) {
    // userData가 없으면 로딩 또는 에러 메시지 표시
    return <div>로딩 중...</div>;
  }

  // 저장하기 함수
  const onClickSubmit = () => {
    if (
      !(
        newPassword &&
        confirmPassword &&
        userData.name &&
        userData.introduction
      )
    ) {
      return alert('빈칸 없이 입력해주세요.');
    }
    if (newPassword !== confirmPassword) {
      return alert('패스워드가 일치하지 않습니다.');
    }

    const updatedUserData = {
      password: newPassword, // 변경할 패스워드
      name: userData.name, // 변경할 닉네임
      introduction: userData.introduction, // 변경할 한 줄 소개
    };

    axios
      .put('http://localhost:3001/api/v1/auth/me', updatedUserData, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          navigate('/user/mypage');
        } else {
          console.error('프로필 업데이트 실패:', response.data.error);
        }
      })
      .catch(error => {
        console.error('프로필 업데이트 에러:', error);
      });
  };

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
      <EditStyle.Wrapper2>
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
            value={userData.email}
          />
        </EditStyle.FormInput>
        <EditStyle.FormTag>
          <EditStyle.Tag>비밀번호</EditStyle.Tag>
          <EditStyle.TagPlus className={isPwdValid ? 'success' : 'error'}>
            {pwdMsg}
          </EditStyle.TagPlus>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="pwd_val"
            type="password"
            name="is_Password"
            minLength={8}
            maxLength={20}
            value={newPassword}
            onChange={onChangePwd}
            placeholder="사용하실 비밀번호를 입력해주세요."
          />
        </EditStyle.FormInput>
        <EditStyle.FormTag>
          <EditStyle.Tag>비밀번호 확인</EditStyle.Tag>
          <EditStyle.TagPlus className={isConfirmPwd ? 'success' : 'error'}>
            {confirmPwdMsg}
          </EditStyle.TagPlus>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="pwd_cnf_val"
            type="password"
            name="is_Password"
            minLength={8}
            maxLength={20}
            value={confirmPassword}
            onChange={onChangeConfirmPwd}
            placeholder="사용하실 비밀번호를 다시 입력해주세요."
          />
        </EditStyle.FormInput>

        {/* 닉네임 수정하고싶으면 일단 관리자한테 연락하라고 햇음 회의때 물어보기 */}
        <EditStyle.FormTag>
          <EditStyle.Tag>닉네임</EditStyle.Tag>
        </EditStyle.FormTag>
        <EditStyle.FormInput>
          <EditStyle.Input
            id="name_val"
            type="text"
            name="is_Username"
            minLength={2}
            maxLength={10}
            value={userData.name}
            onChange={e =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
          />
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
            maxLength={15}
            value={userData.introduction}
            onChange={e =>
              setUserData({
                ...userData,
                introduction: e.target.value,
              })
            }
            placeholder="15문자 이내로 입력해주세요."
          />
        </EditStyle.FormInput>
      </EditStyle.Wrapper2>

      <EditStyle.SubmitButton onClick={onClickSubmit}>
        저장하기
      </EditStyle.SubmitButton>
      <EditStyle.DeleteWrap>
        <EditStyle.DeleteAccount to="/user/deleteaccount">
          탈퇴하기
        </EditStyle.DeleteAccount>
      </EditStyle.DeleteWrap>
    </EditStyle.Container>
  );
}

export default EditProfileComponent;
