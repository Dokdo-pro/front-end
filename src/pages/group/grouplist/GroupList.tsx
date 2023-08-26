import React, { useState, useEffect } from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import * as GL from './GroupList.Styled';
import BoardBox from '../../../components/common/boardbox/BoardBox';
import SelectBox from '../../../components/common/selectbox/SelectBox';
import axios from 'axios';

const regions = [
  { value: '', label: '지역' },
  { value: '서울', label: '서울' },
  { value: '부산', label: '부산' },
  { value: '인천', label: '인천' },
  { value: '대구', label: '대구' },
  { value: '울산', label: '울산' },
  { value: '세종', label: '세종' },
  { value: '전남', label: '대전' },
  { value: '전북', label: '전북' },
  { value: '경남', label: '경남' },
  { value: '경북', label: '경북' },
  { value: '제주', label: '제주' },
  { value: '강원', label: '강원' },
  { value: '광주', label: '광주' },
  { value: '경기', label: '경기' },
  { value: '충남', label: '충남' },
  { value: '충북', label: '충북' },
];

const durations = [
  { value: '', label: '모임 일정' },
  { value: '월요일', label: '월요일' },
  { value: '화요일', label: '화요일' },
  { value: '수요일', label: '수요일' },
  { value: '목요일', label: '목요일' },
  { value: '금요일', label: '금요일' },
  { value: '토요일', label: '토요일' },
  { value: '일요일', label: '일요일' },
];

const ages = [
  { value: '', label: '연령' },
  { value: '무관', label: '무관' },
  { value: '청소년', label: '청소년' },
  { value: '20대', label: '20대' },
  { value: '30대', label: '30대' },
  { value: '40대', label: '40대' },
  { value: '50대', label: '50대' },
  { value: '60대', label: '60대' },
  { value: '70대', label: '70대' },
];

const Genre = [
  { value: '', label: '도서 장르' },

  { value: '철학', label: '철학' },
  { value: '인문학', label: '인문학' },
  { value: '소설', label: '소설' },
  { value: '자기계발', label: '자기계발' },
  { value: '시/수필', label: '시/수필' },
  { value: '경제', label: '경제' },
  { value: '사회과학', label: '사회과학' },
];

const sortOptions = [
  { value: '', label: '좋아요' },
  { value: '좋아요', label: '좋아요' },
  { value: '최근순', label: '최근순' },
];

// API 요청 함수 추가
async function fetchAllGroupData() {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/group?orderBy=popularity',
    );
    return response.data.data; // 서버 응답에서 실제 그룹 데이터를 반환
  } catch (error) {
    throw error;
  }
}

const GroupList = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [clickedInfo, setClickedInfo] = useState<string[]>([]);
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllGroupData();
        setGroupData(data);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
      }
    }

    fetchData();
  }, []);

  const handleOptionClick = (optionLabel: string) => {
    const updatedInfo = [...clickedInfo];

    if (updatedInfo.length < 5) {
      updatedInfo.push(optionLabel);
    } else {
      alert('태그는 5개까지만 선택 가능합니다');
    }

    setClickedInfo(updatedInfo);
  };

  const handleDeleteClick = (index: number) => {
    const updatedInfo = [...clickedInfo];
    updatedInfo.splice(index, 1);
    setClickedInfo(updatedInfo);
  };

  return (
    <GL.Wrapper>
      <SearchInput />
      <GL.ChoiceBox>
        <GL.ChoiceBoxTitle>
          내게 맞는 독서 <br /> 토론 모임을 찾아보세요📚
        </GL.ChoiceBoxTitle>
        <GL.HashTagBox>
          <GL.HashTag>
            <li>
              <SelectBox
                options={regions}
                value={selectedRegion}
                onChange={event => {
                  setSelectedRegion(event.target.value);
                  handleOptionClick(event.target.value);
                }}
              />
            </li>
            <li>
              <SelectBox
                options={durations}
                value={selectedDuration}
                onChange={event => {
                  setSelectedDuration(event.target.value);
                  handleOptionClick(event.target.value);
                }}
              />
            </li>
            <li>
              <SelectBox
                options={Genre}
                value={selectedGenre}
                onChange={event => {
                  setSelectedGenre(event.target.value);
                  handleOptionClick(event.target.value);
                }}
              />
            </li>
            <li>
              <SelectBox
                options={ages}
                value={selectedAge}
                onChange={event => {
                  setSelectedAge(event.target.value);
                  handleOptionClick(event.target.value);
                }}
              />
            </li>
          </GL.HashTag>
          <GL.ClickBox>
            {clickedInfo.map((info, index) => (
              <GL.ClickedInfoWrapper key={index}>
                {info}
                <GL.DeleteButton onClick={() => handleDeleteClick(index)}>
                  X
                </GL.DeleteButton>
              </GL.ClickedInfoWrapper>
            ))}
          </GL.ClickBox>
        </GL.HashTagBox>
      </GL.ChoiceBox>
      <GL.ChoiceImageGroup>
        <GL.ChoiceSelect>
          <GL.ChoiceTitle>조건별 검색</GL.ChoiceTitle>
          <SelectBox
            options={sortOptions}
            value={selectedSort}
            onChange={event => {
              setSelectedSort(event.target.value);
            }}
          />
        </GL.ChoiceSelect>
        <GL.ChoiceGroupBoard>
          {groupData.map((groupItem, index) => (
            <BoardBox key={index} data={groupItem} />
          ))}
        </GL.ChoiceGroupBoard>
      </GL.ChoiceImageGroup>
    </GL.Wrapper>
  );
};

export default GroupList;
