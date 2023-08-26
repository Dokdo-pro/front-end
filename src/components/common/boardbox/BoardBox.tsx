// BoardBox.tsx
import React from 'react';
import * as BB from './BoardBox.styled';
import BoardImgBox from './BoardImgBox';
import { useNavigate } from 'react-router-dom';

interface BoardData {
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

interface BoardBoxProps {
  data?: BoardData;
}

// 우측 이미지, div 3개 짜리 박스
function BoardBox({ data }: BoardBoxProps) {
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

  if (!data) {
    return null;
  }

  const { name, group_id, post_id, profile } = data;

  return (
    <BB.Border onClick={handleClick}>
      <BB.TextBox>
        <div>Name: {name}</div>
        <div>Group ID: {group_id}</div>
        <div>Post ID: {post_id}</div>
      </BB.TextBox>
      <BB.ImgBox>
        <BoardImgBox data={{ profile }} />
      </BB.ImgBox>
    </BB.Border>
  );
}

export default BoardBox;
