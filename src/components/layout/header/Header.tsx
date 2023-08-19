import React from 'react';
import * as HD from './Header.styled';
import { Link } from 'react-router-dom'; 
import searchIcon from '../../../assets/image/Search.png';
import notificationIcon from '../../../assets/image/Bell.png';

function Header() {
  return (
    <HD.StyleHeader>
      <HD.Up>
        <HD.Logo>독도 로고</HD.Logo>
        <HD.Nav>
          <Link to="/search">
            <img src={searchIcon} alt="돋보기 아이콘" />
          </Link>
          <Link to="/notifications">
            <img src={notificationIcon} alt="알림 아이콘" />
          </Link>
        </HD.Nav>
      </HD.Up>
      <HD.Down>
        <HD.StyledLink to="/">홈</HD.StyledLink>
        <HD.StyledLink to="/group">토론 모임</HD.StyledLink>
        <HD.StyledLink to="/">OX퀴즈/테스트</HD.StyledLink>
        <HD.StyledLink to="/freeboard/list">자유게시판</HD.StyledLink>
        <HD.StyledLink to="/contest">공모전</HD.StyledLink>
      </HD.Down>
    </HD.StyleHeader>
  );
}

export default Header;
