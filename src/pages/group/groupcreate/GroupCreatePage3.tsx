import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

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
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <input
        type="text"
        value={genre}
        onChange={e => setGenre(e.target.value)}
        placeholder="장르를 입력하세요."
      />
      <input type="text" value={day} onChange={e => setDay(e.target.value)} />
      <input
        type="text"
        value={place}
        onChange={e => setPlace(e.target.value)}
        placeholder="장소를 입력하세요."
      />
      <button onClick={handlePageSubmit}>다음</button>
    </div>
  );
};

export default GroupCreatePage3;
