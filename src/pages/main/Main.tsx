import React from 'react';
import ImageBox from '../../components/common/imagebox/ImageBox';
import * as M from './Main.styled';
import BoardBox from '../../components/common/boardbox/BoardBox';
import MoreButton from '../../components/common/morebutton/MoreButton';

function Main() {
  return (
    <div>
      <M.GridContainer>
        <M.ImageRow>
          <ImageBox />
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </M.ImageRow>
        <M.ImageRow>
          <ImageBox />
          <ImageBox />
          <ImageBox />
          <ImageBox />
        </M.ImageRow>
        <MoreButton />
      </M.GridContainer>
      <div>
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <MoreButton />
      </div>
    </div>
  );
}

export default Main;
