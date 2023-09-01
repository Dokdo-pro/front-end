import React from 'react';
import * as BC from '../../bookContest/bookandcontest/BookAndContest.styled';
import contest5 from '../../../assets/img/youth.jpeg';
import contest6 from '../../../assets/img/gyeongnam.png';

// BookAndContestBox 컴포넌트의 props 타입 정의

function BcBox7() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://www.allforyoung.com/posts/35109">
            <BC.Img>
              <img src={contest5} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
              <div>지역신문컨퍼런스</div>
              <div>지역신문발전위원회</div>
              <div>23.08.01~23.09.08</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://linkareer.com/activity/144263">
            <BC.Img>
              <img src={contest6} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
              <div>경남의 책 독후감 북트레일러</div>
              <div>경상남도/경남대표도서관</div>
              <div>23.07.01 ~ 23.09.30</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BcBox7;
