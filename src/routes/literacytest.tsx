import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LiteracyTestMain from '../pages/literacytest/LiteracyTestMain';
import OXTestMain from '../pages/literacytest/OXTestMain';
import LiteracyTestScreen from '../pages/literacytest/LiteracyTestScreen';
import OXTestScreen from '../pages/literacytest/OXTestScreen';
import OXTestResult from '../pages/literacytest/OXTestResult';
import LiteracyTestResult from '../pages/literacytest/LiteracytestResult';
import Layout1 from '../components/layout/layout1/Layout1';
import Layout8 from '../components/layout/layout1/Layout8';

const LiteracytestRoute = () => {
  // Literacy Test 사용자 답변을 관리할 상태
  const [literacyUserAnswers, setLiteracyUserAnswers] = useState<number[]>([]);
  // OX Test 사용자 답변을 관리할 상태
  const [oxUserAnswers, setOXUserAnswers] = useState<string[]>([]);

  const results = ['O', 'X', 'O', 'O', 'X'];

  const handleSetLiteracyUserAnswers = (answers: number[]) => {
    setLiteracyUserAnswers(answers);
  };

  const handleSetOXUserAnswers = (answers: string[]) => {
    setOXUserAnswers(answers);
  };

  return (
    <Routes>
      <Route
        path="/literacy-test"
        element={
          <Layout1>
            <LiteracyTestMain />
          </Layout1>
        }
      />
      <Route
        path="/literacy-test/screen"
        element={
          <Layout8>
            <LiteracyTestScreen setUserAnswers={handleSetLiteracyUserAnswers} />
          </Layout8>
        }
      />
      <Route
        path="/literacy-test/screen/result"
        element={
          <Layout1>
            <LiteracyTestResult userAnswers={literacyUserAnswers} />
          </Layout1>
        }
      />
      <Route
        path="/ox-quiz"
        element={
          <Layout1>
            <OXTestMain />
          </Layout1>
        }
      />
      <Route
        path="/ox-quiz/screen"
        element={
          <Layout8>
            <OXTestScreen setUserAnswers={handleSetOXUserAnswers} />
          </Layout8>
        }
      />
      <Route
        path="/ox-quiz/screen/result"
        element={
          <Layout1>
            <OXTestResult userAnswers={oxUserAnswers} />
          </Layout1>
        }
      />
    </Routes>
  );
};
export default LiteracytestRoute;
