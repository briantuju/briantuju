const Button = (
  props: React.HTMLProps<HTMLButtonElement> & {
    type?: 'submit' | 'reset' | 'button'
  }
) => {
  return (
    <button
      type={props.type || 'button'}
      {...props}
      className={`bt_btn ${props.className || ''}`}
    >
      {props.children}
    </button>
  )
}

export default Button
