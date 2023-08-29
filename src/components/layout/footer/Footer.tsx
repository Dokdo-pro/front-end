import React from 'react';
import * as FT from './Footer.styled';
import homeIcon from '../../../assets/icon/Home.png';
import groupIcon from '../../../assets/icon/Person.png';
import boardIcon from '../../../assets/icon/Plus.png';
import likeIcon from '../../../assets/icon/Favorite.png';
import userIcon from '../../../assets/icon/User.png';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

function Footer() {
  const isLoggedIn = cookies.get('loginToken');
  
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
        <FT.StyledLink to="/create-group/step1">
          <img src={boardIcon} alt="자유 게시판 아이콘" />
          <div>모임 등록</div>
        </FT.StyledLink>
        <FT.StyledLink to="/likes">
          <img src={likeIcon} alt="좋아요 아이콘" />
          <div>좋아요</div>
        </FT.StyledLink>

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
