import styles from './Button.module.css'

const Button = ({btnText}) => {


    //Events
    // In the events e means events
    const handleClick = (e) => e.target.textContent = "Hello";
    return (
        <button onClick={(e) =>handleClick(e)} className={`btn btn-primary ${styles.btn}`}>{btnText}</button>
  )
}

export default Button;