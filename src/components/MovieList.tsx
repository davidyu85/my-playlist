import { ReactElement, useContext } from 'react';
import styled from 'styled-components';

import { ContextPlayList } from '../Contexts';

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

  font-size: 13px;
`;

const MarkInPlayList = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  font-size: 9px;
  padding: .25rem;

  color: #fff;
  background-color: rgba(255, 200, 0 ,.5);
`;

export interface Movie {
  // List of properties from OMDb API.
  // TODO: This should be listed out or find an already provided version.
  [key: string]: string;
}
interface MovieListProps {
  // Array of "Search" object from OMDb.
  list: Movie[];
  // Enable clicking on the movie block to do something.
  onClickMovieBlock?: (movie: Movie) => void;
}

/**
 * Show the list of movies.
 * @param MovieListProps
 * @returns ReactElement
 */
const MovieList = ({ list = [], onClickMovieBlock = () => {} }: MovieListProps): ReactElement => {
  const { playList } = useContext(ContextPlayList);

  return (
    <MovieListWrapper>
      {list.map((movie: Movie): ReactElement => (
        <MovieBlock key={movie.imdbID} onClick={() => onClickMovieBlock(movie)}>
          {playList[movie.imdbID] && <MarkInPlayList>In playlist</MarkInPlayList>}
          {movie.Poster && <img src={movie.Poster} alt="" />}
          <MovieTitle>{movie.Title}</MovieTitle>
        </MovieBlock>
      ))}
    </MovieListWrapper>
  );
}

export default MovieList;