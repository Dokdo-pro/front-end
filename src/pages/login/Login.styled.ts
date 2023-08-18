import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 184px auto;

`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  padding-bottom: 72px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 20px 0;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;

`;

export const Title = styled.div`
  font-size: 30px;
  text-align: left;
  color: black;
  font-weight: bold;
  margin-left: 10px;
  
`;

export const JoinLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: black;
  margin-top: 10px;
  margin-right: 10px; 

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

export const Input = styled.input`
  size: 420px;
  height: 57px;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  cursor: pointer;

  margin-bottom: 0.5rem;
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

export const Button = styled.button`
  width: 420px;
  height: 57px;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const Kakao = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Google = styled(Link)`
  text-decoration: none;
  color: black;
`;
