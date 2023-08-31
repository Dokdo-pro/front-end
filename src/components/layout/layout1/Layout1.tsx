import React, { ReactNode } from 'react';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import LeftScreen from '@/components/layout/leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';



interface Layout1Props {
  children: ReactNode;
}
//기본 헤더, 기본 푸터
function Layout1({ children }: Layout1Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        <Header />
        <Children>{children}</Children>
        <Footer />
      </Right>
    </LayoutContainer>
  );
}

export default Layout1;
