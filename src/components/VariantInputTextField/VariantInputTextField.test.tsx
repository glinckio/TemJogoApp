import React from 'react';
import {render, screen} from '@testing-library/react-native';
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
});
