import React from 'react';
import { screen, render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Test not Found page', () => {
  it('teste', () => {
    render(<NotFound />);

    const paragraph = screen.getByText('Not Found');
    expect(paragraph).toBeDefined();
  });
});
