import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const Left = styled.div`
  flex: 1;
  background-color: #f0f0f0;
`;

export const Right = styled.div`
  flex: 1;
  /* background-color: transparent; */
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Children = styled.div`
  width: 474px;
  padding: 100px 0 70px 0;
  box-shadow: 1px 0 0 #ddd;
  background-color: white;
  min-height: 100vh;
  box-sizing: border-box;
`;
