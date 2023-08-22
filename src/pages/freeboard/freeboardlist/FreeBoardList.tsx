import React from 'react';
import * as FB from './FreeBoardList.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import BoardBox from '../../../components/common/boardbox/BoardBox';

const FreeBoardList = () => {
  return (
    <FB.Wrapper>
      <SearchInput />
      <FB.Title>
        <div>우리들의 독도 이야기!</div>
      </FB.Title>
      <FB.FreeBoardBox>
        <FB.FreeBoardSelectBox>
          <FB.FreeBoardSelect>
            <select>
              <option value="">최신순</option>
              <option value="">인기순</option>
            </select>
          </FB.FreeBoardSelect>
        </FB.FreeBoardSelectBox>
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
      </FB.FreeBoardBox>
    </FB.Wrapper>
  );
};

export default FreeBoardList;
