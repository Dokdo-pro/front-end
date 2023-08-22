import React from 'react';
import * as BWS from './BoardWriteSection.styled';

function BoardWriteSection() {
  return (
    <BWS.Select>
      <option value="">독도 이야기 자유게시판</option>
      <option value="">토론 모임 게시판</option>
      <option value="">토론 모임 사진첩</option>
    </BWS.Select>
  );
}

export default BoardWriteSection;
