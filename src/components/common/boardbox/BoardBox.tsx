import React from 'react';
import * as BB from './BoardBox.styled';
import BoardImgBox from './BoardImgBox';

function BoardBox() {
  return (
    <BB.Border>
      <BB.TextBox>
        <div>최형욱</div>
        <div>
          특정 논제에 대해 찬반 입장을 나누어 각자. 근거와 반론을 준비한 후 찬반
          토론을 진행합니다. 이 프로그램은
        </div>
        <div>조건별 검색 해시태그</div>
      </BB.TextBox>
      <BoardImgBox />
    </BB.Border>
  );
}

export default BoardBox;
