import React from 'react';
import {
  GridList,
  GridListTile,
} from "@material-ui/core";
import { AuthorCardProps, AuthorCard } from "../author-card";

export type AuthorListProps = {
  /** authors */
  authors: AuthorCardProps[] | [];
};

export function AuthorList({ authors }: AuthorListProps) {
  return (
    <GridList cellHeight={160} cols={3}>
      {authors.map((author, i) => (
        <GridListTile key={`${i}-author`} cols={2}>
          <AuthorCard 
            name={author.name}
            description={author.description}
            src={author.src}
            onClick={author.onClick}
          />
        </GridListTile>
      ))}
    </GridList>
  );
}
