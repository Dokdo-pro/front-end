import React, { useState, useEffect } from 'react';
import * as GB from './GorupBoard.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '../../../components/layout/footer/PenFooter';

interface GroupBoardProps {
  data?: {
    title: string; //게식글 이름
    content: string; //게시글 내용
    createdAt: number; //게시한 날짜
    updatedAt: number; // 업데이트한 날짜
    post_id: number; // key값?
  };
}

// API 요청 함수 수정
async function fetchAllGroupBoardData() {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/group/{group_id}/posts',
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

function GroupBoard({ data }: GroupBoardProps) {
  const [groupBoardData, setGroupBoardData] = useState<any[]>([]); // 타입 명시

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllGroupBoardData();
        setGroupBoardData(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <GB.Wrapper>
      <PenFooter />
      <SearchInput />
      <GB.GroupBoardList>
        <GB.GroupBoardTitle>
          <div>모임 이름</div>
        </GB.GroupBoardTitle>
        {groupBoardData.map((groupBoardItem, index) => (
          <GB.Boardbox key={index}>
            <GB.BoardLeft>
              <GB.User>
                <img src="/" alt="게시자 이름" />
                <div>
                  {groupBoardItem.name}
                  <br />
                  {groupBoardItem.createdAt}
                </div>
              </GB.User>
              <GB.BoardContent>{groupBoardItem.content}</GB.BoardContent>
            </GB.BoardLeft>
            <GB.BoardImg>
              <img src={groupBoardItem.image} alt="게시된 이미지" />
            </GB.BoardImg>
          </GB.Boardbox>
        ))}
      </GB.GroupBoardList>
    </GB.Wrapper>
  );
}

export default GroupBoard;
