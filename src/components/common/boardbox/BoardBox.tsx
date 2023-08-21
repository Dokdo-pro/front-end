import React from 'react';
import * as BB from './BoardBox.styled';
import BoardImgBox from './BoardImgBox';

function BoardBox() {
  return (
    <BB.Container>
      <BB.Border>
        <BB.TextBox>
          <div>해시태그</div>
          <div>주기적인 독서모임 가지실 분 모십니다.</div>
          <div>문해력 향상을 위한 독서토론 모입니다.</div>
          <div>13명 참여중</div>
        </BB.TextBox>
        <BoardImgBox />
      </BB.Border>
    </BB.Container>
  );
}

export default BoardBox;
