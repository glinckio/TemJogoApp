import {render, screen} from '@testing-library/react-native';
import Typograph from './Typograph';
import {Text} from 'react-native';

describe('Typograph Component', () => {
  it('should render default component', () => {
    render(
      <Typograph>
        <Text>Hello brother!</Text>
      </Typograph>,
    );
    expect(screen.getByTestId('typograph-testId')).toBeTruthy();
  });
});
