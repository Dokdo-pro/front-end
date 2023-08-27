import * as GD from './GroupDetail.styled';
import GroupImg from '../../../assets/img/독서모임1.jpeg';
import GroupHeader from '../../../components/layout/header/GroupHeader';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


async function fetchAllGroupData() {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/group/',
    ); // 최신순 정렬
    return response.data.data; // 서버 응답에서 실제 그룹 데이터를 반환
  } catch (error) {
    throw error;
  }
}





function GroupDetail() {

  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllGroupData(); // API 요청 호출
        // 데이터 가공 및 저장
        setGroupData(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <GD.Wrapper>
        <GroupHeader />
      <GD.GroupImage>
        <GD.EditButton>
          <div>●●●</div>
        </GD.EditButton>
        <img src={GroupImg} alt="모임 설정 이미지" />
      </GD.GroupImage>
      <GD.GroupInfo>
        <GD.GroupName>●시좋아하는 모임</GD.GroupName>
        <GD.GroupInfoTitle>
          좋아하는 시집 한권씩 챙겨서 피크닉겸 독서 토론해요{' '}
        </GD.GroupInfoTitle>
        <GD.GroupInfoTP>
          <div>반포한강공원</div>
          <div>매주 목요일 오후 2시</div>
        </GD.GroupInfoTP>
        <GD.HashTag>
          <div>해시태그</div>
        </GD.HashTag>
        <GD.GroupInfoBox>모임 소개 내용</GD.GroupInfoBox>
      </GD.GroupInfo>
      <GD.Schedule>
        <GD.ScheduleTop>
          <GD.ScheduleTitle>일정</GD.ScheduleTitle>
          <button>일정 등록</button>
        </GD.ScheduleTop>

        {Array(2)
          .fill('')
          .map((v, i) => (
            <GD.ScheduleBox key={i}>
              <div>D-5</div>
              <div>북적북적 222번째 (독서와 쓰기)</div>
              <div>일시 8/20일 (일) 오후 2:00</div>
              <div>위치 더 숲 2,3,4 세미나 룸</div>
              <div>금액 회비 2000원 + 세미나 룸 1/n</div>
              <div>참여 15/18 (3자리 남음)</div>
            </GD.ScheduleBox>
          ))}
      </GD.Schedule>
      <GD.MemberBox>
        <GD.Member>모집멤버 (25)</GD.Member>
        <ul>
          {Array(5)
            .fill('')
            .map((v, i) => (
              <GD.MemberList key={i}>
                <GD.MemberImg>
                  <img src="" alt="프로필" />
                </GD.MemberImg>
                <GD.Desc>
                  <div>최형욱</div>
                  <div>한줄 소개 블라브라브라브라ㅡ르바르</div>
                </GD.Desc>
              </GD.MemberList>
            ))}
        </ul>
        <GD.ButtonDisplay></GD.ButtonDisplay>
      </GD.MemberBox>
    </GD.Wrapper>
    //더보기 버튼 필요 -> 무한스크롤
  );
}

export default GroupDetail;
