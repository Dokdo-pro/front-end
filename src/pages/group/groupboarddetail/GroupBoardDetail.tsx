import React, { useState } from 'react';
import { getCookie } from '../../../helper/Cookie';
import axios from 'axios';
import * as GBD from './GroupBoaderDetail.styled';
import Slider from '../../../components/common/slider/Slider';

const loginToken = getCookie('loginToken'); // getCookie 함수는 쿠키를 읽어오는 함수로 적절한 코드로 대체해야 합니다.

if (loginToken) {
  // 로그인 토큰이 존재하면 API 요청 시 헤더에 추가
  axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
}

interface GroupBoardDetailData {
  comment_id: number;
  postCommentToPost: {
    comment_id: number;
    post_id: number;
    user_id: number;
    _id: string;
    group_id: number;
  };
  text: string; // 추가: 댓글 텍스트를 저장하는 속성
}

interface GroupBoardDetailDataProps {
  data?: GroupBoardDetailData;
}

const GroupBoardDetail = ({ data }: GroupBoardDetailDataProps) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Array<GroupBoardDetailData>>([]);

  // group_id와 post_id를 가져옴
  const group_id = data?.postCommentToPost?.post_id ?? '';
  const post_id = data?.postCommentToPost?.comment_id ?? '';

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/group/${group_id}/posts/${post_id}/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: commentText, // 댓글 텍스트를 API 요청에 추가
          }),
        },
      );

      if (response.ok) {
        const responseData = await response.json();
        setComments([...comments, responseData.data]);
        setCommentText('');
      } else {
        console.error('댓글 작성 실패');
      }
    } catch (error) {
      console.error('댓글 작성 오류:', error);
    }
  };
  return (
    <GBD.Wrapper>

      <GBD.GroupBoardTitle>
        <div>모임 이름</div>
      </GBD.GroupBoardTitle>
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
            <GBD.EditButton>●●●</GBD.EditButton>
          </GBD.DescDisplay>
        </GBD.Desc>
      </GBD.User>
      <GBD.UserWriteBox>
        <div>
          <Slider />
        </div>
      </GBD.UserWriteBox>
      <GBD.Button>
        <button>❤️ 좋아요 숫자</button>
        <button> 공유하기</button>
      </GBD.Button>
      <GBD.Comment>
        <li>
          <GBD.CommentTitle> 댓글 5(개수)</GBD.CommentTitle>
          {Array(2)
            .fill('')
            .map((v, i) => (
              <GBD.UserCommentBox key={i}>
                <GBD.CommentProfileImg>
                  <img src="" alt="프로필" />
                </GBD.CommentProfileImg>
                <GBD.UserReply>
                  <div>최형욱</div>
                  <div>
                    대댓글 기능 대댓글 기능 대댓글 기능 대댓글 기능 대댓글 기능
                  </div>
                  <div>시간 답글달기 삭제하기 등</div>
                </GBD.UserReply>
              </GBD.UserCommentBox>
            ))}
        </li>
      </GBD.Comment>
      <GBD.CIWrapper>
        <GBD.CIDisplay>
          <GBD.CIInput>
            <input type="text" placeholder="댓글을 입력하세요." />
          </GBD.CIInput>
          <GBD.CIButton>
            <button onClick={handleCommentSubmit}>등록</button>
          </GBD.CIButton>
        </GBD.CIDisplay>
      </GBD.CIWrapper>
    </GBD.Wrapper>
  );
};

export default GroupBoardDetail;
