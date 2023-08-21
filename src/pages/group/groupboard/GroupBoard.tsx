import React from 'react';
import * as GB from './GorupBoard.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';

const GroupBoard = () => {
  return (
    <GB.Wrapper>
      <SearchInput />
      <GB.GroupBoardList>
        {Array(5)
          .fill('')
          .map((v, i) => (
            <GB.Boardbox key={i}>
              <GB.BoardLeft>
                <GB.BoardTitle>게시글 제목</GB.BoardTitle>
                <GB.BoardContent>
                  오늘 어쩌고 어쩌고 정모를
                  했습니다dddddddddddasdasdasdasdasdasdasdasasdasd
                </GB.BoardContent>
                <GB.User>
                  <img src="/" alt="게시자 이름" />
                  <div>최형욱</div>
                </GB.User>
              </GB.BoardLeft>
              <GB.BoardImg>
                <img src="" alt="게시된 이미지" />
              </GB.BoardImg>
            </GB.Boardbox>
          ))}
      </GB.GroupBoardList>
    </GB.Wrapper>
  );
};

export default GroupBoard;
