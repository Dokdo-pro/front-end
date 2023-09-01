import React from 'react';
import * as BC from '../../bookContest/bookandcontest/BookAndContest.styled';
import contest1 from '../../../assets/img/hangul.jpeg';
import contest2 from '../../../assets/img/story.png';

// BookAndContestBox 컴포넌트의 props 타입 정의

function BcBox5() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://www.allforyoung.com/posts/34601">
            <BC.Img>
              <img src={contest1} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
                <div>한글날 기념 작사 공모전</div>
                <div>(재)마포문화재단</div>
                <div>23.08.07~23.09.03</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://linkareer.com/activity/146842">
            <BC.Img>
              <img src={contest2} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
              <div>스토리코스모스 독후감 공모</div>
              <div>조비이오</div>
              <div>23.07.17~23.09.30 </div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BcBox5;
