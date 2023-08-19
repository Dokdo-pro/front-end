import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Layout1 from './components/layout/layout1/Layout1';
import MainRoutes from './routes/Main';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout1>
        <MainRoutes />
      </Layout1>
    </Router>
  );
}

export default App;
