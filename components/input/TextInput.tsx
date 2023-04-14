const TextInput = ({ ...props }: React.HTMLProps<HTMLInputElement>) => {
  return <input {...props} className={`bt_input ${props.className || ''}`} />
}

export default TextInput
