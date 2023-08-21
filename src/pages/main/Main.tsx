import React from 'react';
import ImageBox from '../../components/common/imagebox/ImageBox';
import * as M from './Main.styled';
import BoardBox from '../../components/common/boardbox/BoardBox';
import MoreButton from '../../components/common/morebutton/MoreButton';
import Slider from '../../components/common/slider/Slider';

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
        <MoreButton />
      </M.GridContainer>
      <M.GroupList>
        {Array(3)
          .fill('')
          .map((v, i) => (
            <BoardBox key={i} />
          ))}
        <MoreButton />
      </M.GroupList>
      <Slider />
      <Slider />
    </M.Wrapper>
  );
}

export default Main;
