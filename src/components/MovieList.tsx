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
  flex-wrap: wrap;
  align-items: center;
  width: calc(100% - 4rem);
  padding: 2rem;
`;

const MovieBlock = styled.div`
  position: relative;
  background-color: #333;
  color: #fff;
  margin: .75rem;
  width: 200px;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

const MovieTitle = styled.div`
  position: absolute;
  bottom: 0;

  background-color: rgba(40, 0, 0, .75);
  width: 100%;
  padding: 1rem;
  margin: 0;

  &:hover {
    box-shadow:
  }
`;

const MovieList = ({ list = [] }: MovieListProps) => (
  <MovieListWrapper>
    {list.map((movie: Movie): ReactElement => (
      <MovieBlock key={movie.imdbID}>
        {movie.Poster && <img src={movie.Poster} />}
        <MovieTitle>{movie.Title}</MovieTitle>
      </MovieBlock>
    ))}
  </MovieListWrapper>
);

export default MovieList;