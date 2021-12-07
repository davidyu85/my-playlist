import React, { useEffect, useState, useRef, KeyboardEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';


import MovieList, { Movie } from './MovieList';

const omdbApiKey = 'bce2b2d3';

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #500;
  color: #fff;
  padding: 0;
`;

const SearchBar = styled.div`
  width: 100%;
  margin: 1rem 1.5rem;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: calc(100% - 50px);
  border: 0;
  background-color: #800;
  padding: 0.5rem;
  color: #fff;

  &:focus {
    outline: 0 !important;
  }
`;

const SearchButton = styled.button`
  background-color: #a00;
  border: 0;
  padding: 0.45rem;
  color: white;
`;

const PlayListButton = styled.button`
  background-color: #a00;
  color: white;
  border: 0;
  padding: 1.5rem;
  width: 8rem;

  &:hover,
  &:focus {
    background-color: #c00;
    outline: 0 !important;
  }
`;

const SearchPage = () => {
  const searchInput = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<{ keyword: string, page: number }>({ keyword: 'aaa', page: 1 });
  const [movies, setMovies] = useState<Movie[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios(`https://www.omdbapi.com/?s=${search.keyword}&apikey=${omdbApiKey}&page=${search.page}`)
      .then(({ data }) => {
        setMovies(data.Search);
        setTotal(data.totalResults);
      });
  }, [search]);

  const searchMovie = () => {
    console.log();
    setSearch({ keyword: (searchInput.current as HTMLInputElement)?.value, page: 1 })
  };

  const searchMovieByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch({ keyword: (e.target as HTMLInputElement).value, page: 1 })
    }
  };

  return (
      <>
        <TitleBar>
          <PlayListButton>
            My playlist
          </PlayListButton>

          <SearchBar>
            <SearchInput ref={searchInput} onKeyPress={searchMovieByEnter} aria-label="Enter keyword" />
            <SearchButton onClick={searchMovie} aria-label="Search">
              <MdSearch />
            </SearchButton>
          </SearchBar>
        </TitleBar>

        <MovieList list={movies} />
      </>
  );
};

export default SearchPage;