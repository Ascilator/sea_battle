import renderer from 'react-test-renderer';
import { Fire } from './Fire';

test('Fire render', () => {
  const fire = renderer.create(<Fire />).toJSON();
  expect(fire).toMatchSnapshot();
});
