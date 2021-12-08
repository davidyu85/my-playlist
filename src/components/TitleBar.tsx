import styled from 'styled-components';

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

export const ScreenButton = styled.button`
  background-color: #a00;
  color: white;
  border: 0;
  border-radius: 0;
  padding: 1.5rem 1rem;
  width: 6rem;

  &:hover,
  &:focus {
    background-color: #c00;
    outline: 0 !important;
  }
`;