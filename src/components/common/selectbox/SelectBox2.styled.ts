import styled from 'styled-components';

export const StyledSelect = styled.select`
	width:140px;
    height: 40px;
    margin: 45px 0px 10px 15px;
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
