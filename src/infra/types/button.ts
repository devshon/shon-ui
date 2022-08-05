import React from 'react'

export type Color = 'default' | 'primary' | 'secondary'

export type Type = 'default' | 'contained' | 'outlined'

export type Size = 'small' | 'medium' | 'large'

export interface Button {
  children?: React.ReactNode
  variant?: Type
  color?: Color
  size?: Size
  disabled?: boolean
  onClick?: () => void
}
