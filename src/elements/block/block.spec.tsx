import React from 'react'
import { render } from '@testing-library/react'
import { Block } from '.'
import { blocks } from './blockData'

describe('block', () => {
  it('should render paragraph', () => {
    const { getByTestId } = render(
      <Block
        {...blocks.filter((block) => block.name === 'core/paragraph')[0]}
      />
    )
    expect(getByTestId('core/paragraph')).toBeInTheDocument()
  })
  it('should render image', () => {
    const { getByTestId } = render(
      <Block {...blocks.filter((block) => block.name === 'core/image')[0]} />
    )
    expect(getByTestId('core/image')).toBeInTheDocument()
  })
  it('should render heading', () => {
    const { getByTestId } = render(
      <Block {...blocks.filter((block) => block.name === 'core/heading')[0]} />
    )
    expect(getByTestId('core/heading')).toBeInTheDocument()
  })
  it('should render list', () => {
    const { getByTestId } = render(
      <Block {...blocks.filter((block) => block.name === 'core/list')[0]} />
    )
    expect(getByTestId('core/list')).toBeInTheDocument()
  })
  it('should render gallery', () => {
    const { getByTestId } = render(
      <Block {...blocks.filter((block) => block.name === 'core/gallery')[0]} />
    )
    expect(getByTestId('core/gallery')).toBeInTheDocument()
  })
})
