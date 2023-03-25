import React from 'react'

const circle = (props) => {
  return (
    <>
    <div className='rounded-full -mt-4 p-2 z-10 bg-gray-400 w-10 h-10 hover:bg-red-400  font-bold text-gray-700  flex
     items-center justify-center font-mono' >
        {props.value}
        </div>
    
    </>
  )
}

export default circle