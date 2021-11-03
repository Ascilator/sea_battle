import renderer from 'react-test-renderer';
import { Button } from './Button';

test('Button render', () => {
  const buttonGreen = renderer.create(<Button text="test btn" color="#0f0" />).toJSON();
  expect(buttonGreen).toMatchSnapshot();

  const buttonBlue = renderer.create(<Button text="test btn" color="#0ff" />).toJSON();
  expect(buttonBlue).toMatchSnapshot();

  const buttonText = renderer.create(<Button text="button with text" color="#0f0" />).toJSON();
  expect(buttonText).toMatchSnapshot();
});
