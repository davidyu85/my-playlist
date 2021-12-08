import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TitleBar = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #500;
  color: #fff;
  padding: 0;
  width: 100%;
  z-index: 100;
`;

export const ScreenButton = styled(NavLink)`
  background-color: #a00;
  color: white;
  padding: 1.5rem 1rem;
  width: 6rem;
  text-align: center;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #c00;
    outline: 0 !important;
  }
`;