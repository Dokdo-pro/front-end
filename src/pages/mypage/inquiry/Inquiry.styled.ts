import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 184px auto;
`;

export const Title = styled.p`
  display: flex;
  color: black;
  font-weight: bold;
  justify-content: flex-start;
  width: 420px;
  margin: 0 0 0 10px;
  font-size: 30px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 70px auto 40px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;



export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;

  & + & {
    margin-left: 10px;
  }
`;