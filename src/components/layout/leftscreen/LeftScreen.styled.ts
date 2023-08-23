import styled from 'styled-components';

export const StyledLeftScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff7ec;
  position: fixed;

  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 400px;
`;

export const Tag = styled.div`
  display: flex;
  li {
    font-size: 14px;
    border-radius: 20px;
    margin: 0 5px;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: white;
  }
`;

export const Logo = styled.h1`
  width: 200px;
  height: 100px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.div`
  font-size: 30px;
`;

export const InputWrapper = styled.div`
  position: relative;
  height: 60px;
  display: flex;

  justify-content: center;
  align-items: center;
  width: 474px;
`;

export const Input = styled.input`
  font-size: 15px;
  border-radius: 50px;
  width: 370px;
  height: 67px;
  padding-left: 20px;
  box-sizing: border-box;

  border: 2px solid #635542;

  &::placeholder {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 62px;
  height: 64px;
  position: absolute;
  right: 74px;
  background-color: #635542;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 11%;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
