import React from 'react';
import * as FT from '@/components/layout/footer/Footer.styled';
import homeIcon from '@/assets/icon/Home.png';
import groupIcon from '@/assets/icon/Person.png';
import boardIcon from '@/assets/icon/Plus.png';
import likeIcon from '@/assets/icon/Favorite.png';
import userIcon from '@/assets/icon/User.png';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

function Footer() {
  const isLoggedIn = cookies.get('loginToken');
  const navigate = useNavigate();

  const handleCreateGroupClick = (e:any) => {
    if (!isLoggedIn) {
      e.preventDefault();  // 기본 클릭 동작 방지
  
      const isConfirmed = window.confirm('로그인 후에 모임을 등록할 수 있습니다. 이동하시겠습니까?');
      if (isConfirmed) {
        navigate("/login");
      }
    }
  };
  
  const handleLikesClick = (e:any) => {
    if (!isLoggedIn) {
      e.preventDefault();  // 기본 클릭 동작 방지
  
      const isConfirmed = window.confirm('로그인 후에 좋아요한 페이지를 이용해 주세요. 이동하시겠습니까?');
      if (isConfirmed) {
        navigate("/login");
      }
    }
  };
  

  



  return (
    <FT.StyledFooter>
      <FT.MenuItem>
        <FT.StyledLink to="/">
          <img src={homeIcon} alt="홈 아이콘" />
          <div>홈</div>
        </FT.StyledLink>
        <FT.StyledLink to="/group/list">
          <img src={groupIcon} alt="내 모임 아이콘" />
          <div>둘러보기</div>
        </FT.StyledLink>

        <FT.StyledLink to="/create-group/step1" onClick={handleCreateGroupClick}>
          <img src={boardIcon} alt="자유 게시판 아이콘" />
          <div>모임 등록</div>
        </FT.StyledLink>

        <FT.StyledLink to="/user/mypage/mygroups" onClick={handleLikesClick}>
          <img src={likeIcon} alt="좋아요 아이콘" />
          <div>내 모임</div>
        </FT.StyledLink>

        {/* 마이페이지 또는 로그인/가입 링크 표시 */}
        {isLoggedIn ? (
          <FT.StyledLink to="/user/mypage">
            <img src={userIcon} alt="마이페이지 아이콘" />
            <div>마이페이지</div>
          </FT.StyledLink>
        ) : (
          <FT.StyledLink to="/login">
            <img src={userIcon} alt="로그인/가입 아이콘" />
            <div>로그인/가입</div>
          </FT.StyledLink>
        )}
      </FT.MenuItem>
    </FT.StyledFooter>
  );
}

export default Footer;
