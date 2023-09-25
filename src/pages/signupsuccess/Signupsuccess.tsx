import React from 'react';

import * as SignupSuccessStyle from '@/pages/signupsuccess/Signupsuccess.styled';
import ClapImg from '@/assets/img/claphand.png';


function SignupSuccessComponent() {

  return (
    <SignupSuccessStyle.Container>
      <SignupSuccessStyle.Wrapper>
        <SignupSuccessStyle.CheckImg
          src={ClapImg}
          alt="완료 이미지"
        ></SignupSuccessStyle.CheckImg>
        <SignupSuccessStyle.Description>
         지금 바로 로그인하고
        </SignupSuccessStyle.Description>
        <SignupSuccessStyle.Description>
           독서 토론에 도전해보세요!
        </SignupSuccessStyle.Description>
        <SignupSuccessStyle.GotoHome>
          <SignupSuccessStyle.GotoHomeLink to="/">
            확인
          </SignupSuccessStyle.GotoHomeLink>
        </SignupSuccessStyle.GotoHome>
      </SignupSuccessStyle.Wrapper>
    </SignupSuccessStyle.Container>
  );
}

export default SignupSuccessComponent;
