import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const ChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  text-align: center;
  width: 100%;
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
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 40px;
  margin-top: 20px;
`;

export const ClickBox = styled.div`
  box-sizing: border-box;
  border: solid 1px #ddd;
  width: 90%;
  height: 110px;
  padding: 10px;
  margin: 20px;
`;

export const ChoiceImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const ChoiceSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-top: 10px;
`;

export const ChoiceGroupBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const ChoiceBoxTitle = styled.div`
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
`;

export const ChoiceTitle = styled.div`
  font-size: 25px;
`;

export const ClickedInfoWrapper = styled.div`
  display: inline-block;
  margin: 10px 0 0 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 13px;
  height: 18px;
`;

export const DeleteButton = styled.button`
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
`;
export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
`;
export const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
  width: 90%;
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  background-color: white;
  border: 1px solid #ddd;
  height: 38px;
  border-radius: 20px;
  margin-bottom: 20px;

  & div {
    font-size: 15px;
  }
`;
