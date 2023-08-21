import React from 'react';
import * as MyPostsStyle from './MyPosts.styled';

function MyPostsComponent() {

    return (
      <MyPostsStyle.Container>
        <MyPostsStyle.Title>내가 쓴 글</MyPostsStyle.Title>
        <MyPostsStyle.Wrapper>
          {/* 글 1개짜리 컴포넌트 */}
        </MyPostsStyle.Wrapper>
      </MyPostsStyle.Container>
    );
};

export default MyPostsComponent;