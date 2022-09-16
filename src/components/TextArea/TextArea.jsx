import React from 'react'

const TextArea = ({value, onChange, className, placeholder}) => {
  return (
    <div>
        <textarea
        onChange={(e)=>{onChange(e)}}
        value={value}
        rows="10"
        className={`border-2  focus:border-[#822C8F] focus:outline-none  ${className}`}
        placeholder={placeholder}
        ></textarea>
    </div>
  )
}

export default TextArea