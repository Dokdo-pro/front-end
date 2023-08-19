import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-top: 1px solid black;
  font-size: 13px;
  background-color: yellow;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333; 
  font-size: 14px;
  margin: 8px;

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }
`;