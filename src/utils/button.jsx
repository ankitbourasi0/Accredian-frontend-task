import React from 'react'

const Button = ({btnName,styles,onClick}) => {
  return (
    <button className={`bg-blue-600 text-white  rounded-md text-lg font-semibold ${styles}`} onClick={onClick}>{btnName}</button>
  )
}

export default Button