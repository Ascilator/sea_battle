import renderer from 'react-test-renderer';
import { StartGame } from './StartGame';

test('StartGame render', () => {
  const startGame = renderer.create(<StartGame />).toJSON();
  expect(startGame).toMatchSnapshot();
});
