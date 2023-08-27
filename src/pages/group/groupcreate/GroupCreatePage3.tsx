import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import {
  Container,
  Title,
  FormGroup,
  StepsContainer,
  StepCircle,
  Input,
  SubmitButton,
} from './GroupCreatePage3.Styled';
interface GroupCreatePage3Data {
  name: string;
  introduction: string;
  location: string;
  age: string;
  tag: string[];
  genre: string;
  day: string;
  place: string;
}

interface GroupCreatePage3Props {
  data: GroupCreatePage3Data;
  updateData: (newData: Partial<GroupCreatePage3Data>) => void;
}

const GroupCreatePage3: React.FC<GroupCreatePage3Props> = ({
  data,
  updateData,
}) => {
  const [genre, setGenre] = useState(data.genre);
  const [day, setDay] = useState(data.day);
  const [place, setPlace] = useState(data.place);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const handlePageSubmit = async () => {
    console.log('GroupCreatePage3: handlePageSubmit is called');

    updateData({
      genre,
      day,
      place,
    });

    setLoading(true);
    setError(null);

    const payload = {
      ...data,
      genre,
      day,
      place,
    };

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/group/',
        payload,
        { withCredentials: true },
      );
      console.log('Response from the server:', response.data);
    } catch (err) {
      console.error('Error while sending data to the API:', err);

      if ((err as AxiosError).isAxiosError) {
        const axiosError = err as AxiosError;
        setError({ message: axiosError.message });
      } else {
        setError({ message: 'An unknown error occurred.' });
      }
    } finally {
      setLoading(false);
    }
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
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <FormGroup>
        <label>장르 </label>
        <Input
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
          placeholder="장르를 입력하세요."
        />
      </FormGroup>
      <FormGroup>
        <label>요일 </label>
        <Input
          type="text"
          value={day}
          onChange={e => setDay(e.target.value)}
          placeholder="요일을 입력해주세요."
        />
      </FormGroup>
      <FormGroup>
        <label>장소 </label>
        <Input
          type="text"
          value={place}
          onChange={e => setPlace(e.target.value)}
          placeholder="장소를 입력하세요."
        />
      </FormGroup>
      <SubmitButton onClick={handlePageSubmit}>확인</SubmitButton>
    </Container>
  );
};

export default GroupCreatePage3;
