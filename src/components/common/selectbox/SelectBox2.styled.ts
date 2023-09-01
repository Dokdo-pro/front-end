import styled from 'styled-components';

export const StyledSelect = styled.select`
	  width:150px;
    height: 40px;
    border: 0.5px solid #a8a8a8;
    border-radius: 10px;
    font-size: 16px;
    text-align: center;

  &:focus {
    border-color: #ddd;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;
