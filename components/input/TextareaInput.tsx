const TextareaInput = ({ ...props }: React.HTMLProps<HTMLTextAreaElement>) => {
  return <textarea {...props} className="bt_input"></textarea>
}

export default TextareaInput
