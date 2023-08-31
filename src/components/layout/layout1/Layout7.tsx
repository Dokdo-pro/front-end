import React, { ReactNode } from 'react';
import LeftScreen from '@/components/layout/leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from '@/components/layout/layout1/Layout1.styled'


import BoardAndPhotoFooter from '@/components/layout/footer/BoardAndPhotoFooter';
import Header from '@/components/layout/header/Header';

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
        <Header />
        <Children>{children}</Children>
        <BoardAndPhotoFooter />
      </Right>
    </LayoutContainer>
  );
}

export default Layout7;
