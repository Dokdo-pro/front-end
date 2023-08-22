import React from 'react';
import * as MyPostsStyle from './MyPosts.styled';

function MyPostsComponent() {

    return (
      <MyPostsStyle.Container>
        <MyPostsStyle.Title>내가 쓴 글</MyPostsStyle.Title>
        <MyPostsStyle.Wrapper>
          {/* 글 1개짜리 컴포넌트 */}
            <MyPostsStyle.GroupBoardList>
              {Array(5)
                .fill('')
                .map((v, i) => (
                  <MyPostsStyle.Boardbox key={i}>
                    <MyPostsStyle.BoardLeft>
                      <MyPostsStyle.BoardTitle>게시글 제목</MyPostsStyle.BoardTitle>
                      <MyPostsStyle.BoardContent>
                        가나다라마바사아자차카타파하아야어여오요우유으이abcdefghigklnmopqrxtuvwxyz
                      </MyPostsStyle.BoardContent>
                    </MyPostsStyle.BoardLeft>
                    <MyPostsStyle.BoardImg>
                      <img src="" alt="게시된 이미지" />
                    </MyPostsStyle.BoardImg>
                  </MyPostsStyle.Boardbox>
                ))}
            </MyPostsStyle.GroupBoardList>

        </MyPostsStyle.Wrapper>
      </MyPostsStyle.Container>
    );
};

export default MyPostsComponent;