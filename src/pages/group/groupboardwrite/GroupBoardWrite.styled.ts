import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const TitleWrite = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  border-bottom: 1px solid #ddd;
  & div {
    padding: 10px;
  }

  textarea {
    border: none;
    width: 100%;
    resize: none;
    padding: 20px 20px 0 20px;
    outline: none;
    font-size: 16px;
  }
`;

export const WriteBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 95%;
  border-bottom: 1px solid #ddd;
  & div {
    padding: 10px;
  }

  textarea {
    border: none;
    width: 95%;
    resize: none;
    padding: 20px;
    outline: none;
    font-size: 16px;
  }
`;

export const UploadImage = styled.img`
  max-width: 95%;
  max-height: 100%;
`;

export const ImgUpload = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 90%;

  & input[type='file'] {
    display: none;
    width: 100px;
    height: 100px;
  }
`;

export const CameraImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px;
`;

export const CameraBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
`;

export const FileInput = styled.input`
  background-color: white;
  color: #ddd;
  font-size: 12px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
export const TypeSelect = styled.select`
  // 필요한 스타일 속성을 여기에 추가
`;
