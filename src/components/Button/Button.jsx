import React from 'react'

const Button = ({handleClick, title}) => {
  return (
      <button 
      className='text-[white] hover:text-[black] transition-all drop-shadow-md shadow-[#D03EDD] hover:drop-shadow-xl p-2 h-50px bg border-2 hover:bg-[white] hover:border-[#D03EDD] bg-[#D03EDD] bg-gradient-to-r from-green-[#D03EDD] to-blue-[#822C8F] rounded-md'
      onClick={handleClick}
      >
        {title}
      </button>
  )
}

export default Button