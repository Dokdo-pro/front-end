import React from 'react';


import * as MyGroupsStyle from './MyGroups.styled';

function MyGroupsComponent() {
  return (
    <MyGroupsStyle.Container>
      <MyGroupsStyle.Wrapper>
        {/* 모임 1개짜리 컴포넌트 */}
        <MyGroupsStyle.GroupBoardList>
          {Array(5)
            .fill('')
            .map((v, i) => (
              <MyGroupsStyle.Boardbox key={i}>
                <MyGroupsStyle.BoardImg>
                  <img src="" alt="모임 대표이미지" />
                </MyGroupsStyle.BoardImg>
                <MyGroupsStyle.Board>

                <MyGroupsStyle.TitleWrap>
                  <MyGroupsStyle.GroupTitle>모임 이름</MyGroupsStyle.GroupTitle>
                  <MyGroupsStyle.BoardLink to="">
                    모임 페이지로 이동하기
                  </MyGroupsStyle.BoardLink>
                </MyGroupsStyle.TitleWrap>

                <MyGroupsStyle.ContentWrap>
                  {Array(3)
                    .fill('')
                    .map((v, i) => (
                      <MyGroupsStyle.ContentBox key={i}>
                       
                          가나다라마바사아자차카ddsvsdvsdvvdvsvdsvsdvsdvsvsdvsdvsdvsdvdvdsv

                      </MyGroupsStyle.ContentBox>
                    ))}
                </MyGroupsStyle.ContentWrap>
                </MyGroupsStyle.Board>


              </MyGroupsStyle.Boardbox>
            ))}
        </MyGroupsStyle.GroupBoardList>
      </MyGroupsStyle.Wrapper>
    </MyGroupsStyle.Container>
  );
}

export default MyGroupsComponent;
