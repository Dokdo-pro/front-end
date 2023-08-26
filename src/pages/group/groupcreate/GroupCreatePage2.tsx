import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      {/* ... 생략 ... */}
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="모임지역을 입력하세요."
      />
      <input
        type="text"
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder="연령을 입력하세요."
      />
      <input
        type="text"
        value={inputTag}
        onChange={e => setInputTag(e.target.value)}
        placeholder="키워드를 입력하세요."
      />
      <button onClick={handleAddTag}>태그 추가</button>
      <button onClick={handleSubmit}>다음</button>
    </div>
  );
};

export default GroupCreatePage2;
