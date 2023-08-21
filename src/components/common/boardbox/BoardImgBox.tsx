import React from 'react';
import * as IB from './BoardImgBox.styled';

//{ /* props -> {imagePath}*/ }
function BoardImgBox() {
  return (
    <IB.Wrapper>
      <IB.Container>
        {/* src={imagePath}*/}
        <IB.Image src="/" alt="이미지" />
      </IB.Container>
    </IB.Wrapper>
  );
}

export default BoardImgBox;
