import React from 'react';
import {content} from './PrimaryButton.content';
import {render, screen, fireEvent} from '@testing-library/react-native';
import PrimaryButton from './PrimaryButton';

describe('Primary Button Component', () => {
  it('should render component', () => {
    const title = 'any_title';
    render(<PrimaryButton onPress={jest.fn} title={title} />);

    const element = screen.getByTestId(content.testID);
    expect(element).toBeOnTheScreen();
  });

  it('should render component with title', () => {
    const title = 'any_title';
    const onPress = jest.fn();

    render(<PrimaryButton onPress={onPress} title={title} />);

    const button = screen.getByTestId(content.testID);

    expect(button).toHaveTextContent(title);
  });

  it('should press component', () => {
    const title = 'any_title';
    const onPress = jest.fn();
    render(<PrimaryButton onPress={onPress} title={title} />);

    fireEvent.press(screen.getByTestId(content.testID));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
