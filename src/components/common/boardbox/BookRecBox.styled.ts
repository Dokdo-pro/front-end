import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 30px;
`;

export const BoxTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  width: 90%;
  height: 100%;
`;

export const BoxTitle = styled.div`
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.div`
  display: flex;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px;
`;

export const Img = styled.div`
  width: 115px;
  height: 115px;

  background-color: #fff9f1;
`;

export const Info = styled.div`
  margin: 15px 0 25px 0;
  width: 100%;

  & div {
    padding: 3px;
    text-align: start;
    font-size: 14px;
  }
`;

export const SliederBox = styled.div`
  display: flex;
  width: 100%;
`;
