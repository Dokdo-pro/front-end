import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 70px auto 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 100px auto 10px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const CheckImg = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 40px;
`;

export const Description = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const GotoHome = styled.button`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  margin-top: 250px;
  background-color: #84614b;
`;

export const GotoHomeLink = styled(Link)`
  border: none;
text-decoration: none;
  color: white;
  font-size: 15px;
`;
