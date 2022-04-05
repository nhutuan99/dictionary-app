import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components/common';
import HomePage from './features/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
