import React from 'react';
import {
  Container,
  ResultText,
  SocialIcons,
  SocialIcon,
  SocialIconImage,
  ResultImage,
} from './OXTestResult.Style';
import questionsData from '../../assets/data/ox-questions.json';
import facebookIcon from '../../assets/img/facebook.png';
import twitterIcon from '../../assets/img/twitter.png';
import kakaoIcon from '../../assets/img/카카오톡아이콘.png';

import pigImage from '../../assets/img/pig-image.jpeg';
import smartImage from '../../assets/img/smart-image.jpeg';

type OXTestResultProps = {
  userAnswers: string[]; // 사용자의 답
};

const OXTestResult: React.FC<OXTestResultProps> = ({ userAnswers }) => {
  // 정답 수 계산
  const correctAnswers = userAnswers.reduce(
    (count, answer, index) =>
      answer === questionsData.questions[index].answer ? count + 1 : count,
    0,
  );

  const getImageSource = () => {
    if (correctAnswers <= 3) return pigImage;
    if (correctAnswers <= 6) return smartImage;
    // 다른 조건에 따른 이미지 반환
  };

  const imageSource = getImageSource();

  return (
    <Container>
      <ResultImage src={imageSource} alt="Result" /> {/* 이미지 출력 */}
      <ResultText>{`정답 수: ${correctAnswers} / ${questionsData.questions.length}`}</ResultText>
      <SocialIcons>
        <SocialIcon href="https://facebook.com">
          <SocialIconImage src={facebookIcon} alt="Facebook" />
        </SocialIcon>
        <SocialIcon href="https://twitter.com">
          <SocialIconImage src={twitterIcon} alt="Twitter" />
        </SocialIcon>
        <SocialIcon href="https://www.kakaocorp.com">
          <SocialIconImage src={kakaoIcon} alt="Kakao" />
        </SocialIcon>
      </SocialIcons>
    </Container>
  );
};

export default OXTestResult;
