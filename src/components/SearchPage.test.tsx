import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

import SearchPage from './SearchPage';

// I actually learnt that I can get away from without having to mock apis,
// although it does makes the test perform slower due to network calls to OMdb.

// Still, usually I would mock apis for testing performance - this is not E2E after all.

const layout = (
  <HashRouter>
    <SearchPage />
  </HashRouter>
)

describe('SearchPage', () => {
  test('renders default results on mount', async () => {
    render(layout);
    expect(await screen.findByText('AAA When Worlds Collide')).toBeVisible();
  });

  test('search is triggerable by pressing enter', async () => {
    render(layout);
    expect(await screen.findByText('AAA When Worlds Collide')).toBeVisible();

    userEvent.type(screen.getByLabelText('Enter keyword'), 'bbb{enter}');
    expect(await screen.findByText('BBB')).toBeVisible();
  });

  test('search is triggerable by clicking search button', async () => {
    render(layout);
    expect(await screen.findByText('AAA When Worlds Collide')).toBeVisible();

    userEvent.type(screen.getByLabelText('Enter keyword'), 'bbb');
    userEvent.click(screen.getByLabelText('Search'));
    expect(await screen.findByText('BBB')).toBeVisible();
  });
})
