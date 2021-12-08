import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";

import { Movie } from './components/MovieList';
import SearchPage from './components/SearchPage';
import PlayListPage from './components/PlayListPage';
import { ContextPlayList } from './Contexts';

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
  const [playList, setPlayList] = useState<Record<string, Movie>>({});
  const contextValuePlayList = useMemo(() => ({ playList, setPlayList }), [playList]);

  return (
    <ContextPlayList.Provider value={contextValuePlayList}>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/playlist" element={<PlayListPage bgColor={myColor} />} />
      </Routes>
      <Footer>
        My favorite color is {myColor}.
      </Footer>
    </ContextPlayList.Provider>
  );
}

export default App;
