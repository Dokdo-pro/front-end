
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 474px auto;
  height: 100vh;
  overflow: hidden;
`;


export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

export const FooterWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const ContentWrapper = styled.div`
  grid-column: 2 / span 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 474px;
  min-width: 474px;
  box-sizing: border-box;
`;
