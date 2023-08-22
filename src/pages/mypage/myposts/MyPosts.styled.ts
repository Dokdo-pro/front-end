import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 45px auto 0 auto;
`;

export const Title = styled.p`
  display: flex;
  color: black;
  font-weight: bold;
  justify-content: flex-start;
  width: 420px;
  margin: 0 0 0 10px;
  font-size: 30px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px auto 10px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const GroupBoardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

export const Boardbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border: solid 1px #ddd;

  
`;

export const BoardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  width: 285px;
  height: auto;
  overflow: hidden;
  margin-top: 3px;

  & div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
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
  margin-bottom: 20px;
  
`;

export const BoardContent = styled.div`
  font-size: 13px;
  color: gray;
`;
