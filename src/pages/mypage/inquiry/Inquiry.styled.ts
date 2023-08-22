import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 45px auto 0 auto;
`;

export const Title = styled.p`
  display: flex;
  color: black;
  font-weight: bold;
  justify-content: flex-start;
  width: 420px;
  margin: 0 0 0 10px;
  font-size: 30px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px auto 40px auto;
  box-sizing: border-box;
  width: 420px;
  
`;

export const ReasonSelect = styled.select`
  width: 420px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: #a8a8a8;
  font-size: 16px;
`;

export const FormInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
 
`;

export const Input = styled.input`
  width: 420px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: #a8a8a8;
  font-size: 16px;
`;

export const ContentInput = styled.input`
  width: 420px;
  height: 200px;
  border: none;
  border-radius: 8px;
  background-color: #a8a8a8;
  font-size: 16px;
`;


export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin: 50px auto 0 auto;
  
  background-color: #84614b;
`;
export const SubmitLink = styled(Link)`
color: white;
text-decoration: none;
font-size: 18px;
`