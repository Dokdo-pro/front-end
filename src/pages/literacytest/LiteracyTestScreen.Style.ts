import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 474px;
`;

export const QuestionNumber = styled.div`
    font-weight: bold;
    margin: 10px;
`;

export const QuestionText = styled.div`
    font-size: 20px;
    margin: 20px;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

export const OptionButton = styled.button`
    padding: 10px;
    margin: 5px;
    cursor: pointer;
`;

export const CurrentPosition = styled.div`
    font-size: 16px;
    margin: 10px;
`;
export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px; // Options와 동일한 너비로 설정
`;

export const BackButton = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
