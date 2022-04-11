import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components/common';
import HomePage from './features/Home';
import styled from 'styled-components';
import bg from './assets/imgs/bg.jpeg';

const HTML = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100vh;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${bg});
  background-position: center;
`;

function App() {
  return (
    <HTML>
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
      <Footer />
    </HTML>
  );
}

export default App;
