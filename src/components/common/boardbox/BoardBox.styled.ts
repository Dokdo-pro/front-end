import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #ddd;
  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  height: 131px;
  padding: 10px;
  margin: 10px 0;
  background-color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(1);
  }
`;

export const TextBox = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  width: 285px;
  height: 95%;
  overflow: hidden;
`;

export const ImgBox = styled.div`
  width: 104px;
  height: 104px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden; // 추가
  display: flex; // 추가
  align-items: center; // 추가
  justify-content: center; // 추가
  box-sizing: border-box;
  border: 1px solid #ddd;

`;

export const Img = styled.img`
  width: 100%; // 이미지의 크기를 컨테이너에 맞게 설정
  height: 100%;
  object-fit: cover; // 이미지 비율 유지하면서 컨테이너에 꽉 차도록 설정
  border-radius: 20px;
`;
export const HashTagDisplay = styled.div`
  display: flex;
  & div {
    margin-right: 7px;
  }
`;

export const HashTags = styled.div`
  border: none;
  height: 20px;
  border-radius: 20px;
  background-color: #fff7ec;
  color: #84614b;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  padding: 2px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  white-space: nowrap;
`;

export const GroupName = styled.div`
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 600;
`;

export const Intro = styled.div`
  width: 95%;
  color: #707070;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 3px 0;
`;

export const Members = styled.div`
  color: #84614b;
  font-size: 12px;
  font-weight: 500;
`;

export const Place = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  color: #7e7e7e;
  font-size: 14px;
  font-weight: 500;
`;
