import React from 'react';
import * as BC from '../../pagemodule/bookandcontest/BookAndContest.styled';

const BookSlider = () => {
  return (
    <BC.Wrapper>
      {Array(1)
        .fill('')
        .map((v, i) => (
          <BC.List key={i}>
            <BC.ImgBox>
              <BC.Img>
                <img src="" alt="도서이미지" />
              </BC.Img>
              <BC.Info>
                <div>책제목</div>
                <div>저자/출판사</div>
                <div>출판일</div>
              </BC.Info>
            </BC.ImgBox>
            <BC.ImgBox>
              <BC.Img>
                <img src="" alt="도서이미지" />
              </BC.Img>
              <BC.Info>
                <div>책제목</div>
                <div>저자/출판사</div>
                <div>출판일</div>
              </BC.Info>
            </BC.ImgBox>
          </BC.List>
        ))}
    </BC.Wrapper>
  );
};

export default BookSlider;
