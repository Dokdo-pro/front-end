import React from 'react';
import * as MB from './MidleBoardBox.styled';
import BoardImgBox from './BoardImgBox';

function MidleBoardBox() {
  return (
    <MB.Container>
      <MB.Border>
        <MB.TextBox>
          <BoardImgBox />
          <div>애증의 철학 토론 모임</div>
          <div>
            "유튜브 스크린 타임 시간말고 독서 토론 시간을 늘려보았습니다. 덕분에
            꾸준한 독서 습관을 만들 수 있었습니다.
          </div>
        </MB.TextBox>
      </MB.Border>
    </MB.Container>
  );
}

export default MidleBoardBox;
