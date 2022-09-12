import React from 'react'

const TextArea = ({value, onChange}) => {
  return (
    <div>
        <textarea
        onChange={(e)=>{onChange(e)}}
        value={value}
        cols="30" 
        rows="10"
        className='border-[#D03EDD] focus:outline-[#D03EDD]'
        ></textarea>
    </div>
  )
}

export default TextArea