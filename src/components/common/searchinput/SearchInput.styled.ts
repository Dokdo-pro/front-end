import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  width: 100%;
`;

export const Input = styled.input`
  font-size: 20px;
  font-weight: 500;
  border: none;
  width: 238px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 74px;
  background: #ececec;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
