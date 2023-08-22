import React from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import * as GR from './Group.styled';
import Slider from '../../../components/common/slider/Slider';
import GroupImg from '../../../assets/img/토론모임 모집글.jpeg';
import GroupTitleImg from '../../../assets/img/독서토론타이틀이미지예시.jpeg';

const Group = () => {
  return (
    <GR.Wrapper>
      <SearchInput />
      <div>
        <GR.GroupImage>
          <img src={GroupTitleImg} alt="그룹타이틀이미지" />
        </GR.GroupImage>
        
      </div>
      <GR.Section>
        <GR.DateText>
          <div>
            모집기간 <span>D-9</span>
          </div>
          <div>8월24일(월) ~ 8월 31일(목)</div>
        </GR.DateText>

        <GR.NoticeImage>
          <img src={GroupImg} alt="" />
        </GR.NoticeImage>
        <GR.SectionLink>
          <div>웹사이트 바로가기</div>
          <div>공유하기</div>
        </GR.SectionLink>
      </GR.Section>
      <Slider />
    </GR.Wrapper>
  );
};

export default Group;
