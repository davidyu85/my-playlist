import { createContext, Dispatch, SetStateAction } from 'react';
import { Movie } from './components/MovieList';

interface ContextPlayListObj {
  playList: Record<string, Movie>;
  setPlayList: Dispatch<SetStateAction<Record<string, Movie>>>;
}

export const ContextPlayList = createContext({
  playList: {},
  setPlayList: () => {},
} as ContextPlayListObj);