import styled from 'styled-components';

export const StyledSelect = styled.select`
  text-align: center;
  padding: 5px;
  font-size: 15px;
  border: 1px solid #a8a8a8;
  border-radius: 15px;
  outline: none;
  transition: border-color 0.3s;
  height: 35px;
  width: 90px;

  &:focus {
    border-color: #ddd;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;
