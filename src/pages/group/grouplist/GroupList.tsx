import React from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import Slider from '../../../components/common/slider/Slider';
import * as GL from './GroupList.Styled';
import BoardBox from '../../../components/common/boardbox/BoardBox';
import MoreButton from '../../../components/common/morebutton/MoreButton';

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
            <li>셀렉트1</li>
            <li>셀렉트2</li>
            <li>셀렉트3</li>
            <li>셀렉트4</li>
            <li>셀렉트5</li>
          </GL.HashTag>
          <GL.ClickBox>클릭된 목록 박스</GL.ClickBox>
        </GL.HashTagBox>
      </GL.ChoiceBox>
      <GL.ChoiceImageGroup>
        <GL.ChoiceSelect>
          <div>조건별 검색</div>
          <div>셀렉트 박스</div>
        </GL.ChoiceSelect>
        <GL.ChoiceGroupBoard>
          {Array(3)
            .fill('')
            .map((v, i) => (
              <BoardBox key={i} />
            ))}
          <MoreButton />
        </GL.ChoiceGroupBoard>
      </GL.ChoiceImageGroup>
    </GL.Wrapper>
  );
};

export default GroupList;
