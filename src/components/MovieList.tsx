import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface MovieListProps {
  list: Movie[];
}

export interface Movie {
  [key: string]: string;
}

const MovieListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MovieBlock = styled.div`

`;

const MovieList = ({ list = [] }: MovieListProps) => (
  <MovieListWrapper>
    {list.map((movie: Movie): ReactElement => (
      <MovieBlock key={movie.imdbID}>
        {movie.Title}
      </MovieBlock>
    ))}
  </MovieListWrapper>
);

export default MovieList;