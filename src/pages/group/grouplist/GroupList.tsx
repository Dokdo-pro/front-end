import React, { useState } from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import Slider4 from '../../../components/common/slider/Slider4';
import * as GL from './GroupList.Styled';
import BoardBox from '../../../components/common/boardbox/BoardBox';
import SelectBox from '../../../components/common/selectbox/SelectBox';

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
  { value: '', label: '모임기간' },

  { value: '3일', label: '3일' },
  { value: '7일', label: '7일' },
  { value: '10일', label: '10일' },
];

const ages = [
  { value: '', label: '연령' },

  { value: '청소년', label: '청소년' },
  { value: '20대', label: '20대' },
  { value: '30대', label: '30대' },
  { value: '40대이상', label: '40대이상' },
];

const keywords = [
  { value: '', label: '키워드' },

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

const GroupList = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const [clickedInfo, setClickedInfo] = useState<string[]>([]);

  const handleOptionClick = (optionLabel: string) => {
    setClickedInfo([...clickedInfo, optionLabel]);
  };

  const handleDeleteClick = (index: number) => {
    const updatedInfo = [...clickedInfo];
    updatedInfo.splice(index, 1);
    setClickedInfo(updatedInfo);
  };

  return (
    <GL.Wrapper>
      <SearchInput />
      <Slider4 />
      <GL.ChoiceBox>
        <GL.ChoiceBoxTitle>
          내게 맞는 독서 <br />
          토론 모임을 찾아보세요!
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
                options={ages}
                value={selectedAge}
                onChange={event => {
                  setSelectedAge(event.target.value);
                  handleOptionClick(event.target.value);
                }}
              />
            </li>
            <li>
              <SelectBox
                options={keywords}
                value={selectedKeyword}
                onChange={event => {
                  setSelectedKeyword(event.target.value);
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
          {Array(10)
            .fill('')
            .map((v, i) => (
              <BoardBox key={i} />
            ))}
        </GL.ChoiceGroupBoard>
      </GL.ChoiceImageGroup>
    </GL.Wrapper>
  );
};

export default GroupList;
