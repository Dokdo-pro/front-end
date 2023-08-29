import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const GroupBoardTitle = styled.div`
  height: 40px;
  width: 100%;
  background-color: #fdf8ef;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const InputDisplay = styled.div`
  margin-top: 62px;
`;

export const GroupBoardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;

export const Boardbox = styled.div`
  width: 90%;
  height: 141px;
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
  height: 100px;
  overflow: hidden;

  & div {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 30px;
    height: 30px;
    background-color: #ddd;
    border-radius: 50%;
  }
  & div {
    display: flex;
    padding-left: 10px;
    font-size: 15px;
  }
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 2px;
`;

export const BoardContent = styled.div`
  font-size: 13px;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 2px;
`;
