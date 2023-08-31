import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const GroupHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
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
  max-width: 100%; /* 이미지의 최대 너비를 100%로 설정 */
  height: auto; /* 높이 자동 조정 */
  margin: 10px 0; /* 이미지 간격을 조절할 수 있습니다. */
`;

export const ImgUpload = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 95%;


`;

export const ImgFileTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 90%;
  font-size: 13px;
  & div {
    padding: 5px;
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
  padding: 10px; /* 패딩 조정 */
`;

export const CameraBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
`;



export const Label = styled.label`
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
