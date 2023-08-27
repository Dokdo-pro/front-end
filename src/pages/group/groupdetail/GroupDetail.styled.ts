import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const GroupName = styled.div`
  width: 90%;
  padding: 10px;
  display: flex;
  font-size: 13px;
`;

// 이미지 유압프레스로 들어가게 해야 함
export const GroupImage = styled.div`
  text-align: right;
  height: 100%;
  width: 474px;
  overflow: hidden;

  & img {
    width: 100%;
  }
`;

export const EditButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin: 10px;
  padding: 10px;

  & div {
    background-color: transparent;
  }
`;

export const HashTag = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 50px;
`;

export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  height: 400px;

  box-sizing: border-box;
  border-bottom: solid 1px #ddd;
  width: 100%;
`;

export const GroupInfoBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #fff7ec;
`;

export const GroupInfoTitle = styled.div`
  width: 95%;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  text-align: center;
`;

export const GroupInfoTP = styled.div`
  display: flex;
  padding: 5px;

  & div {
    padding: 0 10px;
  }
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const ScheduleTitle = styled.div`
  text-align: left;
  font-size: 20px;
`;

export const ScheduleTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    border: none;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 20px;
    height: 30px;
    width: 80px;
    font-size: 13px;
  }
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
    padding: 3px;
  }
`;

export const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-top: solid 15px #ddd;
`;

export const MemberList = styled.li`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 15px 0;
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 40px;
  font-weight: bold;
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

export const ButtonDisplay = styled.div`
  display: flex;
  justify-content: center;
`;
