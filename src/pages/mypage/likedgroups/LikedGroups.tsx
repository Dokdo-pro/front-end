import React from 'react';
import * as LikedGroupsStyle from './LikedGroups.styled';

function LikedGroupsComponent() {

    return (
      <LikedGroupsStyle.Container>
        <LikedGroupsStyle.Title>내가 좋아요한 모임</LikedGroupsStyle.Title>
        <LikedGroupsStyle.Wrapper>
          {/* 좋아요한 모임 1개짜리 컴포넌트 */}
        </LikedGroupsStyle.Wrapper>
      </LikedGroupsStyle.Container>
    );
};

export default LikedGroupsComponent;