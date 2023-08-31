import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const Left = styled.div`
  flex: 1;
  background-color: #fff7ec;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const haeder = styled.header`
  width: 100%;
`;

export const footer = styled.footer`
  width: 100%;
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  background-color: #fff7ec;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const Children = styled.div`
  max-width: 474px;
  padding: 45px 0 70px 0;
  background-color: white;
  min-height: calc(100vh - 2px);
  box-sizing: border-box;
  border: 1px solid #ddd;
  overflow: hidden;

  @media (min-width: 475px) and (max-width: 1024px) {
    width: 474px;
  }
`;
