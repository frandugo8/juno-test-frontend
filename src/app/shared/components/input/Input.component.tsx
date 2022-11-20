
import React, { useRef } from "react"
import { InputProps } from "./Input.interface"
import styles from "./Input.module.scss"

export const Input = ({label, dataTestId, register, type = "text", validationError, hasError, setFocus}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleLabelClick = (): void => {
    setFocus()
  }

  return (
    <div className={styles.input}>
      <label className={styles.input__label} onClick={handleLabelClick}>{label}</label>

      <input
        ref={inputRef}
        autoComplete={"true"}
        data-testid={dataTestId}
        type={type}
        className={`${styles.input__content} ${hasError? styles.input__content___errors : ""}`}
        {...register}>  
      </input>

      {hasError && <span className={styles.input__validationError}>{validationError}</span>}
    </div>
  )
}