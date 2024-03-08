import React from 'react';
import InputTextField from './InputTextField';
import {content} from './InputTextField.content';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Image} from 'react-native';

describe('Input Text Field Component', () => {
  it('should render component', () => {
    const onChangeText = jest.fn();
    const text = 'any_text';

    render(<InputTextField onChangeText={onChangeText} text={text} />);

    const element = screen.getByTestId(content.testID);
    expect(element).toBeOnTheScreen();
  });

  it('should render component with icon', () => {
    const onChangeText = jest.fn();
    const text = 'any_text';
    const icon = require('../../assets/icons/fi-rr-envelope.png');

    render(
      <InputTextField
        onChangeText={onChangeText}
        text={text}
        icon={<Image source={icon} />}
      />,
    );

    const iconElement = screen.getByTestId(content.iconTestId);
    expect(iconElement).toBeOnTheScreen();
  });

  it('should render password component', () => {
    const onChangeText = jest.fn();
    const text = 'any_text';

    render(<InputTextField onChangeText={onChangeText} text={text} password />);

    const iconElement = screen.getByTestId(content.hideShowIconButton);
    expect(iconElement).toBeOnTheScreen();
  });

  it('should render placeholder correctly', () => {
    const onChangeText = jest.fn();
    const initialText = 'any_text';
    const placeholderText = 'any_placeholder';

    render(
      <InputTextField
        onChangeText={onChangeText}
        text={initialText}
        placeholder={placeholderText}
      />,
    );

    const placeholder = screen.queryByPlaceholderText(/placeholder/i);

    expect(placeholder).toBeTruthy();
  });

  it('should update text correctly', () => {
    const onChangeText = jest.fn();
    const initialText = 'initial_value';

    render(
      <InputTextField
        onChangeText={onChangeText}
        text={initialText}
        password
      />,
    );

    const input = screen.getByTestId(content.inputTestID);

    const newTextInput = 'any_text';
    fireEvent.changeText(input, newTextInput);

    expect(onChangeText).toHaveBeenCalled();
    expect(onChangeText).toHaveBeenCalledWith(newTextInput);
  });

  it('should display custom style', () => {
    const onChangeText = jest.fn();
    const initialText = 'initial_value';
    const style = {
      backgroundColor: 'red',
    };

    render(
      <InputTextField
        onChangeText={onChangeText}
        text={initialText}
        style={style}
      />,
    );

    const inputContainer = screen.getByTestId(content.testID);

    expect(inputContainer).toHaveStyle(style);
  });
});
