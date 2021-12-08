import React, { ReactElement } from 'react';
import styled from 'styled-components';


const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: calc(100% - 4rem);
  padding: 5rem 1.5rem 1.5rem 1.5rem;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`;

const MovieBlock = styled.div`
  position: relative;
  background-color: #333;
  color: #fff;
  margin: .75rem;
  width: 12rem;
  height: 17rem;
  overflow: hidden;
  text-align: left;

  img {
    width: 100%;
    height: auto;
  }

  &:hover {
    box-shadow: 0 0 1rem 1rem rgba(255, 0, 0, .3);
  }
`;

const MovieTitle = styled.div`
  position: absolute;
  bottom: 0;

  background-color: rgba(40, 0, 0, .75);
  width: 10rem;
  padding: 1rem;
  margin: 0;
`;
export interface Movie {
  // List of properties from OMDb API.
  // TODO: This should be listed out or find an already provided version.
  [key: string]: string;
}
interface MovieListProps {
  // Array of "Search" object from OMDb.
  list: Movie[];
}

/**
 * Show the list of movies.
 * @param MovieListProps
 * @returns ReactElement
 */
const MovieList = ({ list = [] }: MovieListProps): ReactElement => (
  <MovieListWrapper>
    {list.map((movie: Movie): ReactElement => (
      <MovieBlock key={movie.imdbID}>
        {movie.Poster && <img src={movie.Poster} alt="" />}
        <MovieTitle>{movie.Title}</MovieTitle>
      </MovieBlock>
    ))}
  </MovieListWrapper>
);

export default MovieList;