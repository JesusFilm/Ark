import React from 'react'
import { render } from '@testing-library/react'
import { ParagraphBlock } from './core-paragraph/core-paragraph.composition'
import { ImageBlock } from './core-image/core-image.composition'
import { HeadingBlock } from './core-heading/core-heading.composition'
import { ListBlock } from './core-list/core-list.composition'
import { GalleryBlock } from './core-gallery/core-gallery.composition'
import { QuoteBlock } from './core-quote/core-quote.composition'

describe('block', () => {
  it('should render paragraph', () => {
    const { getByTestId } = render(<ParagraphBlock />)
    expect(getByTestId('core/paragraph')).toBeInTheDocument()
  })
  it('should render image', () => {
    const { getByTestId } = render(<ImageBlock />)
    expect(getByTestId('core/image')).toBeInTheDocument()
  })
  it('should render heading', () => {
    const { getByTestId } = render(<HeadingBlock />)
    expect(getByTestId('core/heading')).toBeInTheDocument()
  })
  it('should render list', () => {
    const { getByTestId } = render(<ListBlock />)
    expect(getByTestId('core/list')).toBeInTheDocument()
  })
  it('should render gallery', () => {
    const { getByTestId } = render(<GalleryBlock />)
    expect(getByTestId('core/gallery')).toBeInTheDocument()
  })
  it('should render quotes', () => {
    const { getByTestId } = render(<QuoteBlock />)
    expect(getByTestId('core/quote')).toBeInTheDocument()
  })
})
