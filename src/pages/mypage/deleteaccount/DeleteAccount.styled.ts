import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  box-sizing: border-box;
  width: 474px;
  margin: 160px auto;
`;

export const TitleWrap = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 30px;
`;
export const Title = styled.div`
  display: flex;

  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Wrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
 

`;



export const ReasonSelect = styled.select`
  height: 67px;
  border-radius: 8px;
  border: 1px solid;
  font-size: 18px;
`;

export const Input = styled.input`
  height: 67px;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid;
  font-size: 18px;
`;

export const LastDescription = styled.p`
  font-size: 15px;
  margin: 45px auto;
`;

export const ButtonWrap = styled.div`
display: flex;
width: 100%;
height: 67px;
justify-content: center;


`;
export const PressButton = styled.button`
  width: 45%;
  border-radius: 8px;
font-size: 18px;
font-weight: bold;

  & + & {
    margin-left: 10px;
  }

`;

export const BackLink = styled(Link)`
    text-decoration: none;
    color: black;
    
`;

export const RemoveLink = styled(Link)`
  text-decoration: none;
  color: gray;
  

`;