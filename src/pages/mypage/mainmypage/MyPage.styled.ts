import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 474px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 30px auto 0 auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const UserIcon = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
`;

export const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  width: 73%;
  height: auto;
  overflow: hidden;
`;

export const NickName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const SimpleIntro = styled.div`
  font-size: 18px;
  color: #868686;
  padding-top: 15px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 40px;
`;

export const Title = styled.p`
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
  color: black;
  display: flex;
  padding-right: 305px;
`;

export const ManageList = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  width: 100%;
  margin-bottom: 28px;
  margin-top: 53px;

  border-bottom: 1px solid #d7d7d7;

  & p {
    margin-left: 30px;
    font-size: 20px;
  }
`;

export const ManageList2 = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  width: 100%;
  

  & p {
    font-size: 20px;
    margin-left: 30px;
  }
`;

export const ManageTitle = styled.p`
  
  margin-bottom: 20px;
  font-weight: bold;
`;

export const ManageLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: black;

  border-bottom: 1px solid #2e2e2e;
`;

export const ManageLink2 = styled(Link)`
  margin-bottom: 20px;
  text-decoration: none;
  font-size: 12px;
  color: black;
  & p {

    font-size: 18px;
  }
`;

export const Logout = styled.button`
  border: none;
  text-decoration: none;
  border-bottom: 1px solid #a5a5a5;
  font-size: 15px;
  text-decoration: none;
  color: #a5a5a5;
  background-color: white;
  cursor: pointer;
  margin: 15px 0 16px 320px;
`;
