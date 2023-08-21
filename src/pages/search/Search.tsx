import React from 'react';
import * as S from './Search.styled';
import SearchInput from '../../components/common/searchinput/SearchInput';

const Search = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <h1>Logo</h1>
      </S.Logo>
      <SearchInput />
      <S.TagBox>
        <S.TagBoxTitle>추천 키워드</S.TagBoxTitle>
        <S.TagList>
          <div>토론모임</div>
          <div>공모전</div>
          <div>책추천</div>
          <div>이 달의 모임</div>
        </S.TagList>
      </S.TagBox>
          <S.BookRecBox>
            <S.BookRecBoxTitle>도서를 추천합니다</S.BookRecBoxTitle>
            <S.BookRecList>
              <S.BookImgBox>
                <S.BookImg>
                  <img src="" alt="도서이미지" />
                </S.BookImg>
                <S.BookInfo>
                  <div>책제목</div>
                  <div>저자/출판사</div>
                  <div>출판일</div>
                </S.BookInfo>
              </S.BookImgBox>
              <S.BookImgBox>
                <S.BookImg>
                  <img src="" alt="도서이미지" />
                </S.BookImg>
                <S.BookInfo>
                  <div>책제목</div>
                  <div>저자/출판사</div>
                  <div>출판일</div>
                </S.BookInfo>
              </S.BookImgBox>
            </S.BookRecList>
          </S.BookRecBox>
          <S.BookRecBox>
            <S.BookRecBoxTitle>독도 인기 모임 </S.BookRecBoxTitle>
            <S.BookRecList>
              <S.BookImgBox>
                <S.BookImg>
                  <img src="" alt="토론모임사진" />
                </S.BookImg>
                <S.BookInfo>
                  <div>토론모임이름</div>
                  <div>인원수</div>
                  <div>카테고리</div>
                </S.BookInfo>
              </S.BookImgBox>
              <S.BookImgBox>
                <S.BookImg>
                  <img src="" alt="토론모임사진" />
                </S.BookImg>
                <S.BookInfo>
                  <div>토론모임이름</div>
                  <div>인원수</div>
                  <div>카테고리</div>
                </S.BookInfo>
              </S.BookImgBox>
            </S.BookRecList>
          </S.BookRecBox>
    </S.Wrapper>
  );
};

export default Search;
