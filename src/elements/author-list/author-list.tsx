import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { AuthorCardProps, AuthorCard } from "@jesus-film/ark.elements.author-card";

export type AuthorListProps = {
  /** authors */
  authors: AuthorCardProps[];
};

export function AuthorList({ authors }: AuthorListProps) {
  return (
    <GridList cellHeight={200} cols={1}>
      {authors.map((author, i) => (
        <GridListTile key={`${i}-author`} cols={1}>
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
