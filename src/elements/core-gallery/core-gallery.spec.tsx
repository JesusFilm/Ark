import React from 'react';
import { render } from '@testing-library/react';
import { BasicCoreGallery } from './core-gallery.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCoreGallery />);
  const rendered = getByText('hello from CoreGallery');
  expect(rendered).toBeTruthy();
});
