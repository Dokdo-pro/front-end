import React, { ReactNode } from 'react';
import LeftScreen from '@/components/layout/leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from '@/components/layout/layout1/Layout1.styled'

import BackHeader from '@/components/layout/header/BackHeader';
import Footer from '@/components/layout/footer/Footer';
interface Layout8Props {
  children: ReactNode;
}

// 취소버튼, 중앙프롭스 하단 푸터 X
function Layout8({ children }: Layout8Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        <BackHeader />
        <Children>{children}</Children>
        <Footer />
      </Right>

    </LayoutContainer>
  );
}

export default Layout8;
