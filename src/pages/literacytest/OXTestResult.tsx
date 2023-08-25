import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ResultText,
  SocialIcons,
  SocialIcon,
  SocialIconImage,
  ResultImage,
  ReviewButton,
  TestInstructions,
  RepeatButton,
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
  const navigate = useNavigate();
  // 정답 수 계산
  const correctAnswers = userAnswers.reduce(
    (count, answer, index) =>
      answer === questionsData.questions[index].answer ? count + 1 : count,
    0,
  );
  const getResultMessage = () => {
    if (correctAnswers <= 3) return '돼지 입니다.';
    if (correctAnswers <= 6) return '꽤나 똑똑합니다.';
    if (correctAnswers <= 9) return 'iq 146 입니다.';
    if (correctAnswers === 10) return '신 입니다';
    return '';
  };
  const getImageSource = () => {
    if (correctAnswers <= 3) return pigImage;
    if (correctAnswers <= 6) return smartImage;
    // 다른 조건에 따른 이미지 반환
  };

  const imageSource = getImageSource();
  const handleRepeatTest = () => {
    navigate('/literacy-test'); /// 특정 경로로 이동
  };

  return (
    <Container>
      <ResultText>{getResultMessage()}</ResultText>
      <ResultText>{`${correctAnswers} / ${questionsData.questions.length}`}</ResultText>
      <ResultImage src={imageSource} alt="Result" /> {/* 이미지 출력 */}
      <ReviewButton>👉 틀린 문제 확인하기 👈</ReviewButton>
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
      <TestInstructions>
        주변 사람들에게 공유해서 서로의 문장 독해력 수준을 확인해보세요!
      </TestInstructions>
      <RepeatButton onClick={handleRepeatTest}>
        ✔ 테스트 다시하기 ✔
      </RepeatButton>
    </Container>
  );
};

export default OXTestResult;
