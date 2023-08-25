import React from 'react';
import * as MyPageStyle from './MyPage.styled';
import UserIcon from '../../../assets/img/userprofile.png';
import { removeCookie } from '../../../helper/Cookie';
import { useNavigate } from 'react-router-dom';
import AxiosC from '../../../helper/AxiosC';

function MyPageComponent() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // 액세스 토큰 쿠키 삭제
    // 로그아웃 후 홈페이지 또는 다른 원하는 페이지로 리디렉션
    try {
      const response = await AxiosC.put(
        'http://localhost:3001/api/v1/auth/logout',
      );
      console.log(response);
      // 액세스 토큰 쿠키 삭제
      removeCookie('loginToken');
      alert('로그아웃에 성공하셨습니다.');
      navigate('/');
    } catch (e) {
      console.error('로그아웃 에러:', e);
      alert('서버 오류: 다시 시도해주세요.');
    }
  };

  return (
    <MyPageStyle.Container>
      <MyPageStyle.Wrapper>
        <MyPageStyle.UserIcon src={UserIcon} alt="유저 설정 이미지" />
        <MyPageStyle.Introduce>
          <MyPageStyle.NickName>닉네임</MyPageStyle.NickName>
          <MyPageStyle.SimpleIntro>
            안녕하세요 저는 에세이가 좋아요
          </MyPageStyle.SimpleIntro>
        </MyPageStyle.Introduce>
      </MyPageStyle.Wrapper>
      <MyPageStyle.Group>
        {' '}
        <MyPageStyle.ManageLink to="/user/mypage/mygroups">
          내 모임
        </MyPageStyle.ManageLink>
      </MyPageStyle.Group>

      <MyPageStyle.Group>
        <MyPageStyle.ManageLink to="/user/mypage/likedgroups">
          내가 좋아요한 모임
        </MyPageStyle.ManageLink>
      </MyPageStyle.Group>

      <MyPageStyle.ManageList>
        <MyPageStyle.ManageTitle>나의 관리 목록</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageLink to="/user/mypage/myposts">
          나의 글 목록
        </MyPageStyle.ManageLink>
        <MyPageStyle.ManageLink to="/user/mypage/editprofile">
          나의 정보 수정
        </MyPageStyle.ManageLink>
      </MyPageStyle.ManageList>
      <MyPageStyle.ManageList>
        <MyPageStyle.ManageTitle>고객센터</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageLink to="/user/mypage/inquiry">
          문의하기
        </MyPageStyle.ManageLink>
      </MyPageStyle.ManageList>
      <MyPageStyle.Logout onClick={handleLogout}>로그아웃</MyPageStyle.Logout>
    </MyPageStyle.Container>
  );
}

export default MyPageComponent;
