import React from 'react';
import * as MyGroupsStyle from './MyGroups.styled';

function MyGroupsComponent() {
  return (
    <MyGroupsStyle.Container>
      <MyGroupsStyle.Title>내 모임</MyGroupsStyle.Title>
      <MyGroupsStyle.Wrapper>
        {/* 모임 1개짜리 컴포넌트 */}
      </MyGroupsStyle.Wrapper>
    </MyGroupsStyle.Container>
  );
}

export default MyGroupsComponent;