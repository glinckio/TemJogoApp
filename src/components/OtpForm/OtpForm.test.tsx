import React from 'react';
import {render, screen} from '@testing-library/react-native';
import OtpForm from './OtpForm';
import {content} from './OtpForm.content';

describe('Otp Form Component', () => {
  it('should render component', () => {
    render(<OtpForm />);

    const element = screen.getByTestId(content.testID);
    expect(element).toBeOnTheScreen();
  });
});
