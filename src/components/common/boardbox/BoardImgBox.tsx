import React from 'react';
import * as IB from '@/components/common/boardbox/BoardImgBox.styled';

interface BoardImgBoxProps {
  data?: {
    profile: string;
  };
}

// 이미지만 있는 박스 (도서 카테고리용)
function BoardImgBox({ data }: BoardImgBoxProps) {
  return (
    <div>
      {data && (
        <IB.Wrapper>
          <IB.Container>
            <IB.Image src={data.profile} alt="dataImg" />
          </IB.Container>
        </IB.Wrapper>
      )}
    </div>
  );
}

export default BoardImgBox;
