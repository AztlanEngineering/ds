const SIZES=[
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl'
]

const THEME = [
  'primary',
  'secondary',
  'accent1',
  'accent2',
  'accent3'
]

const MONOCHROME = [
  'black',
  'grey',
  'white'
]

const WHEEL = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'indigo',
  'azure',
  'blue',
  'violet',
  'pink'
]

const MODALS = [
  'success',
  'warning',
  'error'
]

const ALL_COLORS = [
  ...THEME,
  ...MONOCHROME,
  ...WHEEL,
  ...MODALS
]

export {
  SIZES,
  THEME,
  MONOCHROME,
  WHEEL,
  MODALS,
  ALL_COLORS
}
