import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPage from './SearchPage';

// I actually learnt that I can get away from without having to mock apis,
// although it does makes the test perform slower due to network calls to OMdb.

test('renders default result on mount', async () => {
  render(<SearchPage />);
  expect(await screen.findByText('AAA When Worlds Collide')).toBeVisible();
});
