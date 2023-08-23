import React from 'react';
import * as BC from './BookAndContest.styled';
import SearchInput from '../../common/searchinput/SearchInput';
import BookAndConstBox from '../../common/BookAndContest/BookAndConstBox';

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
        <BC.SliederBox>
          <BookAndConstBox />
          <BookAndConstBox />
          <BookAndConstBox />
        </BC.SliederBox>
      </BC.Box>
    </BC.Wrapper>
  );
};

export default BookAndContest;
