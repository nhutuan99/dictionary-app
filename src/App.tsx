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
  over-flow: hidden;
  height: 100vh;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${bg});
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    width: 100%;
    over-flow: hidden;
    height: 1024px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${bg});
    background-position: center;
    background-size: cover;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: 1024px;
    over-flow: hidden;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${bg});
    background-position: center;
    background-size: cover;
  }
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
