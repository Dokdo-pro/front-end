import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleHeader = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100px;
  border-bottom: solid 1px black;
`;

export const Logo = styled.h1`
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 40px;
  white-space: normal;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;

export const Up = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px black;
  height: 40px;
  background-color: red;
`;

export const Down = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding: 10px;
  background-color: blue;
  color: white;
`;

export const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #333;
  list-style: none;
  color: white;
`;
