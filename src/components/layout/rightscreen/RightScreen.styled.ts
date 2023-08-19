import styled from 'styled-components';

export const StyleRight = styled.div`
  position: fixed;
  right: 0;
  width: calc(50% - 474px);
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 30px;
`;

export const Button = styled.button`
  border: none;
  background-color: blue;
  color: white;
  width: 200px;
  height: 50px;
  border-radius: 20px;
`;
