import React from 'react'

function Button({ onClick , children}) {
  return (
      <button className=' text-white bg-indigo-600 rounded py-2 px-6 my-10' onClick={onClick}>
          {children}
    </button>
  )
}

export default Button