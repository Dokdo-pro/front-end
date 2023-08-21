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
  margin: 70px auto 40px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

 
 export const UserIcon = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 80px;
 `

export const FormTag = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 3px;
`;
export const Tag = styled.div`
  display: flex;
  justify-items: left;
`;
export const TagPlus = styled.div`
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

export const Email = styled(Input)`
  width: 130px;
`;

export const EmailSelect = styled.select`
  width: 130px;
  font-size: 16px;
`;

export const GenderButton = styled.button`
  width: 50%;

  & + & {
    margin-left: 10px;
  }
`;


export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  width: 80%;
  margin: 0 auto 10px auto;
`;

export const SubmitLink = styled(Link)`
text-decoration: none;
color: black;
`;
export const DeleteAccount = styled.p`
  border-bottom: 1px solid #2e2e2e;
  font-size: 15px;
`;