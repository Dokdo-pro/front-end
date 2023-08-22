import React from 'react';
import * as LS from './LeftScreen.styled';
import { Link } from 'react-router-dom';

function LeftScreen() {
  return (
    <LS.StyledLeftScreen>
      <LS.Wrapper>
        <LS.Logo>독도 로고</LS.Logo>
        <LS.Info>문해력 향상을 위한 독서 모임!</LS.Info>
        <div style={{ position: 'relative' }}>
          <LS.Input type="text" placeholder="토론 모임을 검색해보세요" />
          <LS.Button>icon</LS.Button>
        </div>

        <LS.Tag>
          <li>책 추천</li>
          <li>토론 모임</li>
          <li>공모전</li>
          <li>이 달의 모임</li>
          <li>문해력테스트</li>
        </LS.Tag>
        <Link to="/">메인</Link>
        <Link to="/search">검색페이지</Link>
        <Link to="/group">토론 모임공고</Link>
        <Link to="/group/list">토론모임 전체보기</Link>
        <Link to="/freeboard/list">자유 게시판</Link>
        <Link to="/bookrec">책 추천</Link>

        <Link to="/contest">공모전</Link>

        <Link to="/group/detail/:id">토론 모임 상세 페이지</Link>
        <Link to="/group/board">토론 게시판</Link>
        <Link to="/group/board/detail/:id">토론 게시물 상세 페이지</Link>
        <Link to="/group/board/write/:id">토론 게시물 작성</Link>
        <Link to="/group/photo">토론 사진첩</Link>
        <Link to="/contest/detail">공모전디테일</Link>
        <Link to="/bookrec/detail">책 추천 디테일</Link>
        <Link to="/group/photo/detail/:id">
          토론 사진 상세
          페이지ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ만든거랑비슷함
        </Link>
        <Link to="/group/photo/write/:id">
          토론 사진 페이지ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ만든거랑비슷함
        </Link>
        <Link to="/freeboard/detail">
          자유 게시물 상세
          페이지ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ만든거랑비슷함
        </Link>
        <Link to="/freeboard/write/:id">
          자유 게시물 작성ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ만든거랑비슷함
        </Link>
      </LS.Wrapper>
    </LS.StyledLeftScreen>
  );
}

export default LeftScreen;
