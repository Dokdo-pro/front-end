import React from 'react';
import * as MB from '@/components/common/boardbox/MiddleBoardBox.styled';
import BoardImgBox from '@/components/common/boardbox/BoardImgBox';
import { useNavigate } from 'react-router-dom';
import defaultImage from '@/assets/img/Logo1.png';

export interface MiddleBoardData {
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
  like: number;
  location: string;
  day: string;
  genre: string;
  age: number;
  tags: object;
  introduction: string;
}

interface MiddleBoardBoxProps {
  data?: MiddleBoardData;
}

function MiddleBoardBox({ data }: MiddleBoardBoxProps) {
  const navigate = useNavigate();

  // 모임 상세 페이지 URL을 생성하는 함수
  const generateGroupDetailURL = (sequence: string): string => {
    return `/group/${sequence}/detail`;
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

  const { name, introduction } = data;
  const imageSource = data.profile || defaultImage;

  return (
    <MB.Container onClick={handleClick}>
      <MB.Border>
        <MB.TextImgBox>
          <MB.ImgBox>
            <BoardImgBox data={{ profile: imageSource }} />
          </MB.ImgBox>
          <MB.TextBox>
            <div>
            <MB.GroupName>{name}</MB.GroupName>
            </div>
            <div>
            <MB.GroupIntro>"{introduction}"</MB.GroupIntro>
            </div>
          </MB.TextBox>
        </MB.TextImgBox>
      </MB.Border>
    </MB.Container>
  );
}

export default MiddleBoardBox;
