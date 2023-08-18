import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    QuestionNumber,
    QuestionText,
    Options,
    OptionButton,
    CurrentPosition,
    BackButton,
    Navigation,
} from './OXTestScreen.Style';

const OXTestScreen: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0); // 현재 문제 인덱스
    const [results, setResults] = useState<string[]>([]); // 응답을 저장할 상태
    const [questions] = useState([
        { question: '문제 1: 질문 내용 1' },
        { question: '문제 2: 질문 내용 2' },
        { question: '문제 3: 질문 내용 3' },
        { question: '문제 4: 질문 내용 4' },
        { question: '문제 5: 질문 내용 5' },
        { question: '문제 6: 질문 내용 6' },
        { question: '문제 7: 질문 내용 7' },
        { question: '문제 8: 질문 내용 8' },
        { question: '문제 9: 질문 내용 9' },
        { question: '문제 10: 질문 내용 10' },
    ]);

    const handleNextQuestion = (option: 'O' | 'X') => {
        setResults([...results, option]);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // 마지막 문제의 답을 클릭한 경우, 결과 화면으로 이동합니다.
            navigate('/ox-quiz/screen/result');
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1); // 이전 문제로 이동
        }
    };

    // 마지막 문제인 경우, 결과 화면으로 이동하는 로직 필요
    // 예를 들어 React Router를 사용하면 Redirect 컴포넌트를 반환할 수 있음
    if (currentQuestion === questions.length - 1) {
        // return <Redirect to="/result" />;
    }

    return (
        <Container>
            <QuestionNumber>{`Q ${currentQuestion + 1}`}</QuestionNumber>
            <QuestionText>{questions[currentQuestion]?.question}</QuestionText>
            <Options>
                <OptionButton onClick={() => handleNextQuestion('O')}>
                    O
                </OptionButton>
                <OptionButton onClick={() => handleNextQuestion('X')}>
                    X
                </OptionButton>
            </Options>
            <Navigation>
                <BackButton
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                >
                    뒤로 가기
                </BackButton>
                <CurrentPosition>{`${currentQuestion + 1} / ${
                    questions.length
                }`}</CurrentPosition>
            </Navigation>
        </Container>
    );
};

export default OXTestScreen;
