import React from 'react';
import * as GBD from './GroupBoaderDetail.styled';

const GroupBoardDetail = () => {
  return (
    <GBD.Wrapper>
      <GBD.User>
        <GBD.ProfileImg>
          <img src="" alt="이미지" />
        </GBD.ProfileImg>
        <GBD.Desc>
          <GBD.DescDisplay>
            <div>
            <div>최형욱</div>
            <div>글쓴 시간</div>
            </div>
          <div>수정아이콘</div>
          </GBD.DescDisplay>

        </GBD.Desc>
      </GBD.User>
      <GBD.UserWriteBox>
        <div>
          게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용게시글
          내용게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용게시글
          내용게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용게시글
          내용게시글 내용게시글 내용게시글 내용
        </div>
      </GBD.UserWriteBox>
      <GBD.Button>
        <button>좋아요버튼</button>
        <button>댓글 달기</button>
      </GBD.Button>
      <GBD.Comment>
        <li>
          {Array(3)
            .fill('')
            .map((v, i) => (
              <GBD.UserCommentBox key={i}>
                <GBD.CommentProfileImg>
                  <img src="" alt="프로필" />
                </GBD.CommentProfileImg>
                <GBD.UserReply>
                  <div>최형욱</div>
                  <div>
                    오 좋은 글입니다. 이러쿠저러쿠이러주저러쿠그러쿠알았쿠
                  </div>
                </GBD.UserReply>
              </GBD.UserCommentBox>
            ))}
        </li>
      </GBD.Comment>
    </GBD.Wrapper>
  );
};

export default GroupBoardDetail;
