import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const StyledGroupLink = styled(Link)`
  width: 90%;
  padding: 20px 0 10px 20px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  text-align: left;
`;
export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 90%;
  margin: 30px 0 15px 0;
  font-size: 20px;
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
  text-align: left;
`;

export const GroupList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
`;

export const GroupBoxTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const GroupTop10 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 15px solid #f1f1f1;
  width: 474px;
  margin: 20px;
`;

export const GroupTopTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  margin: 10px 0 5px 0;
  text-align: center;
`;

export const StyledHotGroupLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  & div {
    font-size: 14px;
    padding-top: 15px;
    font-weight: normal;
  }
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
  padding: 10px;
  margin: 10px 0 5px 0;
  text-align: center;
`;

export const StyledBookLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  & div {
    font-size: 14px;
    padding-top: 15px;
    font-weight: normal;
  }
`;
