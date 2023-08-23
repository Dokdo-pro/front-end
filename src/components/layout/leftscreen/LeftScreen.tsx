import React from 'react';
import * as LS from './LeftScreen.styled';
import searchIcon from '../../../assets/icon/LeftSearch.png';
import Logo from '../../../assets/icon/LeftLogo.png';

function LeftScreen() {
  return (
    <LS.StyledLeftScreen>
      <LS.Wrapper>
        <LS.Logo>
          <img src={Logo} alt="독도 로고" />
        </LS.Logo>
        <LS.Info>문해력 향상을 위한 독서 모임!</LS.Info>
        <LS.InputWrapper>
          <LS.Input type="text" placeholder="검색어를 입력하세요" />
          <LS.Button>
            <LS.Icon src={searchIcon} alt="돋보기 아이콘" />
          </LS.Button>
        </LS.InputWrapper>
        <LS.Tag>
          <li>책 추천</li>
          <li>토론 모임</li>
          <li>공모전</li>
          <li>이 달의 모임</li>
          <li>문해력테스트</li>
        </LS.Tag>
      </LS.Wrapper>
    </LS.StyledLeftScreen>
  );
}

export default LeftScreen;
