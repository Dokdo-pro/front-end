import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 43px;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 30px;
`;

export const Button = styled.button`
  color: gray;
  font-size: 15px;
  border: none;
  background-color: white;
  cursor: pointer;
  width: 90%;
  margin: auto;

  white-space: nowrap;
  display: inline-block;
`;
