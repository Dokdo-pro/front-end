import React from 'react';
import * as InquiredStyle from './InquiredSuccess.styled'
import CheckImg from '../../../assets/image/Check.png'

function InquiredSuccessComponent() {

    return (
      <InquiredStyle.Container>
        <InquiredStyle.Title>문의하기 완료</InquiredStyle.Title>
        <InquiredStyle.Wrapper>
        <InquiredStyle.CheckImg
          src={CheckImg}
          alt="완료 이미지"
        ></InquiredStyle.CheckImg>
        <InquiredStyle.Description>
          문의 내용이 접수되었습니다. <br /> 답변 완료시 메일로 보내드릴게요!
        </InquiredStyle.Description>
        <InquiredStyle.GotoHome value="홈으로" />
        </InquiredStyle.Wrapper>
      </InquiredStyle.Container>
    );
};

export default InquiredSuccessComponent;