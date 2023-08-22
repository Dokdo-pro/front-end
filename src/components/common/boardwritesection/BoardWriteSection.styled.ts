import styled from 'styled-components';

export const Select = styled.select`
  width: 90%;
  height: 50px;
  border: none;
  padding-left: 5px;
  color: #9b9b9b;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: initial;
    box-shadow: none;
  }
`;
