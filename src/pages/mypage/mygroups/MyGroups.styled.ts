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
  margin: 10px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: center;
`;

export const EmptyPage = styled.div`
  font-size: 30px;
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
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const GroupBoardBox = styled.div`
  display: flex;
  border: 1px solid #d7d7d7;
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

  width: 300px;
  height: auto;
  overflow: hidden;
  margin-top: 3px;
  padding: 15px;

  & div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px;
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
  margin-top: 1px;
  
  
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

export const SectionLine = styled.div`
width: 474px;
border: 1px solid #d7d7d7;
margin: 10px 0;

`
