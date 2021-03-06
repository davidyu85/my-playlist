import { useContext, ReactElement } from 'react';
import styled from 'styled-components';

import { TitleBar, ScreenButton } from './TitleBar';
import MovieList from './MovieList';
import { ContextPlayList } from '../Contexts';

const NoList = styled.span`
  color: #fff;
  padding: 1rem;
`;

const Heading = styled.h3`
  padding: 0 2rem;
  font-weight: 400;
`;

const Background = styled.div`
  position: fixed;
  background-color: ${(props: PlayListPageProps) => props.bgColor || '#000'};
  height: 100vh;
  width: 100vw;
`

interface PlayListPageProps {
  // Favorite background color.
  bgColor?: string;
}

/**
 * Confirmed playlist of movies.
 * @returns ReactElement
 */
const PlayListPage = ({ bgColor }: PlayListPageProps): ReactElement => {
  const { playList } = useContext(ContextPlayList);

  const playListObjToArray = Object.values(playList);

  return (
    <>
      <TitleBar>
        <ScreenButton to="/">
          Search
        </ScreenButton>
        <Heading>My playlist</Heading>
      </TitleBar>
      <Background bgColor={bgColor} />

      <MovieList list={playListObjToArray} />

      {playListObjToArray.length === 0 && <NoList>Playlist is empty</NoList>}
    </>
  );
};

export default PlayListPage;