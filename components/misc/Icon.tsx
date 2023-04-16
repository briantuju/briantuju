import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface IIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  size?: number
  color?: string
  icon: React.ElementType
}

export const Icon: React.FC<IIconProps> = (props) => {
  const { size, color, icon, style: styleArg, ...svgProps } = props
  let svgExtraProps: any = {}

  if (size !== undefined) {
    svgExtraProps.width = `${size}px`
    svgExtraProps.height = `${size}px`
  } else {
    // default
    svgExtraProps.width = '24px'
    svgExtraProps.height = '24px'
  }

  if (color !== undefined) {
    svgExtraProps.style = { color, ...styleArg }
  }
  const IconComp: React.ElementType = icon
  return <IconComp {...svgProps} {...svgExtraProps} />
}
