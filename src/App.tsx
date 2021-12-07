import React from 'react';
import { Routes, Route } from "react-router-dom";

import SearchPage from './components/SearchPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
