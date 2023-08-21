import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 60px;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 474px;
`;

export const Input = styled.input`
  font-size: 15px;
  border: 1px soild black;
  border-radius: 25px;
  width: 85%;
  padding: 10px 10px 10px 20px;
`;

export const Button = styled.button`
  width: 39px;
  height: 39px;
  position: absolute;
  right: 74px;
  background-color: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 6%;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
