import React from 'react';
import { render } from '@testing-library/react';
import { BasicCoreParagraph } from './core-paragraph.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCoreParagraph />);
  const rendered = getByText('hello from CoreParagraph');
  expect(rendered).toBeTruthy();
});
