import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';

import GroupHeader from '../header/GroupHeader';
import Footer from '../footer/Footer';
import Header from '../header/Header';

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
