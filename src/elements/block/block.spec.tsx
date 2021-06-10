import React from 'react';
import { render } from '@testing-library/react';
import { BasicBlock } from './block.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBlock />);
  const rendered = getByText('hello from Block');
  expect(rendered).toBeTruthy();
});
