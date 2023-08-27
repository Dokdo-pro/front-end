import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 300px;
  height: 54px;
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-left: 0px;
  color: #7e7e7e;
  background-color: #ededed;
  &:focus {
    border-color: #ddd;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  color: #000000;
  font-weight: bold;
`;
