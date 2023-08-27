import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 65px auto 0 auto;
`;

export const LogoImg = styled.img`
  width: 30%;
  height: 30%;
  padding-bottom: 65px;
`;

export const JoinLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0 13px 10px;
`;

export const Input = styled.input`
  size: 420px;
  height: 57px;
  text-align: left;
  padding-left: 15px;
  border: none;
  border-radius: 15px;
  background-color: #f0f0f0;
  font-size: 18px;
  outline: none;
  cursor: pointer;

  margin-bottom: 0.5rem;

  &::placeholder {
    color: #c4c4c4;
    font-size: 16px;
    display: flex;
    font-weight: 400;
  }
`;

export const Save = styled.label`
  display: flex;
  color: black;
  cursor: pointer;
  font-size: 18px;
  align-items: center;

  margin: 5px 10px 10px 10px;
`;
export const SaveId = styled.input`
  margin: 0 8px 2px 0;
`;

export const OtherLogin = styled.div`
  display: flex;
  align-items: center;
  margin: 80px 0 0 0;
  box-sizing: border-box;
  width: 420px;
  justify-content: center;
  flex-direction: column;
`;

export const SubTitle = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 420px;
  height: 57px;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  border: none;
  background-color: #84614b;
`;

export const GotoHome = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const Kakao = styled(Link)`
  text-decoration: none;
  background-color: yellow;
  color: brown;
`;

export const Google = styled(Link)`
  text-decoration: none;
  background-color: white;
  color: navy;
`;
