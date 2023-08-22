import React from 'react';
import {} from 'react-router-dom';
import * as MyPageStyle from './MyPage.styled';
import UserIcon from '../../../assets/img/userprofile.png';

function MyPageComponent() {
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
      <MyPageStyle.Logout>
        <MyPageStyle.LogoutLink to="/">로그아웃</MyPageStyle.LogoutLink>
      </MyPageStyle.Logout>
    </MyPageStyle.Container>
  );
}

export default MyPageComponent;
