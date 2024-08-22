import styles from './Button.module.css'

const Button = ({btnText}) => {
    return (
        <button className={`btn btn-primary ${styles.btn}`}>{btnText}</button>
  )
}

export default Button;