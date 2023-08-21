import React from 'react';
import * as InquiryStyle from './Inquiry.styled';

function InquiryComponent() {

    return (
      <InquiryStyle.Container>
        <InquiryStyle.Title>문의하기</InquiryStyle.Title>
        <InquiryStyle.Wrapper>
        <></>
        <input type='text' placeholder='답변을 받을 이메일을 작성해주세요.' />
        <input type='text' maxLength={30} placeholder='제목을 30자 이내로 작성해주세요.' />
        <input type='text' maxLength={500} placeholder='문의하실 내용에 대해 500자 이내로 작성해주세요.'/>
        <>파일업로드</>
          <InquiryStyle.SubmitButton>취소하기</InquiryStyle.SubmitButton>
          <InquiryStyle.SubmitButton>제출하기</InquiryStyle.SubmitButton>
        </InquiryStyle.Wrapper>
      </InquiryStyle.Container>
    );
};

export default InquiryComponent;