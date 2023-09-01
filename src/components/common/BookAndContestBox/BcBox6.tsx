import React from 'react';
import * as BC from '../../bookContest/bookandcontest/BookAndContest.styled';
import contest3 from '../../../assets/img/chuncheon.jpeg';
import contest4 from '../../../assets/img/gangneung.jpeg';

// BookAndContestBox 컴포넌트의 props 타입 정의

function BcBox6() {
  return (
    <BC.Wrapper>
      <BC.List>
        <BC.ImgBox>
          <BC.StyledLink to="https://linkareer.com/activity/149287">
            <BC.Img>
              <img src={contest3} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
              <div>춘천 경춘선과 추억 수필 공모전</div>
              <div>강원대학교</div>
              <div>23.08.28~23.10.15 </div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
        <BC.ImgBox>
          <BC.StyledLink to="https://linkareer.com/activity/148007">
            <BC.Img>
              <img src={contest4} alt="공모전이미지" />
            </BC.Img>
            <BC.Info>
              <div>초허 김동명 시인 전국 백일장</div>
              <div>강릉시/(사)강릉문인협회</div>
              <div>2023.09.09</div>
            </BC.Info>
          </BC.StyledLink>
        </BC.ImgBox>
      </BC.List>
    </BC.Wrapper>
  );
}

export default BcBox6;
