import React from 'react';
import { AuthorList } from './author-list';
import authorData from './author-data';

export const BasicAuthorList = () => (
  <AuthorList authors={authorData} />
);

export const EmptyAuthorList = () => (
  <AuthorList authors={[]} />
);
