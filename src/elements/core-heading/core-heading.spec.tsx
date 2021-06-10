import React from 'react';
import { render } from '@testing-library/react';
import { BasicCoreHeading } from './core-heading.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCoreHeading />);
  const rendered = getByText('hello from CoreHeading');
  expect(rendered).toBeTruthy();
});
