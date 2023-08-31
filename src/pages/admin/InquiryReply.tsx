import React, { useState } from 'react';
// import Axios from 'axios';
import * as Reply from '@/pages/admin/InquiryReply.styled';

function InquiryReply() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  /*   const onSubmitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        'http://localhost:3000/api',
        {
          title,
          content,
        },
      );
    } catch (e) {
      console.error(e);
    }
  };
  onClick={onSubmitHandler}
*/
  return (
    <Reply.Container>
      <Reply.Wrapper>
        <Reply.Headline>문의사항 답변</Reply.Headline>
        <Reply.Form>
          <Reply.Title>
            <Reply.Name1>제목</Reply.Name1>
            <Reply.Input
              rows={2}
              value={title}
              onChange={e => setTitle(e.target.value)}
              maxLength={30}
              placeholder=" 30자 이내로 제목을 입력해 주세요"
              required
            />
          </Reply.Title>
          <Reply.Number>{title.length}/30자</Reply.Number>
          <Reply.Content>
            <Reply.Name2>내용</Reply.Name2>
            <Reply.Detail
              rows={17}
              value={content}
              onChange={e => setContent(e.target.value)}
              maxLength={500}
              placeholder="500자 이내로 답변 내용을 입력해 주세요"
              required
            />
          </Reply.Content>
          <Reply.Number>{content.length}/500자</Reply.Number>
        </Reply.Form>
        <Reply.Button type="submit">등록</Reply.Button>
      </Reply.Wrapper>
    </Reply.Container>
  );
}

export default InquiryReply;
