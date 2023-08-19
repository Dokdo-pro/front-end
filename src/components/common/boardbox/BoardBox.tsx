import React from 'react';
import * as BB from './BoardBox.styled';
import ImageBox from '../imagebox/ImageBox';

function BoardBox() {
  return (
    <BB.Container>
      <BB.Border>
        <ImageBox />
        <BB.TextBox>
        <div>모임 이름</div>
        <div>장르</div>
        <div>날짜/시간</div>
        <div>프로필</div>
        </BB.TextBox>
      </BB.Border>
    </BB.Container>
  );
}

export default BoardBox;
