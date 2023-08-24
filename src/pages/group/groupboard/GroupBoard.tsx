import React from 'react';
import * as GB from './GorupBoard.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';

const GroupBoard = () => {
  return (
    <GB.Wrapper>
      <SearchInput />
      <GB.GroupBoardList>
        <GB.GroupBoardTitle>
         <div>모임 이름</div>
        </GB.GroupBoardTitle>
        {Array(5)
          .fill('')
          .map((v, i) => (
            <GB.Boardbox key={i}>
              <GB.BoardLeft>
                <GB.User>
                  <img src="/" alt="게시자 이름" />
                  <div>최형욱<br />8월13일</div>
                 
                </GB.User>
                {/* <GB.BoardTitle>게시글 제목</GB.BoardTitle> */}

                <GB.BoardContent>
                  오늘 어쩌고 어쩌고 정모를
                  했습니다dddddddddddasdasdasdasdasdasdasdasasdasd
                </GB.BoardContent>
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
