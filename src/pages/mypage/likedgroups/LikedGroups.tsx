import React from 'react';
import * as LikedGroupsStyle from './LikedGroups.styled';

function LikedGroupsComponent() {
  return (
    <LikedGroupsStyle.Container>
      <LikedGroupsStyle.Title>다양한 독서모임에서</LikedGroupsStyle.Title>
      <LikedGroupsStyle.Title>
        {' '}
        ()님이 참석하길 기다려요!
      </LikedGroupsStyle.Title>
      <LikedGroupsStyle.Wrapper>
        {/* 좋아요한 모임 1개짜리 컴포넌트 */}
        <LikedGroupsStyle.GroupBoardList>
          {Array(5)
            .fill('')
            .map((v, i) => (
              <LikedGroupsStyle.Boardbox key={i}>
                <LikedGroupsStyle.BoardLeft>
                  <LikedGroupsStyle.Tag>추리소설</LikedGroupsStyle.Tag>
                  <LikedGroupsStyle.Tag>히가시노 게이고</LikedGroupsStyle.Tag>

                  <LikedGroupsStyle.GroupName>
                    모임명
                  </LikedGroupsStyle.GroupName>
                  <LikedGroupsStyle.GroupDes>
                    <LikedGroupsStyle.GroupLocation>
                      모임지역
                    </LikedGroupsStyle.GroupLocation>
                    <LikedGroupsStyle.GroupPeopleNum>
                      모임원 수
                    </LikedGroupsStyle.GroupPeopleNum>
                  </LikedGroupsStyle.GroupDes>
                </LikedGroupsStyle.BoardLeft>
                <LikedGroupsStyle.BoardImg>
                  <img src="" alt="게시된 이미지" />
                </LikedGroupsStyle.BoardImg>
              </LikedGroupsStyle.Boardbox>
            ))}
        </LikedGroupsStyle.GroupBoardList>
      </LikedGroupsStyle.Wrapper>
    </LikedGroupsStyle.Container>
  );
}

export default LikedGroupsComponent;
