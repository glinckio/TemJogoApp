import React from 'react';
import GoogleButton from './GoogleButton';
import {content} from './GoogleButton.content';
import {fireEvent, render, screen} from '@testing-library/react-native';

describe('Google Button Component', () => {
  it('should render component', () => {
    render(<GoogleButton onPress={jest.fn} />);

    const element = screen.getByTestId(content.testID);
    expect(element).toBeOnTheScreen();
  });

  it('should press component', () => {
    const onPress = jest.fn();

    render(<GoogleButton onPress={onPress} />);

    fireEvent.press(screen.getByTestId(content.testID));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
