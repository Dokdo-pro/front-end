import React, { ReactNode } from 'react';
import Footer from '../footer/Footer';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout3.styled';

import BackSearchHeader from '../header/BackSearchHeader';

interface Layout3Props {
  children: ReactNode;
}
// 헤더 : 뒤로가기 중앙 우측 검색알림아이콘 / 푸터 기본푸터 : 쓰는곳 마이페이지,
function Layout3({ children }: Layout3Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        <BackSearchHeader />
        <Children>{children}</Children>
        <Footer />
      </Right>
    </LayoutContainer>
  );
}

export default Layout3;
