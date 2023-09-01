import React from 'react';
import * as BC from './Constest.styled';
import Contest1 from '../../assets/img/chuncheon.jpeg';
import Contest2 from '../../assets/img/gangneung.jpeg';
import Contest3 from '../../assets/img/story.png';
import Contest4 from '../../assets/img/hangul.jpeg';
import Contest5 from '../../assets/img/gyeongnam.png';
import Contest6 from '../../assets/img/youth.jpeg';
import Contest7 from '../../assets/img/ansan.jpeg';
import Contest8 from '../../assets/img/book.jpeg';


const Contest = () => {
  return (
    <BC.Wrapper>
      <BC.Box>
        <BC.BoxTitleBox>
          <BC.BoxTitle>
            독도 추천 독서 토론 모임으로
            <br /> 공모전도 도전 하세요!🔥
          </BC.BoxTitle>
        </BC.BoxTitleBox>
        <BC.SliederBox>
          <BC.Wrapper>
            <BC.List>
              <BC.StyledLink to="https://linkareer.com/activity/146842">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={Contest3} alt="공모전이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>스토리코스모스 독후감 공모</div>
                    <div>조비이오</div>
                    <div>23.07.17~23.09.30 </div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              <BC.StyledLink to="https://www.allforyoung.com/posts/34601">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={Contest4} alt="공모전이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>한글날 기념 작사 공모전</div>
                    <div>(재)마포문화재단</div>
                    <div>23.08.07~23.09.03</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              </BC.List>{' '}
              <BC.List>
              <BC.StyledLink to="https://linkareer.com/activity/144463">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={Contest7} alt="공모전이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>안산의책 독서감상작 공모전</div>
                    <div>안산중앙도서관</div>
                    <div>23.06.01~23.09.27</div>  
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
              <BC.StyledLink to="https://www.allforyoung.com/posts/33766">
                <BC.ImgBox>
                  <BC.Img>
                    <img src={Contest8} alt="공모전이미지" />
                  </BC.Img>
                  <BC.Info>
                    <div>정신건강 북큐레이터</div>
                    <div>부천시정신건강복지센터</div>
                    <div>23.08.02~23.09.08</div>
                  </BC.Info>
                </BC.ImgBox>
              </BC.StyledLink>
            </BC.List>{' '}
            <BC.List>
            <BC.StyledLink to="https://linkareer.com/activity/144263">
              <BC.ImgBox>
                <BC.Img>
                  <img src={Contest5} alt="공모전이미지" />
                </BC.Img>
                <BC.Info>
                  <div>경남의 책 독후감 북트레일러</div>
                  <div>경상남도/경남대표도서관</div>
                  <div>23.07.01 ~ 23.09.30</div>
                </BC.Info>
              </BC.ImgBox>
            </BC.StyledLink>
            <BC.StyledLink to="https://www.allforyoung.com/posts/35109">
              <BC.ImgBox>
                <BC.Img>
                  <img src={Contest6} alt="공모전이미지" />
                </BC.Img>
                <BC.Info>
                  <div>지역신문컨퍼런스</div>
                  <div>지역신문발전위원회</div>
                  <div>23.08.01~23.09.08</div>
                </BC.Info>
              </BC.ImgBox>
            </BC.StyledLink>
          </BC.List>{' '}
          <BC.List>
            <BC.StyledLink to="https://linkareer.com/activity/149287">
              <BC.ImgBox>
                <BC.Img>
                  <img src={Contest1} alt="공모전이미지" />
                </BC.Img>
                <BC.Info>
                  <div>춘천 경춘선과 추억 수필 공모전</div>
                  <div>강원대학교</div>
                  <div>23.08.28~23.10.15 </div>
                </BC.Info>
              </BC.ImgBox>
            </BC.StyledLink>
            <BC.StyledLink to="https://linkareer.com/activity/148007">
              <BC.ImgBox>
                <BC.Img>
                  <img src={Contest2} alt="공모전이미지" />
                </BC.Img>
                <BC.Info>
                  <div>초허 김동명 시인 전국 백일장</div>
                  <div>강릉시/(사)강릉문인협회</div>
                  <div>2023.09.09</div>
                </BC.Info>
              </BC.ImgBox>
            </BC.StyledLink>
          </BC.List>{' '}
          </BC.Wrapper>
        </BC.SliederBox>
      </BC.Box>
    </BC.Wrapper>
  );
};

export default Contest;
