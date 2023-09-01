import React from 'react';
import * as BC from '../../bookContest/bookandcontest/BookAndContest.styled';
import contest7 from '../../../assets/img/ansan.jpeg';
import contest8 from '../../../assets/img/book.jpeg';

// BookAndContestBox 컴포넌트의 props 타입 정의

function BcBox8() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://linkareer.com/activity/144463">
            <BC.Img>
              <img src={contest7} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
              <div>안산의책 독서감상작 전국 공모전</div>
              <div>안산중앙도서관</div>
              <div>23.06.01~23.09.27</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://www.allforyoung.com/posts/33766">
            <BC.Img>
              <img src={contest8} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
              <div>정신건강 북큐레이터</div>
              <div>부천시정신건강복지센터</div>
              <div>23.08.02~23.09.08</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BcBox8;
