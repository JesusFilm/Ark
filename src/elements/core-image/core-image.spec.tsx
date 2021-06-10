import React from 'react';
import { render } from '@testing-library/react';
import { BasicCoreImage } from './core-image.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCoreImage />);
  const rendered = getByText('hello from CoreImage');
  expect(rendered).toBeTruthy();
});
