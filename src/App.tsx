import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";

import SearchPage from './components/SearchPage';

const myColor = 'maroon';

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  background-color: #600;
  color: #faa;
  width: 100%;
  margin: 0;
  padding: 0.5rem;
`;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
      <Footer>
        My favorite color is {myColor}.
      </Footer>
    </>
  );
}

export default App;
