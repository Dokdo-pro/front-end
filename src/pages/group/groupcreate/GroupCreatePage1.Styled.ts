// GroupCreatePage1.Styled.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepsContainer = styled.div`
  display: flex;
  gap: 10px;
  position: relative; // 위치를 조정하기 위해 relative position을 설정
  top: -40px; // 상위 위치로 3px 이동
  & > div:nth-child(1) {
    background-color: #84614b;
    color: #fdf8ef;
  }
`;

export const StepCircle = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #7e7e7e;
  margin-bottom: 20px;
`;

export const Step = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 27px;
  text-align: center;
  color: #000000;
  margin-bottom: 30px;
  font-weight: bold;
  position: relative;
  top: -15px;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  position: relative;
  top: -15px;
  label {
    margin-right: 40px;
    flex-shrink: 0;
  }
  input,
  textarea {
    padding: 5px;
    box-sizing: border-box;
    background-color: #ededed;
    border: 1px solid #ccc;
  }
  textarea {
    width: 314px;
    height: 296px;
    border-radius: 15px;
  }
`;

export const FileInputContainer = styled(FormGroup)`
  input[type='file'] {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 54px;
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-left: 16px;
`;
