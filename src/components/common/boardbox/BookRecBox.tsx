import React from 'react';
import * as BC from './BookRecBox.styled'
const BookRecBox = () => {
  return (
    <BC.Wrapper>
      {Array(3)
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
          </BC.List>
        ))}
    </BC.Wrapper>
  );
};

export default BookRecBox;
