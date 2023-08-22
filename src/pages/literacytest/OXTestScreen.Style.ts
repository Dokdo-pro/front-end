import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 474px;
  min-height: 79.5vh;
`;

export const QuestionNumber = styled.div`
  font-weight: bold;
  margin: 50px;
  padding: 15px;
  background-color: #b0e57c;
  border-radius: 10px;
  position: relative;
  display: inline-block;

  // 말풍선 꼬리 부분
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    border-width: 10px;
    border-style: solid;
    border-color: #b0e57c transparent transparent transparent;
  }
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
  padding: 20px 20px;
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  border: none;
  background: #f0f0f0;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }

  &:active {
    background: #d0d0d0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
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
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
  margin: 10px 0;
  bottom: 0;
`;

export const ProgressBarFiller = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #59c4fc;
`;
