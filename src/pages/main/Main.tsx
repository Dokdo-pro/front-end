import React from 'react';
import ImageBox from '../../components/common/imagebox/ImageBox';
import * as M from './Main.styled';
import BoardBox from '../../components/common/boardbox/BoardBox';
import Slider from '../../components/common/slider/Slider';
import Slider2 from '../../components/common/slider/Slider2';
import Slider3 from '../../components/common/slider/Slider3';

function Main() {
  return (
    <M.Wrapper>
      <Slider />
      <M.GridContainer>
        <M.ImageRow>
          {Array(4)
            .fill('')
            .map((v, i) => (
              <ImageBox key={i} />
            ))}
        </M.ImageRow>
        <M.ImageRow>
          {Array(4)
            .fill('')
            .map((v, i) => (
              <ImageBox key={i} />
            ))}
        </M.ImageRow>
      </M.GridContainer>
      <M.StyledGroupLink to="/group/list">
        <M.GroupBoxTitle>모집 중인 독서 토론 모임 ⭐️</M.GroupBoxTitle>
      </M.StyledGroupLink>
      <M.GroupList>
        {Array(3)
          .fill('')
          .map((v, i) => (
            <BoardBox key={i} />
          ))}
      </M.GroupList>

      <M.GroupTop10>
        <M.GroupTopTitle>
          <M.StyledHotGroupLink to="/group">
            독도 인기 토론🔥
            <div>지금 가장 인기있는 토론 모임을 확인해보세요!</div>
          </M.StyledHotGroupLink>
        </M.GroupTopTitle>
      </M.GroupTop10>
      <Slider3 />
      <M.BooksTop10>
        <M.BooksTitle>
          <M.StyledBookLink to="/bookrec">
            인기 책 List🔥<div>독서 토론 인기책을 확인해보세요!</div>
          </M.StyledBookLink>
        </M.BooksTitle>
      </M.BooksTop10>
      <Slider2 />
    </M.Wrapper>
  );
}

export default Main;
