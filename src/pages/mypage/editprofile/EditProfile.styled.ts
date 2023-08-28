import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px auto 0 auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const UserIcon = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 22px;
`;
export const IconDes = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #a8a8a8;
  margin-top: 5px;
  
`;
export const FormTag = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 5px;
`;
export const Tag = styled.div`
  display: flex;
  justify-items: left;
  color: #000000;
`;
export const TagPlus = styled.div`
  display: flex;
  font-size: 12px;
  margin-left: 5px;
  color: ${({ className }) => (className === 'success' ? 'green' : 'red')};
`;
export const FormInput = styled.div`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  font-size: 12px;
  width: 100%;
  height: 37px;
  border: none;
  border-radius: 8px;
  background-color: #a8a8a8;
  padding-left: 10px;
`;



export const Email = styled(Input)`
  width: 100%;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: #84614b;
  cursor: pointer;
  width: 90%;
  margin: 30px auto 10px auto;
`;

export const SubmitLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;

export const DeleteWrap = styled.div`
  width: 85%;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
`;

export const DeleteAccount = styled(Link)`
 
  border-bottom: 1px solid #8c8c8c;
  font-size: 15px;

  margin: 30px 0 40px 0;
  color: #8C8C8C;

`;
