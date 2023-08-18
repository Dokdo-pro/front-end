import { useNavigate } from 'react-router-dom';
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
} from './LiteracyTestScreen.Style';

const LiteracyTestScreen: React.FC = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0); // 현재 문제 인덱스
    const [questions] = useState([
        {
            question: '1',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '2',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '3',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '4',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '5',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '6',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '7',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '8',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '9',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '10',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
    ]);

    const handleNextQuestion = (optionIndex: number) => {
        // 선택한 옵션 처리 로직 추가
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1); // 다음 문제로 이동
        } else {
            // 마지막 문제의 답을 클릭한 경우, 결과 화면으로 이동합니다.
            navigate('/literacy-test/screen/result');
        }
        // 마지막 문제인 경우 다른 처리 로직
    };
    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1); // 이전 문제로 이동
        }
    };

    return (
        <Container>
            <QuestionNumber>{`Q ${currentQuestion + 1}`}</QuestionNumber>
            <QuestionText>{questions[currentQuestion]?.question}</QuestionText>
            <Options>
                {questions[currentQuestion]?.options.map((option, index) => (
                    <OptionButton
                        key={index}
                        onClick={() => handleNextQuestion(index)}
                    >
                        {option}
                    </OptionButton>
                ))}
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

export default LiteracyTestScreen;
