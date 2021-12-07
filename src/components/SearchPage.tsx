import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const Search = styled.input`
  margin: 1rem 2rem;
  width: 100%;
  border: 0;
  background-color: #800;
  padding: 0.5rem;
  color: #fff;

  &:focus {
    outline: 0 !important;
  }
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

const callForMovies = (keyword: string, page: number) => axios(`https://www.omdbapi.com/?s=${keyword}&apikey=${omdbApiKey}&page=${page}`)

const SearchPage = () => {
  const [search, setSearch] = useState<{ keyword: string, page: number }>({ keyword: 'aaa', page: 1 });
  const [movies, setMovies] = useState<Movie[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios(`https://www.omdbapi.com/?s=${search.keyword}&apikey=${omdbApiKey}&page=${search.page}`)
      .then(({ data }) => {
        console.log(data);
        setMovies(data.Search);
        setTotal(data.totalResults);
      });
  }, [search]);

  return (
      <>
        <TitleBar>
          <PlayListButton>
            My playlist
          </PlayListButton>
          <Search />
        </TitleBar>

        <MovieList list={movies} />
      </>
  );
};

export default SearchPage;