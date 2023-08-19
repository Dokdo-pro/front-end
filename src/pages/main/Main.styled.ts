import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
  height: 300px;
  margin: 20px 0;
`;

export const ImageRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
  width: 90%;
`;

export const StyledLink = styled(Link)`
  margin: 20px 0;
  color: gray;
  text-decoration: none;
  cursor: pointer;
`;
