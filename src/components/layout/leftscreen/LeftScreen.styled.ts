import styled from 'styled-components';

export const StyledLeftScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  position: fixed;

  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  }
`;

export const Logo = styled.h1`
  font-size: 50px;
`;

export const Info = styled.div`
  font-size: 30px;
`;

export const Input = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 30px;
  padding-left: 15px;
  

  &::placeholder {
    color: #999;
    font-size: 13px;
  }
`;
export const Button = styled.button`
  width: 50px;
  height: 55px;
  border-radius: 25px;
  margin-left: 5px;
`;
