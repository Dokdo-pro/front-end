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
  width: 420px;
  text-align: left;
`;
export const Title = styled.div`
    display:flex;
    
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const Description = styled.p`
    font-size: 16px;

`;

export const Wrapper = styled.form`
  width: 420px;
  margin: 51px 27px 16px 27px;
  justify-content: center;

`;
export const FormTag = styled.div`
display: flex;
margin-top: 15px;
margin-bottom: 3px;
`;
export const Tag = styled.div`
    display: flex;
    justify-items: left;

`;
export const TagPlus =  styled.div`
display: flex;
    color: red;
    font-size: 13px;
    margin-left: 5px;

`;
export const FormInput = styled.div`
    display: flex;


`;

export const Input = styled.input`
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 37px;
  border-radius: 8px;

`;

export const Egoll = styled.div`
    margin: 0 5px;
    font-size: 1.3rem;   
`;

export const EmailInput = styled(Input)`
  width: 130px;
`;

export const EmailSelect = styled.select`
    width: 130px;
    font-size: 16px;
`;


export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
`;

export const DupleButton = styled(InputButton)`
 width: 130px;
 margin-left: 10px;
`;

export const GenderButton = styled(InputButton)`  
    width: 50%;

 &+& {
    margin-left: 10px;
 } 
`;

export const Wrapper2 = styled(Wrapper)`
margin: 10px 27px 16px 27px;

`

export const CheckWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  background-color: lightgray;
  padding: 10px 10px 15px 10px;

  
`
export const CheckLabel = styled.label`
display: flex;
font-size: 18px;
padding: 0 10px 20px 10px;
`
export const CheckInput = styled.input`
  margin-right: 8px;
`

export const AllCheckLabel = styled(CheckLabel)`
  font-size: 1.2rem;
  border-bottom: 1px solid #bcbcbc;
  padding: 15px 10px;
`;


export const CheckBox = styled.div`
  margin-top: 20px;
`;

export const SubmitButton = styled(InputButton)`
  width: 80%;
  display: flex;
 margin: 0 auto 10px auto;
 
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: black;
`;