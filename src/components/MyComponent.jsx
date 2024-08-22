import React,{useState} from 'react'

const MyComponent = () => {

    // useState("this is the inital state")
    // Initialize state with 0
    const [number, setNumber] = useState(0);

    const handleClick = () => {
        
        setNumber(number + 1 )
    }
        
  return (
      <div>
          <p>Name : {number}</p>
          <button className="btn btn-primary" onClick={handleClick}>Click me</button>
    </div>
  )
}

export default MyComponent;