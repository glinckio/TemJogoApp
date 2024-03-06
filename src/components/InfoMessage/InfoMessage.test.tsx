import React from 'react';
import InfoMessage from './InfoMessage';
import {content} from './InfoMessage.content';
import {render, screen} from '@testing-library/react-native';
import {colors} from '../../utils/colors';

describe('Info Message Component', () => {
  const theme = 'dark';
  it('should render component', () => {
    render(<InfoMessage />);

    const element = screen.getByTestId(content.testID);
    expect(element).toBeOnTheScreen();
  });

  it('should render component with message', () => {
    const message = 'any_message';

    render(<InfoMessage message={message} />);

    const element = screen.getByTestId(content.testID);
    expect(element).toHaveTextContent(message);
    expect(element).toHaveStyle({
      color: colors[theme].tertiary.default,
    });
  });

  it('should render component with error message', () => {
    const message = 'any_message';

    render(<InfoMessage message={message} error />);

    const element = screen.getByTestId(content.testID);
    expect(element).toHaveStyle({
      color: 'red',
    });
  });
});
