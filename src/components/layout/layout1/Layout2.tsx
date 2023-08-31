import React, { ReactNode } from 'react';
import LeftScreen from '@/components/layout/leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from '@/components/layout/layout1/Layout1.styled'
import GroupApplyFooter from '@/components/layout/footer/GroupApplyFooter';
import Header from '@/components/layout/header/Header';


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
