import React, { useState } from 'react';
import {
  Container,
  QuestionText,
  Options,
  OptionButton,
  CurrentPosition,
  BackButton,
  Navigation,
  ProgressBarContainer,
  ProgressBarFiller,
} from '@/pages/literacytest/LiteracyTestScreen.Style';
import { useNavigate } from 'react-router-dom';
import questionsData from '@/assets/data/questions.json';
import backButtonImage from '@/assets/icon/Vector.png';

type LiteracyTestScreenProps = {
  setUserAnswers: (answers: number[]) => void;
};

const LiteracyTestScreen: React.FC<LiteracyTestScreenProps> = ({
  setUserAnswers,
}) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [localAnswers, setLocalAnswers] = useState<number[]>([]); // 로컬 상태 추가
  const questions = questionsData.questions;

  const handleNextQuestion = (optionIndex: number) => {
    const updatedAnswers = [...localAnswers, optionIndex]; // 로컬 상태 사용
    setLocalAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setUserAnswers(updatedAnswers); // 마지막 질문에 대한 답변을 처리한 후, 상위 컴포넌트에 결과를 전달
      navigate('/literacy-test/screen/result');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container>
      <Navigation>
        <BackButton
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <img src={backButtonImage} alt="뒤로 가기" /> {/* 이미지 적용 */}
        </BackButton>
        <CurrentPosition>{`${currentQuestion + 1} / ${
          questions.length
        }`}</CurrentPosition>
        <div /> {/* 빈 div 추가 */}
      </Navigation>
      <ProgressBarContainer>
        <ProgressBarFiller progress={progress} />
      </ProgressBarContainer>
      <QuestionText>{questions[currentQuestion]?.question}</QuestionText>
      <Options>
        {questions[currentQuestion]?.options.map((option, index) => (
          <OptionButton key={index} onClick={() => handleNextQuestion(index)}>
            {option}
          </OptionButton>
        ))}
      </Options>
    </Container>
  );
};

export default LiteracyTestScreen;
