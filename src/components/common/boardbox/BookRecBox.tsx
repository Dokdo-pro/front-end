import React from 'react';
import * as BC from '@/components/common/boardbox/BookRecBox.styled';


// 책, 공모전 용 2줄 정렬 리스트
const BookRecBox = () => {
  return (
    <BC.Wrapper>
      {Array(2)
        .fill('')
        .map((v, i) => (
          <BC.List key={i}>
            <BC.ImgBox>
              <BC.Img>
                <img src="" alt="도서이미지" />
              </BC.Img>
              <BC.Info>
                <div>책제목</div>
              </BC.Info>
            </BC.ImgBox>
            <BC.ImgBox>
              <BC.Img>
                <img src="" alt="도서이미지" />
              </BC.Img>
              <BC.Info>
                <div>책제목</div>
              </BC.Info>
            </BC.ImgBox>
          </BC.List>
        ))}
    </BC.Wrapper>
  );
};

export default BookRecBox;
