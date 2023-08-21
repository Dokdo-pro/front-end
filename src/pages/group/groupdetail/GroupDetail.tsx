import React from 'react';
import * as GD from './GroupDetail.styled';
import MoreButton from '../../../components/common/morebutton/MoreButton';

const GroupDetail = () => {
  return (
    <GD.Wrapper>
      <GD.GroupImage>
        <img src="/" alt="모임 설정 이미지" />
      </GD.GroupImage>
      <GD.HashTag>해시태그들</GD.HashTag>
      <GD.GroupInfo>
        <div>모임 이름 </div>
        <div>모임 소개 제목</div>
        <div>모임 소개 내용</div>
      </GD.GroupInfo>
      <GD.Schedule>
        <div>일정</div>
  
        {Array(3)
          .fill('')
          .map((v, i) => (
            <GD.ScheduleBox key={i}>
              <div> 8/20 (일) D-5</div>
              <div>북적북적 222번째 (독서와 쓰기)</div>
              <div>일시 8/20일 (일) 오후 2:00</div>
              <div>위치 더 숲 2,3,4 세미나 룸</div>
              <div>금액 회비 2000원 + 세미나 룸 1/n</div>
              <div>참여 15/18 (3자리 남음)</div>
            </GD.ScheduleBox>
          ))}
        <MoreButton />
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
      </GD.MemberBox>
    </GD.Wrapper>
  );
};

export default GroupDetail;
