import React from 'react';
import * as BC from '@/components/bookContest/bookandcontest/BookAndContest.styled';


// BookAndContestBox 컴포넌트의 props 타입 정의

function BcBox4() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000202687816">
            <BC.Img>
              <img src={require('@/assets/img/bookImg/책추천4.jpeg').default} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <div>아메리칸 프로메테우스</div>
              <div>카이버드외/사이언스북스</div>
              <div>2023.06.12</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://product.kyobobook.co.kr/detail/S000208590459">
            <BC.Img>
              <img src={require('@/assets/img/bookImg/책추천3.jpeg').default} alt="도서이미지" />
            </BC.Img>
            <BC.Info>
              <div>1%를 읽는 힘</div>
              <div>메르토네이도</div>
              <div>2023.08.30</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BcBox4;