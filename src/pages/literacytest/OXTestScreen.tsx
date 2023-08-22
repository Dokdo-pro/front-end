import React, { useState } from 'react';
import {
  Container,
  QuestionNumber,
  QuestionText,
  Options,
  OptionButton,
  CurrentPosition,
  BackButton,
  Navigation,
  ProgressBarContainer,
  ProgressBarFiller,
} from './OXTestScreen.Style';
import { useNavigate } from 'react-router-dom';
import questionsData from '../../assets/data/ox-questions.json';

type OXTestScreenProps = {
  setUserAnswers: (answers: string[]) => void;
};

const OXTestScreen: React.FC<OXTestScreenProps> = ({ setUserAnswers }) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [localAnswers, setLocalAnswers] = useState<string[]>([]);
  const questions = questionsData.questions;

  const handleNextQuestion = (option: 'O' | 'X') => {
    const updatedAnswers = [...localAnswers, option];
    setLocalAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setUserAnswers(updatedAnswers);
      navigate('/ox-quiz/screen/result');
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container>
      <QuestionNumber>{`Q ${currentQuestion + 1}`}</QuestionNumber>
      <QuestionText>{questions[currentQuestion]?.question}</QuestionText>
      <Options>
        <OptionButton onClick={() => handleNextQuestion('O')}>O</OptionButton>
        <OptionButton onClick={() => handleNextQuestion('X')}>X</OptionButton>
      </Options>
      <Navigation>
        <BackButton
          onClick={() =>
            currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)
          }
          disabled={currentQuestion === 0}
        >
          뒤로 가기
        </BackButton>
        <CurrentPosition>{`${currentQuestion + 1} / ${
          questions.length
        }`}</CurrentPosition>
      </Navigation>
      <ProgressBarContainer>
        <ProgressBarFiller progress={progress} />
      </ProgressBarContainer>
    </Container>
  );
};

export default OXTestScreen;
