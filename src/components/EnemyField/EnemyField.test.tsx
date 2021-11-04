import { renderComponentForTest } from '@/helpers';
import { store } from '@/store';

import { EnemyField } from './EnemyField';

test('EnemyField component', () => {
  const enemyFiled = renderComponentForTest(<EnemyField />, {
    store
  });

  expect(enemyFiled).toMatchSnapshot();
});
