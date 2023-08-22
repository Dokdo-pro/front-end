import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const GroupBoardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

export const Boardbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border-bottom: solid 1px #ddd;
`;

export const BoardImg = styled.div`
  width: 420px;
  height: 130px;
  margin-bottom: 20px;
  border-radius: 8px;

  background-color: pink;
`;
export const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: auto;
  overflow: hidden;

  & div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
  }
`;
export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
export const GroupTitle = styled.div`
  display: flex;
  font-size: 20px;
  padding-right: 160px;
`;

export const BoardLink = styled(Link)`
height: 14px;
  font-size: 14px;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid #000000;
  display: flex;
`;

export const ContentWrap = styled.div`
  width: 420px;

`;
export const ContentBox = styled.div`
  font-size: 13px;
  color: gray;
margin: 4px 8px 0 8px;

`;
