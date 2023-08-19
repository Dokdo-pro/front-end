import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { LayoutContainer, ContentWrapper } from './Layout1.styled';
import RightScreen from '../rightscreen/RightScreen';

interface Layout1Props {
  children: ReactNode;
}

function Layout1({ children }: Layout1Props) {
  return (
    <LayoutContainer>
      <LeftScreen />
      <ContentWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '474px',
            height: '100%',
            position: 'fixed',
            top: '0',
            zIndex: '10',
            boxSizing: 'border-box',
            border: 'solid 1px black',
          }}
        >
          <Header />
          <Footer />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0',
            paddingTop: '110px',
            paddingBottom: '70px',
          }}
        >
          {children}
        </div>
      </ContentWrapper>
      <RightScreen />
    </LayoutContainer>
  );
}

export default Layout1;
