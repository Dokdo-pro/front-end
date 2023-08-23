import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 474px;
`;

export const GroupBoardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

export const Boardbox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border-bottom: solid 1px #ddd;
  background-color: white;
`;

export const BoardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  width: 285px;
  height: auto;
  overflow: hidden;

  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
  }
`;

export const User = styled.div`
  display: flex;

  & img {
    width: 30px;
    height: 30px;
    background-color: #ddd;
    border-radius: 50%;
  }
  & div {
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
`;

export const BoardImg = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 15px;
  overflow: hidden;
`;

export const BoardTitle = styled.div`
  font-size: 18px;
`;

export const BoardContent = styled.div`
  font-size: 13px;
  color: gray;
`;
