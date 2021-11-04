import { renderComponentForTest } from '@/helpers';
import { store } from '@/store';

import { PlayerField } from './PlayerField';

test('PlayerField component', () => {
  const playerField = renderComponentForTest(<PlayerField />, {
    store
  });

  expect(playerField).toMatchSnapshot();
});
