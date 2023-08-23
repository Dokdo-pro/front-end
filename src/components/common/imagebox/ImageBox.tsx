import React from 'react';
import * as IB from './ImageBox.styled';

//{ /* props -> {imagePath}*/ }
function ImageBox() {
  return (
    <IB.Wrapper>
      <IB.Container>
        {/* src={imagePath}*/}
          <IB.Image src="/" alt="소설" />
      </IB.Container>
      <IB.Genre>소설</IB.Genre>
    </IB.Wrapper>
  );
}

export default ImageBox;
