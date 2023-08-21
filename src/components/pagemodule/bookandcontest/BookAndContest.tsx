import React from 'react';
import * as BC from './BookAndContest.styled';
import SearchInput from '../../common/searchinput/SearchInput';

const BookAndContest = () => {
  return (
    <BC.Wrapper>
      <SearchInput />
      <BC.Box>
        <BC.BoxTitleBox>
          <BC.BoxTitle>도서를 추천합니다</BC.BoxTitle>
          <select>
            <option value="">장르선택</option>
            <option value="">교양</option>
            <option value="">자기계발</option>
            <option value="">현대문학</option>
          </select>
        </BC.BoxTitleBox>
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
      </BC.Box>
    </BC.Wrapper>
  );
};

export default BookAndContest;
