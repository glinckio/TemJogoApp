import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Image} from 'react-native';
import VariantInputTextField from './VariantInputTextField';
import {content} from './VariantInputTextField.content';

describe('Variant Input Text Field Component', () => {
  it('should render component', () => {
    const onChangeText = jest.fn();
    const text = 'any_text';

    render(<VariantInputTextField onChangeText={onChangeText} text={text} />);

    const element = screen.getByTestId(content.testID);
    expect(element).toBeOnTheScreen();
  });

  it('should render component with icon', () => {
    const onChangeText = jest.fn();
    const text = 'any_text';
    const icon = require('../../assets/icons/fi-rr-envelope.png');

    render(
      <VariantInputTextField
        onChangeText={onChangeText}
        text={text}
        icon={<Image source={icon} />}
      />,
    );

    const iconElement = screen.getByTestId(content.iconTestId);
    expect(iconElement).toBeOnTheScreen();
  });

  it('should change render password component', () => {
    const onChangeText = jest.fn();
    const text = 'any_text';

    render(
      <VariantInputTextField
        onChangeText={onChangeText}
        text={text}
        password
      />,
    );

    const iconElement = screen.getByTestId(content.hideShowIconButton);
    expect(iconElement).toBeOnTheScreen();
  });

  it('should render placeholder correctly', () => {
    const onChangeText = jest.fn();
    const initialText = 'any_text';
    const placeholderText = 'any_placeholder';

    render(
      <VariantInputTextField
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
      <VariantInputTextField
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

  it('should render component with title', () => {
    const label = 'any_label';
    const onChangeText = jest.fn();
    const initialText = 'initial_value';

    render(
      <VariantInputTextField
        onChangeText={onChangeText}
        text={initialText}
        label={label}
      />,
    );

    const input = screen.getByTestId(content.testID);

    expect(input).toHaveTextContent(label);
  });

  it('should render component with info message', () => {
    const info = 'any_info';
    const onChangeText = jest.fn();
    const initialText = 'initial_value';

    render(
      <VariantInputTextField
        onChangeText={onChangeText}
        text={initialText}
        label={info}
      />,
    );

    const input = screen.getByTestId(content.testID);

    expect(input).toHaveTextContent(info);
  });
});
