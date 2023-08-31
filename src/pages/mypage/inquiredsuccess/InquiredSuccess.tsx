import React from 'react';
import * as InquiredStyle from '@/pages/mypage/inquiredsuccess/InquiredSuccess.styled'
import CheckImg from '@/assets/img/Check.png'

function InquiredSuccessComponent() {

    return (
      <InquiredStyle.Container>
        <InquiredStyle.Wrapper>
          <InquiredStyle.CheckImg
            src={CheckImg}
            alt="완료 이미지"
          ></InquiredStyle.CheckImg>
          <InquiredStyle.Description>
            문의 내용이 접수되었습니다.
          </InquiredStyle.Description>
          <InquiredStyle.Description>
            답변 완료시 메일로 보내드릴게요!
          </InquiredStyle.Description>
          <InquiredStyle.GotoHome>
            <InquiredStyle.GotoHomeLink to="/">홈으로</InquiredStyle.GotoHomeLink>
          </InquiredStyle.GotoHome>
        </InquiredStyle.Wrapper>
      </InquiredStyle.Container>
    );
};

export default InquiredSuccessComponent;