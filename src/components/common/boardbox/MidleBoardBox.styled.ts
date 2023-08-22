import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: white;
  margin-top: 25px;
`;

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #ddd;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 10px;
  width: 50%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    padding: 5px 0;
    font-size: 15px;
    width: 100%;
  }
`;
