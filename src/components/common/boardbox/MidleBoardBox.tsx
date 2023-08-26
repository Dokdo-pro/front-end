import React from 'react';
import * as MB from './MidleBoardBox.styled';
import BoardImgBox from './BoardImgBox';
import { useNavigate } from 'react-router-dom';

interface MidleBoardData {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profile: string;
  name: string;
  isRecruit: boolean;
  maxMember: number;
  meeting: number;
  leader: number;
}

interface MidleBoardBoxProps {
  data?: MidleBoardData;
}

function MidleBoardBox({ data }: MidleBoardBoxProps) {
  const navigate = useNavigate();

  // 모임 상세 페이지 URL을 생성하는 함수
  const generateGroupDetailURL = (sequence: string): string => {
    return `/group/detail/${sequence}`;
  };

  // 보드박스 클릭 시 모임 상세 페이지로 이동
  const handleClick = () => {
    if (data) {
      const groupDetailURL = generateGroupDetailURL(data.group_id.toString());
      navigate(groupDetailURL);
    }
  };

  return (
    <MB.Container onClick={handleClick}>
      {data && (
        <MB.Border>
          <MB.TextBox>
            <MB.ImgBox>
              <BoardImgBox data={{ profile: data.profile }} />
            </MB.ImgBox>
            <div>모임명: {data.name}</div>
            <div>모임소개: {data.meeting}</div>
          </MB.TextBox>
        </MB.Border>
      )}
    </MB.Container>
  );
}

export default MidleBoardBox;
