import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';
import GroupApplyFooter from '../footer/GroupApplyFooter';
import GroupHeader from '../header/GroupHeader';
import Header from '../header/Header';

interface Layout2Props {
  children: ReactNode;
}
// 그룹 상세 페이지 -> 그룹헤더 + 그룹 생성 푸터
function Layout2({ children }: Layout2Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
       <Header />
        <Children>{children}</Children>
        <GroupApplyFooter />
      </Right>
    </LayoutContainer>
  );
}

export default Layout2;
