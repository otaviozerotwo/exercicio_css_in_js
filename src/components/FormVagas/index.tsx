import { FormEvent, useState } from 'react'
import { ButtonStyles, FormStyles, InputStyles } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyles onSubmit={aoEnviarForm}>
      <InputStyles
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonStyles type="submit">Pesquisar</ButtonStyles>
    </FormStyles>
  )
}
export default FormVagas
