import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import MovieList, { Movie } from './MovieList';

const omdbApiKey = 'bce2b2d3';

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = styled.input`

`;

const callForMovies = (keyword: string, page: number) => axios(`https://www.omdbapi.com/?s=${keyword}&apikey=${omdbApiKey}&page=${page}`)

const SearchPage = () => {
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

  return (
      <>
        <TitleBar>
          <h3>Search</h3>
          <Search />
        </TitleBar>

        <MovieList list={movies} />
      </>
  );
};

export default SearchPage;