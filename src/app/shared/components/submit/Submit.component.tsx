
import { SubmitProps } from "./Submit.interface"
import styles from "./Submit.module.scss"

export const Submit = ({text, isLoading}: SubmitProps) => {
  return (
    <button className={`${styles.submit} ${isLoading && styles.submit___isLoading}`} type="submit">

      {isLoading && <svg className={styles.spinner} viewBox="0 0 50 50">
        <circle className={styles.spinner__path} cx="25" cy="25" r="20" fill="none" strokeWidth="7"></circle>
      </svg>}
    
      {text}
    </button>
  )
}