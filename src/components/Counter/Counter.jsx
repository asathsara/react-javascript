import React, { useState } from 'react'
import styles from './Counter.module.css'

const Counter = () => {

    const [count, setCount] = useState(0);

    // function for incremnt the count
    const incrementCount = () => {
        setCount(count + 1)
    }

    // function for decrement the count
    const decrementCount = () => {
        setCount(count - 1)
    }

    // function for reset 
    const resetCount = () => {
        setCount(0)
    }

  return (
      <div className={styles.counterContainer}>
          <p className={styles.counter}>{count}</p>
          <button onClick={incrementCount} className={`btn btn-outline-primary ${styles.btn}`}>Increment</button>
          
          <button onClick={decrementCount} className={`btn btn-outline-primary ${styles.btn}`}>Decrement</button>
          
          <button onClick={ resetCount} className={`btn btn-outline-primary ${styles.btn}`}>Reset</button>
    </div>
  )
}

export default Counter