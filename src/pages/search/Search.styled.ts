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
  height: 70px;
`;
export const TagList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & div {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
    height: 100%;
    border: solid 1px #ddd;
    border-radius: 15px;
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

  background-color: yellow;
`;

export const BookInfo = styled.div`
  margin: 15px 0;
`;
