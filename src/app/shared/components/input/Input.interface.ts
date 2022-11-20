
type InputTypes = "text" | "password"

export interface InputProps {
  label: string
  register: any
  type?: InputTypes
  validationError: string
  hasError?: any
  dataTestId: string
  setFocus(): void
}