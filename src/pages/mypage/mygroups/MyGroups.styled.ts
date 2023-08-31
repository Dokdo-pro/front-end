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
  justify-content: center;
`;

export const MyGroupBoardBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const GroupBoardBox = styled.div`
  display: flex;
  border: 1px solid #8e8e8e;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 20px;
`;
export const BoardImg = styled.img`
  width: 75px;
  height: 75px;
  margin-left: 12px;
  background-color: #ddd;
  border-radius: 20px;
  overflow: hidden;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 285px;
  height: auto;
  overflow: hidden;
  margin-top: 3px;
  padding: 10px;
  & div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 6px;
  }
`;

export const GroupName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
export const GroupIntro = styled.div`
  font-size: 13px;
`;

export const GroupTags = styled.div`
  display: flex;
  
`;
export const GroupTag = styled.div`
  font-size: 8px;
  color: #84614b;

  background-color: #fdf8ef;
  border-radius: 15px;
  align-items: center;
  text-align: center;


  & + & {
    margin-left: 5px;
  }
`;
