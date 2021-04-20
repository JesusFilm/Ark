import React from 'react';
import { render } from '@testing-library/react';
import { BasicAuthorList } from './author-list.composition';

describe('author-list', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicAuthorList />);
    const rendered = getByText('hello from AuthorList');
    expect(rendered).toBeTruthy();
  });
});
