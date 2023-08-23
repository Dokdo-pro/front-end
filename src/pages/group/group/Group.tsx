import React from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import * as GR from './Group.styled';
import GroupTitleImg from '../../../assets/img/독서토론타이틀이미지예시.jpeg';

import MoreButton from '../../../components/common/morebutton/MoreButton';
import BoardBox from '../../../components/common/boardbox/BoardBox';
import BookAndConstBox from '../../../components/common/BookAndContest/BookAndConstBox';

const Group = () => {
  return (
    <GR.Wrapper>
      <SearchInput />
      <div>
        <GR.GroupImage>
          <img src={GroupTitleImg} alt="그룹타이틀이미지" />
        </GR.GroupImage>
      </div>
      <GR.BookContest>
        <GR.HotGroup>
          <GR.HotGroupTitle>
            <GR.StyledLink to="/group/list">
              떠오르고 있는 독서 토론 모임✨
            </GR.StyledLink>
          </GR.HotGroupTitle>
          <BoardBox />
          <BoardBox />
          <BoardBox />
          <MoreButton to="/group/list">더보기</MoreButton>
        </GR.HotGroup>

        <GR.BookContestTitle>
          주기적인 독서 토론 모임으로 공모전도 도전 해 봐🔥
        </GR.BookContestTitle>
        <BookAndConstBox />
      </GR.BookContest>
      <MoreButton to="/contest">더보기</MoreButton>
    </GR.Wrapper>
  );
};

export default Group;
