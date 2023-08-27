import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  FormGroup,
  StepsContainer,
  StepCircle,
  Input,
  SubmitButton,
  TagButton,
  KeywordGroup,
  KeywordInputGroup,
  TagList,
  Tag,
  RemoveTagButton,
} from './GroupCreatePage2.Styled';

interface GroupCreatePage2Data {
  location: string;
  age: string;
  tag: string[];
}
interface GroupCreatePage2Props {
  data: GroupCreatePage2Data;
  updateData: (newData: Partial<GroupCreatePage2Data>) => void;
  handleNext: () => void; // 이 줄을 추가합니다.
}

const GroupCreatePage2: React.FC<GroupCreatePage2Props> = ({
  data,
  updateData,
}) => {
  const navigate = useNavigate();

  const [location, setLocation] = useState(data.location);
  const [age, setAge] = useState(data.age);
  const [tag, setTag] = useState<string[]>(data.tag);
  const [inputTag, setInputTag] = useState<string>('');

  const handleAddTag = () => {
    if (inputTag) {
      setTag(prevTags => [...prevTags, inputTag]);
      setInputTag('');
    }
  };

  const handleSubmit = () => {
    updateData({ location, age, tag });
    handleNext();
  };

  const handleNext = () => {
    navigate('/create-group/step3');
  };
  const handleRemoveTag = (tagToRemove: string) => {
    setTag(prevTags => prevTags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Container>
      <StepsContainer>
        <StepCircle>1</StepCircle>
        <StepCircle>2</StepCircle>
        <StepCircle>3</StepCircle>
      </StepsContainer>
      <Title>
        독서 토론 모임에 대한 <br /> 정보를 설정해주세요
      </Title>
      <FormGroup>
        <label>모임지역 </label>
        <Input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="모임지역을 입력하세요."
        />
      </FormGroup>
      <FormGroup>
        <label>연령 </label>
        <Input
          type="text"
          value={age}
          onChange={e => setAge(e.target.value)}
          placeholder="연령을 입력하세요."
        />
      </FormGroup>
      <KeywordGroup>
        <label>키워드 </label>
        <KeywordInputGroup>
          <Input
            type="text"
            value={inputTag}
            onChange={e => setInputTag(e.target.value)}
            placeholder="키워드를 입력하세요. (최대 5개)"
          />
          <TagButton onClick={handleAddTag}>등록</TagButton>
        </KeywordInputGroup>
        <TagList>
          {tag.map(t => (
            <Tag key={t}>
              {t}
              <RemoveTagButton onClick={() => handleRemoveTag(t)}>
                x
              </RemoveTagButton>
            </Tag>
          ))}
        </TagList>
      </KeywordGroup>

      <SubmitButton onClick={handleSubmit}>다음</SubmitButton>
    </Container>
  );
};

export default GroupCreatePage2;
