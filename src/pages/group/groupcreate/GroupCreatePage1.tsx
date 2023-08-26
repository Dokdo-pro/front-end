// GroupCreatePage1.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import {
  Container,
  Title,
  FormGroup,
  FileInputContainer,
  StepsContainer,
  StepCircle,
  Input,
} from './GroupCreatePage1.Styled';

interface GroupCreatePage1Data {
  name: string; // 변경: title -> name
  introduction: string; // 변경: description -> introduction
  //image: File | null;
}

interface GroupCreatePage1Props {
  data: GroupCreatePage1Data;
  updateData: (newData: Partial<GroupCreatePage1Data>) => void;
  handleNext: () => void;
}

const GroupCreatePage1: React.FC<GroupCreatePage1Props> = ({
  data,
  updateData,
  handleNext,
}) => {
  const [name, setName] = useState(data.name); // 변경: title -> name
  const [introduction, setIntroduction] = useState(data.introduction); // 변경: description -> introduction
  //const [image, setImage] = useState<File | null>(data.image);
  const navigate = useNavigate(); // 추가
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 모임 정보 제출 로직
    updateData({
      name, // 변경: title -> name
      introduction, // 변경: description -> introduction
      //image,
    });

    handleNext();

    navigate('/create-group/step2');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      //(e.target.files[0]);
    }
  };
  return (
    <Container>
      <StepsContainer>
        <StepCircle>1</StepCircle>
        <StepCircle>2</StepCircle>
        <StepCircle>3</StepCircle>
        <StepCircle>4</StepCircle>
      </StepsContainer>
      <Title>
        새로운 독서 토론 모임을 <br /> 시작해볼까요?
      </Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label>모임명 </label>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="모임명을 입력하세요."
          />
        </FormGroup>
        <FormGroup>
          <label>모임소개 </label>
          <textarea
            value={introduction}
            onChange={e => setIntroduction(e.target.value)}
            placeholder="모임소개를 입력하세요."
          />
        </FormGroup>
        <FileInputContainer>
          <label>사진 업로드: </label>
          <input type="file" onChange={handleImageChange} />
        </FileInputContainer>
        <button type="submit">확인</button>
      </form>
    </Container>
  );
};

export default GroupCreatePage1;
