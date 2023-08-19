import React from 'react';
import * as FT from './Footer.styled'; 
import homeIcon from '../../../assets/image/Home.png';
import groupIcon from '../../../assets/image/Group.png';
import boardIcon from '../../../assets/image/Note.png';
import likeIcon from '../../../assets/image/Favorite.png';
import userIcon from '../../../assets/image/Person.png';

function Footer() {
  return (
    <FT.StyledFooter>
      <FT.MenuItem>
        <FT.StyledLink to="/">
          <img src={homeIcon} alt="홈 아이콘" />
          <div>홈</div>
        </FT.StyledLink>
        <FT.StyledLink to="/mygroups">
          <img src={groupIcon} alt="내 모임 아이콘" />
          <div>내 모임보기</div>
        </FT.StyledLink>
        <FT.StyledLink to="/freeboard/list">
          <img src={boardIcon} alt="자유 게시판 아이콘" />
          <div>자유 게시판</div>
        </FT.StyledLink>
        <FT.StyledLink to="/likes">
          <img src={likeIcon} alt="좋아요 아이콘" />
          <div>좋아요</div>
        </FT.StyledLink>
        <FT.StyledLink to="/login">
          <img src={userIcon} alt="로그인/가입 아이콘" />
          <div>로그인/가입</div>
        </FT.StyledLink>
      </FT.MenuItem>
    </FT.StyledFooter>
  );
}

export default Footer;
