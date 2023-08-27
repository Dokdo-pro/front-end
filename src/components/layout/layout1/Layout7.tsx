import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';

import BoardAndPhotoFooter from '../footer/BoardAndPhotoFooter';
import GroupHeader from '../header/GroupHeader';

interface Layout7Props {
  children: ReactNode;
}

// 헤더 뒤로가기 / 푸터 댓글 작성
function Layout7({ children }: Layout7Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        <GroupHeader/>
        <Children>{children}</Children>
        <BoardAndPhotoFooter />
      </Right>
    </LayoutContainer>
  );
}

export default Layout7;
