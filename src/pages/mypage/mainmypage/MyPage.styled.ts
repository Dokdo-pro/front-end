import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 15px auto 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 10px auto 20px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const UserIcon = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
export const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  width: 300px;
  height: auto;
  overflow: hidden;
`;

export const NickName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SimpleIntro = styled.div`
  font-size: 14px;
  color: #848484;
  padding-top: 15px;
`;
export const Group = styled.div`
  margin-bottom: 20px;
`;

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
  font-size: 16px;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const ManageLink = styled(Link)`
  margin-bottom: 18px;
  text-decoration: none;
  font-size: 15px;
  color: black;
`;

export const Logout = styled.button`
border: none;
text-decoration: none;
  border-bottom: 1px solid #2e2e2e;
  font-size: 15px;
  text-decoration: none;
  color: #848484;
  cursor: pointer;
`;
