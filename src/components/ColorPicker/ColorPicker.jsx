import React, { useState } from 'react'
import styles from './ColorPicker.module.css'

const ColorPicker = () => {

  const [color, setColor] = useState("#FFFFFF")
  
  const handleClick = (event) => {
    setColor(event.target.value)

     
  }
  // Determine the text color based on the selected background color
  const textColor = color === "#000000" ? "#FFFFFF" : "#000000";
  
  return (
    <div className={styles.colorPickerContainer}>
      <h1 className={styles.heading}>Color Picker</h1>
      <div className={styles.colorDisplay} style={{ backgroundColor:color }}>
        <p className={styles.paragraph} style={{ color: textColor }}>Selected color : {color} </p>
      </div>
      <label className={styles.label}>Select a color:</label>
      <input className={styles.colorPicker}type='color' value={color} onChange={handleClick}></input>

    </div>
  )
}

export default ColorPicker;