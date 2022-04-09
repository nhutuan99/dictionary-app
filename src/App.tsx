import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components/common';
import HomePage from './features/Home';
import styled from 'styled-components';

const HTML = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <HTML>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </HTML>
  );
}

export default App;
