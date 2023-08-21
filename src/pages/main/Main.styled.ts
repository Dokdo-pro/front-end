import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
`;

export const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  width: 90%;
`;

export const StyledLink = styled(Link)`
  margin: 20px 0;
  color: gray;
  text-decoration: none;
  cursor: pointer;
`;

export const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
