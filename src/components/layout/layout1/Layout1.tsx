import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';

interface Layout1Props {
  children: ReactNode;
}

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
