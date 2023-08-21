import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 130px;
  background-color: white;
  margin: 10px 0;
`;

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

export const TextBox = styled.div`
  margin-left: 10px;

  & div {
    padding: 4px 0;
    font-size: 15px;
  }
`;
