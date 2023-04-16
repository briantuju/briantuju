import { ReactNode } from 'react'

declare global {
  /*
   * Used as a type for the rest/spread operator
   */
  interface RestProps {
    [x: string]: any
  }

  /*
   * Used as the children prop of react
   */
  interface ChildrenProp {
    children?: ReactNode
  }
}
