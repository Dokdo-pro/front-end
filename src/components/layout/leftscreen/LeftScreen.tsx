import React from 'react';
import * as LS from './LeftScreen.styled';


function LeftScreen() {
  return (
    <LS.StyledLeftScreen>
      <LS.Wrapper>
        <LS.Logo>독도 로고</LS.Logo>
        <LS.Info>문해력 향상을 위한 독서 모임!</LS.Info>
        <div style={{ position: 'relative' }}>
          <LS.Input type="text" placeholder="토론 모임을 검색해보세요" />
          <LS.Button>icon</LS.Button>
        </div>

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

