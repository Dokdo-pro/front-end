import React, { ReactNode } from 'react';
import LeftScreen from '@/components/layout/leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from '@/components/layout/layout1/Layout1.styled'
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';

interface Layout4Props {
  children: ReactNode;
}
//그룹헤더 // 기본 푸터
function Layout4({ children }: Layout4Props) {
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

export default Layout4;
