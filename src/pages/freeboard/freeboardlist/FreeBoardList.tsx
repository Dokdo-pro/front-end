import React from 'react';
import * as FB from './FreeBoardList.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import BoardBox from '../../../components/common/boardbox/BoardBox';
import MoreButton from '../../../components/common/morebutton/MoreButton';

const FreeBoardList = () => {
  return (
    <FB.Wrapper>
      <SearchInput />
      <div>
        <div>우리들의 독도 이야기!</div>
      </div>
      <FB.FreeBoardBox>
        <FB.FreeBoardSelectBox>
        <FB.FreeBoardSelect>
          <div>등록된 글 개수</div>
          <div>셀렉트 박스</div>
        </FB.FreeBoardSelect>
        <FB.Region>
          <div>클릭박스 구현</div>
        </FB.Region>
        </FB.FreeBoardSelectBox>
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <MoreButton />
      </FB.FreeBoardBox>
    </FB.Wrapper>
  );
};

export default FreeBoardList;
