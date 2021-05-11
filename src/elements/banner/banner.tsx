import React from 'react'
import { Phone, PhoneProps } from './variants/phone'
import { Primary, PrimaryProps } from './variants/primary'

export type BannerProps = PrimaryProps | PhoneProps

export function Banner (props:BannerProps) {
  switch (props.variant) {
    case 'phone':
      return <Phone {...props} />
    case 'primary':
      return <Primary {...props} />
  }
}
