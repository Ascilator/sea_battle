import { MemoryRouter } from 'react-router-dom';

import { renderComponentForTest } from '@/helpers';
import { store } from '@/store';

import { Room } from './Room';

test('Room component', () => {
  const room = renderComponentForTest(
    <MemoryRouter>
      <Room />
    </MemoryRouter>,
    {
      store
    }
  );

  expect(room).toMatchSnapshot();
});
