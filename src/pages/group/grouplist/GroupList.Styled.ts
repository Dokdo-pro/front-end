import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 474px;
`;

export const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  text-align: center;
`;

export const HashTagBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;

  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px 0;
`;
export const HashTag = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 40px;
`;

export const ClickBox = styled.div`
  height: 100px;
  box-sizing: border-box;
  border: solid 1px #ddd;
  width: 90%;
  padding: 20px;
  margin-bottom: 15px;
`;

export const ChoiceImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dedede;
`;

export const ChoiceSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 10px 10px;
`;

export const ChoiceGroupBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const ChoiceTitle = styled.div`
  font-size: 25px;
`;
