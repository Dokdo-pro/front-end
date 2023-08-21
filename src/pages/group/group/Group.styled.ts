import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 474px;
`;

export const GroupImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0;
  border-top: 1px soild #ddd;
  border-bottom: 1px soild #ddd;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HashTag = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
`;

export const DateText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    margin: 5px 0;
  }
`;

export const NoticeImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0;
  background-color: #ddd;
  border-top: 1px soild #ddd;
  border-bottom: 1px soild #ddd;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Section = styled.div`
  margin: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30px;
  border-bottom: solid 1px #ddd;
  padding-bottom: 10px;
`;
