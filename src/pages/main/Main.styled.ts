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
  align-items: center;
  width: 90%;
  margin: 20px 0;
`;

export const GroupTop10 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 15px solid #f1f1f1;
  width: 474px;
  margin-bottom: 20px;
`;

export const GroupTopTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  margin: 10px 0 5px 0;
`;

export const BooksTop10 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #f1f1f1;
  width: 474px;
  margin: 15px;
`;

export const BooksTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  margin: 10px 0 5px 0;
`;
