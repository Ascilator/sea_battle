import renderer from 'react-test-renderer';
import { Wait } from './Wait';

test('Wait render', () => {
  const buttonGreen = renderer.create(<Wait />).toJSON();
  expect(buttonGreen).toMatchSnapshot();
});
