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
`;

export const FileInput = styled.input`
  background-color: white;
  color: #ddd;
  font-size: 12px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
