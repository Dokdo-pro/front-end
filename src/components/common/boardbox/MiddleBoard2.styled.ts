import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #ddd;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  width: 65%;
  overflow: hidden;
`;

export const TextImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
  & div {
    padding: 4px 4px 4px 6px;
    font-size: 15px;
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 85%;
  background-color: #fff7ec;
  object-fit: cover;
  margin-bottom: 7px;
  box-sizing: border-box;
  overflow: hidden;
  object-fit: cover;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  width: 90%;
  height: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px;
`;

export const GroupName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const GroupIntro = styled.div`
  width: 95%;
  height: 70px;
  color: #707070;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
