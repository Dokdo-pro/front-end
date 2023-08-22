import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import MypageRoutes from './routes/Mypage';
import LiteracytestRoute from './routes/literacytest';
import AdminRoutes from './routes/AdminRoutes';
import MainRoutes from './routes/Main';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <MypageRoutes />
      <AdminRoutes />
      <LiteracytestRoute />
      <MainRoutes />
    </Router>
  );
}

export default App;
