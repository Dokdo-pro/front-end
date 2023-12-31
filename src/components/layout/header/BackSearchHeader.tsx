import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import searchIcon from '@/assets/icon/Search.png';
import notificationIcon from '@/assets/icon/Bell.png';
import Logo from '@/assets/img/Logo2.png';

function BackSearchHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Display>
        <BackBtn>
          <button onClick={goBack}>←</button>
        </BackBtn>
        <Link to="/">
        <TopLogo>
          <img src={Logo} alt="독도로고" />
        </TopLogo>
        </Link>
        <Nav>
          <Link to="/search">
            <StlyedImg src={searchIcon} alt="돋보기 아이콘" />
          </Link>
        </Nav>
      </Display>
    </Wrapper>
  );
}

export default BackSearchHeader;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 472px;
  position: fixed;
  z-index: 9999;
  border-bottom: 0.5px solid #d7d7d7;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 0 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BackBtn = styled.div`
  & button {
    border: none;
    background-color: transparent;
    font-size: 25px;
    cursor: pointer;
  }
`;

const StlyedImg = styled.img`
  width: 27px;
  height: 27px;
`;

const TopLogo = styled.div`
  width: 55px;
  height: 27px;

  & img {
    height: 100%;
  }
`;
