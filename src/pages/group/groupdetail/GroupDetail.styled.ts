import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GroupImage = styled.div`
  height: 200px;
  background-color: #ddd;
  width: 100%;
`;

export const HashTag = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 10px;
  border-bottom: solid 1px #ddd;
  box-sizing: border-box;
`;

export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
  margin: 20px 0;
  height: 100%;
  box-sizing: border-box;
  border: solid 1px #ddd;
  padding: 10px;
  width: 90%;
  border-radius: 10px;
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
export const ScheduleBox = styled.div`
  box-sizing: border-box;
  border: solid 1px #ddd;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  margin: 15px 0;

  & div {
    line-height: 20px;
  }
`;

export const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 15px;
`;

export const MemberList = styled.li`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 15px 0;
`;

export const Member = styled.div`
  font-size: 20px;
  height: 40px;
  border-bottom: solid 1px #ddd;
`;

export const MemberImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;
  margin: auto;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

