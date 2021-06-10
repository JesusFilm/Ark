import React from 'react'
import { CoreList } from './core-list'

export const BasicCoreList = () => (
  <CoreList
    {...{
      name: 'core/list',
      attributes: {
        ordered: false,
        values:
          '<li>Where it is located in Scripture</li><li>Who was present for this teaching</li><li>Why it was given</li><li>What is the key verse</li>'
      }
    }}
  />
)
