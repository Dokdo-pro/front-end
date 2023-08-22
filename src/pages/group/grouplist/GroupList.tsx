import React from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import Slider from '../../../components/common/slider/Slider';
import * as GL from './GroupList.Styled';
import BoardBox from '../../../components/common/boardbox/BoardBox';

const GroupList = () => {
  return (
    <GL.Wrapper>
      <SearchInput />
      <Slider />
      <GL.ChoiceBox>
        <div>
          내게 맞는 독서
          <br />
          토론 모임을 찾아보세요!
        </div>
        <GL.HashTagBox>
          <GL.HashTag>
            <li>
              <select>
                <option value="">지역</option>
              </select>
            </li>{' '}
            <li>
              <select>
                <option value="">모집기간</option>
              </select>
            </li>{' '}
            <li>
              <select>
                <option value="">연령</option>
              </select>
            </li>{' '}
            <li>
              <select>
                <option value="">키워드</option>
              </select>
            </li>
          </GL.HashTag>
          <GL.ClickBox>서울 서초구x</GL.ClickBox>
        </GL.HashTagBox>
      </GL.ChoiceBox>
      <GL.ChoiceImageGroup>
        <GL.ChoiceSelect>
          <GL.ChoiceTitle>조건별 검색</GL.ChoiceTitle>
          <select name="" id="">
            <option value="">좋아요 순</option>
          </select>
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
