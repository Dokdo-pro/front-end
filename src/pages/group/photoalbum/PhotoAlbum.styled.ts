import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const GroupPhotoTitle = styled.div`
  height: 40px;
  width: 100%;
  background-color: #84614b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const InputDisplay = styled.div`
  margin-top: 62px;
`;

export const PhotoList = styled.div`
  width: 90%;
  height: 100%;
`;

export const PhotoBoardBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
  box-sizing: border-box;
  border-radius: 15px;
`;

export const PhotoImg = styled.div`
  width: 100%;
  height: 150px;
  background-color: #fff7ec;
  overflow: hidden;
  border-radius: 15px;
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7ec;
  overflow: hidden;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & div {
    margin: 15px 5px;
  }
`;

export const PhotoBoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 5px 0;
  padding: 5px;
`;

export const PhotoBoardTitle = styled.div`
  margin-top: 10px;
`;
