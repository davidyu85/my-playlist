import { useEffect, useState, useRef, useContext, KeyboardEvent, ReactElement } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

import { TitleBar, ScreenButton } from './TitleBar';
import MovieList, { Movie } from './MovieList';
import { ContextPlayList } from '../Contexts';

const omdbApiKey = 'bce2b2d3';

const SearchBar = styled.div`
  width: 100%;
  margin: 1rem 1.5rem;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: calc(100% - 50px);
  border: 0;
  border-radius: 0;
  background-color: #800;
  padding: 0.5rem 0.2rem;
  margin: 0;
  color: #fff;

  &:focus {
    outline: 0 !important;
  }

  &::placeholder {
    color: #c88;
  }
`;

const SearchButton = styled.button`
  background-color: #800;
  border: 0;
  border-radius: 0;
  padding: 0.2rem .5rem;
  margin: 0;
  color: white;
`;

const NoResult = styled.span`
  color: #fff;
  padding: 1rem;
`;

/**
 * Page searching movies from OMDb.
 * @returns ReactElement
 */
const SearchPage = (): ReactElement => {
  const searchInput = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<{ keyword: string, page: number }>({ keyword: 'aaa', page: 1 });
  const [movies, setMovies] = useState<Movie[]>([]);

  const { playList, setPlayList } = useContext(ContextPlayList);

  useEffect(() => {
    axios(`https://www.omdbapi.com/?s=${search.keyword}&apikey=${omdbApiKey}&page=${search.page}`)
      .then(({ data }) => {
        setMovies(data.Search);
      });
  }, [search]);

  const searchMovie = () => {
    setSearch({ keyword: (searchInput.current as HTMLInputElement)?.value, page: 1 })
  };

  const searchMovieByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch({ keyword: (e.target as HTMLInputElement).value, page: 1 })
    }
  };

  const toggleToPlaylist = (movie: Movie) => {
    const newPlayList = { ...playList};
    if (newPlayList[movie.imdbID]) {
      delete newPlayList[movie.imdbID];
    } else {
      newPlayList[movie.imdbID] = movie;
    }
    setPlayList(newPlayList);
  }

  return (
      <>
        <TitleBar>
          <ScreenButton to="playlist">
            Playlist
          </ScreenButton>

          <SearchBar>
            <SearchButton onClick={searchMovie} aria-label="Search">
              <MdSearch size={21} />
            </SearchButton>
            <SearchInput
              ref={searchInput}
              onKeyPress={searchMovieByEnter}
              aria-label="Enter keyword"
              placeholder="Enter keyword - minimum 3 characters"
            />
          </SearchBar>
        </TitleBar>

        <MovieList list={movies} onClickMovieBlock={toggleToPlaylist} />

        {movies && movies.length === 0 && <NoResult>Search no results.</NoResult>}
        {search.keyword.length < 3 && <NoResult>Minimum 3 characters required for search to proceed.</NoResult>}
      </>
  );
};

export default SearchPage;