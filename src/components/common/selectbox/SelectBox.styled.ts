import styled from 'styled-components';

export const StyledSelect = styled.select`
  text-align: center;
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #a8a8a8;
  border-radius: 15px;
  outline: none;
  transition: border-color 0.3s;
  height: 30px;
  width: 100%;

  &:focus {
    border-color: #ddd;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;
