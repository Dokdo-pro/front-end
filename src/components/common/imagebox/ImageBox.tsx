import React from 'react';
import * as IB from './ImageBox.styled';

//{ /* props -> {imagePath}*/ }
function ImageBox() {
  return (
    <IB.Container>
       {/* src={imagePath}*/}
      <IB.Image src="/" alt="이미지" />
    </IB.Container>
  );
}

export default ImageBox;
