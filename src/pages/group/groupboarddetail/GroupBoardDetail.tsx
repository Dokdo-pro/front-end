import React from 'react';
import * as GBD from './GroupBoaderDetail.styled';
import Slider from '../../../components/common/slider/Slider';

interface GroupBoardDetailData {
  _id: string;
  content: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  post_id: number;
  __v: number;
}
interface GroupBoardDetailDataProps {
  data?: GroupBoardDetailData;
}

const GroupBoardDetail = ({ data }: GroupBoardDetailDataProps) => {
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
            <GBD.EditButton>●●●</GBD.EditButton>
          </GBD.DescDisplay>
        </GBD.Desc>
      </GBD.User>
      <GBD.UserWriteBox>
        <div>
          사진이 있으면 이미지 슬라이드 개수에 맞게 (최대3장) 사진이 있으면
          이미지 슬라이드 개수에 맞게 (최대3장) 사진이 있으면 이미지 슬라이드
          개수에 맞게 (최대3장) 사진이 있으면 이미지 슬라이드 개수에 맞게
          (최대3장)
          <Slider />
        </div>
      </GBD.UserWriteBox>
      <GBD.Button>
        <button>(아이콘)좋아요 숫자</button>
        <button>(아이콘)공유하기</button>
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
                    대댓글 기능 대댓글 기능 대댓글 기능 대댓글 기능 대댓글 기능
                  </div>
                  <div>시간 답글달기 삭제하기 등</div>
                </GBD.UserReply>
              </GBD.UserCommentBox>
            ))}
        </li>
      </GBD.Comment>
    </GBD.Wrapper>
  );
};

export default GroupBoardDetail;
