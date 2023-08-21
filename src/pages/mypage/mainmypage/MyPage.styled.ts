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

export const NickName =styled.p`
    font-size: 18px;
    margin-top: 20px;

`
export const Group = styled.div`
    margin-bottom: 20px;
`

export const ManageList = styled.div`
  display: flex;
  color: black;
  
  justify-content: flex-start;
  flex-direction: column;
  width: 420px;
  margin: 0 0 20px 10px;
  
  border-bottom: 1px solid #2e2e2e;
  
`;
export const ManageTitle = styled.p`
  font-size: 25px;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const ManageLink = styled(Link)`
  margin-bottom: 18px;
  text-decoration: none;
  font-size: 19px;
  color: black;
`;

export const Logout = styled.p`
    border-bottom: 1px solid #2e2e2e;
    font-size: 15px;
`
export const LogoutLink = styled(Link)`
  text-decoration: none;
  color: black;
`;