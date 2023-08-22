import React from 'react';
import * as InquiryStyle from './Inquiry.styled';

function InquiryComponent() {
  return (
    <InquiryStyle.Container>
      <InquiryStyle.Title>1:1 문의하기</InquiryStyle.Title>
      <InquiryStyle.Wrapper>
        <InquiryStyle.FormInput>
          <InquiryStyle.ReasonSelect
            id="PBreason_val"
            name="is_PBReason"
            className="select_PBreason"
          >
            <option value="">문의 유형</option>
            <option value="service_pb">서비스 관련</option>
            <option value="text_pb">테스트 관련</option>
            <option value="user_pb">불량 유저 신고</option>
          </InquiryStyle.ReasonSelect>
        </InquiryStyle.FormInput>
        <InquiryStyle.FormInput>
          <InquiryStyle.Input
            type="text"
            placeholder="답변을 받을 이메일을 작성해주세요."
          />
        </InquiryStyle.FormInput>
        <InquiryStyle.FormInput>
          <InquiryStyle.Input
            type="text"
            maxLength={30}
            placeholder="제목을 30자 이내로 작성해주세요."
          />
        </InquiryStyle.FormInput>
        <InquiryStyle.FormInput>
          <InquiryStyle.ContentInput
            type="text"
            id="content"
            maxLength={500}
            placeholder="문의하실 내용에 대해 500자 이내로 작성해주세요."
          />
        </InquiryStyle.FormInput>

        <>파일업로드</>

        <InquiryStyle.SubmitButton>
          <InquiryStyle.SubmitLink to="/user/mypage/inquiredsuccess">접수하기</InquiryStyle.SubmitLink>
        </InquiryStyle.SubmitButton>
      </InquiryStyle.Wrapper>
    </InquiryStyle.Container>
  );
}

export default InquiryComponent;
