import React from 'react'
import { render } from '@testing-library/react'
import { Block, BlockProps } from '.'
import { blocks } from './blockData'

describe('block', () => {
  it('should render paragraph', () => {
    const { getByTestId } = render(
      <Block
        {...blocks.filter(
          (block) => block.__typename === 'CoreParagraphBlock'
        )[0]}
      />
    )
    expect(getByTestId('CoreParagraphBlock')).toBeInTheDocument()
  })

  it('should render image', () => {
    const { getByTestId } = render(
      <Block
        {...blocks.filter((block) => block.__typename === 'CoreImageBlock')[0]}
      />
    )
    expect(getByTestId('CoreImageBlock')).toBeInTheDocument()
  })

  it('should render heading', () => {
    const { getByTestId } = render(
      <Block
        {...blocks.filter(
          (block) => block.__typename === 'CoreHeadingBlock'
        )[0]}
      />
    )
    expect(getByTestId('CoreHeadingBlock')).toBeInTheDocument()
  })

  it('should render list', () => {
    const { getByTestId } = render(
      <Block
        {...blocks.filter((block) => block.__typename === 'CoreListBlock')[0]}
      />
    )
    expect(getByTestId('CoreListBlock')).toBeInTheDocument()
  })

  it('should render gallery', () => {
    const { getByTestId } = render(
      <Block
        {...blocks.filter(
          (block) => block.__typename === 'CoreGalleryBlock'
        )[0]}
      />
    )
    expect(getByTestId('CoreGalleryBlock')).toBeInTheDocument()
  })

  it('should render null', () => {
    const { baseElement } = render(
      <Block
        {...({
          __typename: 'CoreUnknownBlock'
        } as unknown as BlockProps)}
      />
    )
    expect(baseElement.textContent).toEqual(
      'The block type is currently unsupported.CoreUnknownBlock'
    )
  })
})
