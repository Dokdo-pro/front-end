import React, { useState, useEffect } from 'react';
import * as GB from './GorupBoard.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '../../../components/layout/footer/PenFooter';
import { getCookie } from '../../../helper/Cookie';
import GroupHeader from '../../../components/layout/header/GroupHeader';


interface GroupData {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
}

interface GroupBoardProps {
  data?: GroupData;
}


const loginToken = getCookie('loginToken'); // getCookie 함수는 쿠키를 읽어오는 함수로 적절한 코드로 대체해야 합니다.

if (loginToken) {
// 로그인 토큰이 존재하면 API 요청 시 헤더에 추가
axios.defaults.headers.common['Authorization'] = `Bearer ${loginToken}`;
}

// API 요청 함수 수정
async function fetchAllGroupBoardData(group_id: number) {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/v1/group/{group_id}/posts`, // 백틱 사용
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

function GroupBoard({ data }: GroupBoardProps) {
  const [groupBoardData, setGroupBoardData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData(group_id: number) {
      // group_id 인자로 받도록 수정
      try {
        const fetchedData = await fetchAllGroupBoardData(group_id); // data.group_id 대신 group_id 사용
        setGroupBoardData(fetchedData);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      }
    }

    if (data?.group_id) {
      fetchData(data.group_id); // data.group_id를 그대로 전달
    }
  }, [data?.group_id]);

  return (
    <GB.Wrapper>
      <GroupHeader />
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
