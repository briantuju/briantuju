const TextareaInput = ({ ...props }: React.HTMLProps<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className={`bt_input ${props.className || ''}`}
    ></textarea>
  )
}

export default TextareaInput
