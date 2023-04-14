const Button = ({ ...props }: React.HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      type={'button' || props.type}
      className={`bt_btn ${props.className || ''}`}
    >
      {props.children}
    </button>
  )
}

export default Button
