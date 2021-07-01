import React from 'react'
import { render, screen } from '@testing-library/react'
import { ParagraphBlock } from './core-paragraph/core-paragraph.composition'
import { ImageBlock } from './core-image/core-image.composition'
import { HeadingBlock } from './core-heading/core-heading.composition'
import { ListBlock } from './core-list/core-list.composition'
import { GalleryBlock } from './core-gallery/core-gallery.composition'
import { QuoteBlock } from './core-quote/core-quote.composition'

describe('block', () => {
  it('should render paragraph', () => {
    render(<ParagraphBlock />)
    const paragraphVariant = screen.getByTestId('paragraphVariant')
    expect(paragraphVariant).toBeTruthy()
  })
  it('should render image', () => {
    render(<ImageBlock />)
    const imageVariant = screen.getByTestId('imageVariant')
    expect(imageVariant).toBeTruthy()
  })
  it('should render heading', () => {
    render(<HeadingBlock />)
    const headingVariant = screen.getByTestId('headingVariant')
    expect(headingVariant).toBeTruthy()
  })
  it('should render list', () => {
    render(<ListBlock />)
    const listVariant = screen.getByTestId('listVariant')
    expect(listVariant).toBeTruthy()
  })
  it('should render gallery', () => {
    render(<GalleryBlock />)
    const galleryVariant = screen.getByTestId('galleryVariant')
    expect(galleryVariant).toBeTruthy()
  })
  it('should render quotes', () => {
    render(<QuoteBlock />)
    const quoteVariant = screen.getByTestId('quoteVariant')
    expect(quoteVariant).toBeTruthy()
  })
})
