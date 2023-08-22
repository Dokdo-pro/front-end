import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const Logo = styled.div`
  font-size: 30px;
  margin: 30px;
`;

export const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  width: 90%;
  height: 100%;
`;
export const TagList = styled.div`
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;

  & div {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    height: 40px;
    border: solid 1px #ddd;
    border-radius: 15px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const TagBoxTitle = styled.div`
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const BookRecBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  width: 90%;
  height: 100%;
`;

export const BookRecBoxTitle = styled.div`
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const BookRecList = styled.div`
  display: flex;
`;

export const BookImgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const BookImg = styled.div`
  width: 100%;
  height: 193px;

  background-color: #fff7ec;
`;

export const BookInfo = styled.div`
  margin: 15px 0;

  & div {
    padding: 5px;
  }
`;

export const GorupBoxDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const GroupSmallBox = styled.div`
  display: flex;
`;

export const GroupBox = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1px solid #ddd;
  width: 195px;
  height: 90px;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const GroupBoxImg = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  background-color: #fff7ec;
  border-radius: 20px;
`;

export const GroupBoxInfo = styled.div`
  font-size: 8px;
  margin-left: 5px;

  & div {
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 3px;
  }
`;
