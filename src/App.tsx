import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'; // GlobalStyles.ts 파일에서 export한 것을 import합니다.

const StyledApp = styled.div`
  font-size: 16px;
  color: blue;
`;

function App() {
  return (
    <>
      <GlobalStyles /> {/* 전역 스타일 적용 */}
      <StyledApp>{/* Your content here */}</StyledApp>
    </>
  );
}

export default App;
