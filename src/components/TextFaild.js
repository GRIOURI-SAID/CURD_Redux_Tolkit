import React from 'react'

function TextFaild({label , inputProps , value , onChange}) {
  return (
      <div className='flex flex-col'>
          <label className='text-base text-gray-800 mb-2'>{label}</label>
          <input
             className='bg-gray-200 py-2 px-2 border-2 ontline-none'
              {...inputProps}
              value={value}
              onChange={onChange}
          />
    </div>
  )
}

export default TextFaild