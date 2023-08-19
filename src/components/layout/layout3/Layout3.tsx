import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { LayoutContainer, ContentWrapper } from './Layout3.styled';
import RightScreen from '../rightscreen/RightScreen';

interface Layout3Props {
  children: ReactNode;
}

function Layout3({ children }: Layout3Props) {
  return (
    <LayoutContainer>
      <div>
        어떻게 짜야 할지 모르겠습니다............... 어떻게 짜야 할지
        모르겠습니다............... 어떻게 짜야 할지 모르겠습니다...............
        어떻게 짜야 할지 모르겠습니다...............
      </div>
      <div>
      레이아웃2 에서는 새로운 Header2 Footer2 바껴야하는데 그럼 레이아웃2에는 Header2,Footer2 이렇게
        새로 만들어서 구성해야할까요?...
      </div>
      App.jsx에서는 어떤식으로 여러개의 레이아웃을 적용시키는걸까요?
      App.jsx에서는 어떤식으로 여러개의 레이아웃을 적용시키는걸까요?
      App.jsx에서는 어떤식으로 여러개의 레이아웃을 적용시키는걸까요?
      App.jsx에서는 어떤식으로 여러개의 레이아웃을 적용시키는걸까요? 도와주세요
      코치님 ~~~~~~~~!!!!!!😂😂😂😂😂😂😂😂😂
    </LayoutContainer>
  );
}

export default Layout3;
